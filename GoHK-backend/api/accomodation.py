from fastapi import APIRouter, Depends, HTTPException, Query, status
from typing import Optional, List, Union
from uuid import UUID

from models.accommodation import (
    AccommodationCreate, AccommodationCardResponse, AccommodationDetailedResponse,
    AccommodationListResponse, AccommodationUpdate
)
from external.supabase_client import get_supabase
from api.dependencies import get_current_user
from utils.exceptions import ResourceNotFoundError, ValidationError
import logging

router = APIRouter()
logger = logging.getLogger(__name__)
supabase = get_supabase()

def transform_accommodation_data(data: dict) -> dict:
    """Transform database data to match Pydantic models"""
    if not data:
        return data
        
    # Map 'img' to 'images' list if 'images' is missing
    if 'img' in data and ('images' not in data or not data['images']):
        data['images'] = [data['img']]
    
    # Ensure 'images' is a list
    if 'images' in data and isinstance(data['images'], str):
        data['images'] = [data['images']]
    elif 'images' not in data:
        data['images'] = []

    # Parse 'pros' from PostgreSQL array string if it's a string
    if 'pros' in data and isinstance(data['pros'], str):
        pros_str = data['pros']
        if pros_str.startswith('{') and pros_str.endswith('}'):
            pros_content = pros_str[1:-1]
            if pros_content:
                # Basic split, handle potential quotes if necessary
                data['pros'] = [p.strip().strip('"') for p in pros_content.split(',')]
            else:
                data['pros'] = []
    
    # Ensure 'rating' is float
    if 'rating' in data and data['rating'] is not None:
        try:
            data['rating'] = float(data['rating'])
        except (ValueError, TypeError):
            data['rating'] = 0.0

    return data

@router.get("/", response_model=AccommodationListResponse)
async def get_accommodations(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    """Get list of accommodations"""
    try:
        response = supabase.table("GoHK hotel table").select("*").execute()
        accommodations = [transform_accommodation_data(item) for item in response.data]
        return {
            "accommodations": accommodations,
            "total": len(accommodations),
            "page": page,
            "page_size": page_size
        }
    except Exception as e:
        logger.error(f"Error fetching accommodations: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{id}", response_model=AccommodationDetailedResponse)
async def get_accommodation_detail(id: Union[UUID, int, str]):
    """Get detailed accommodation information"""
    response = supabase.table("GoHK hotel table").select("*").eq("id", str(id)).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Accommodation not found")
    return transform_accommodation_data(response.data[0])

@router.put("/{id}", response_model=AccommodationCardResponse)
async def update_accommodation(id: Union[UUID, int, str], accommodation_update: AccommodationUpdate):
    """Update accommodation info"""
    update_data = accommodation_update.model_dump(exclude_unset=True)
    if not update_data:
        raise HTTPException(status_code=400, detail="No data provided")

    response = supabase.table("GoHK hotel table") \
        .update(update_data) \
        .eq("id", str(id)) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=404, detail="Accommodation not found")
    
    return transform_accommodation_data(response.data[0])

@router.delete("/{id}")
async def delete_accommodation(id: Union[UUID, int, str]):
    """Delete accommodation"""
    supabase.table("GoHK hotel table") \
        .delete() \
        .eq("id", str(id)) \
        .execute()

    return {"status": "deleted"}

@router.post("/", response_model=AccommodationCardResponse, status_code=status.HTTP_201_CREATED)
async def create_accommodation(accommodation_data: AccommodationCreate):
    """Create a new accommodation entry"""
    response = supabase.table("GoHK hotel table") \
        .insert(accommodation_data.model_dump()) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create accommodation")
    
    return transform_accommodation_data(response.data[0])