from fastapi import APIRouter, Depends, HTTPException, Query, status
from typing import Optional, List
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

@router.get("/", response_model=AccommodationListResponse)
async def get_accommodations(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    """Get list of accommodations"""
    try:
        response = supabase.table("GoHK hotel table").select("*").execute()
        return {
            "accommodations": response.data,
            "total": len(response.data),
            "page": page,
            "page_size": page_size
        }
    except Exception as e:
        logger.error(f"Error fetching accommodations: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{id}", response_model=AccommodationDetailedResponse)
async def get_accommodation_detail(id: UUID):
    """Get detailed accommodation information"""
    response = supabase.table("GoHK hotel table").select("*").eq("id", str(id)).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Accommodation not found")
    return response.data[0]

@router.put("/{id}", response_model=AccommodationCardResponse)
async def update_accommodation(id: UUID, accommodation_update: AccommodationUpdate):
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

    return response.data[0]

@router.delete("/{id}")
async def delete_accommodation(id: UUID):
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

    return response.data[0]