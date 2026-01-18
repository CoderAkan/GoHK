from fastapi import APIRouter, Depends, HTTPException, Query, status
from typing import Optional, List, Union
from uuid import UUID

from models.place import (
    PlaceCreate, PlaceCardResponse, PlaceDetailedResponse,
    PlaceListResponse, PlaceUpdate
)
from external.supabase_client import get_supabase
from api.dependencies import get_current_user
from utils.exceptions import ResourceNotFoundError, ValidationError
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

# Note: Using get_supabase() dependency or direct import depending on project pattern
# For these routes, we'll use the convenience function
from external.supabase_client import get_supabase
supabase = get_supabase()

@router.get("/", response_model=PlaceListResponse)
async def get_places(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    """Get list of places"""
    try:
        # In a real app, we'd add pagination logic here
        response = supabase.table("Visit").select("*").execute()
        return {
            "places": response.data,
            "total": len(response.data),
            "page": page,
            "page_size": page_size
        }
    except Exception as e:
        logger.error(f"Error fetching places: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{id}", response_model=PlaceDetailedResponse)
async def get_place(id: Union[UUID, int, str]):
    """Get detailed place information"""
    response = supabase.table("Visit").select("*").eq("id", str(id)).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Place not found")
    return response.data[0]

@router.put("/{id}", response_model=PlaceCardResponse)
async def update_place(id: Union[UUID, int, str], place_update: PlaceUpdate):
    """Update a place"""
    update_data = place_update.model_dump(exclude_unset=True)
    if not update_data:
        raise HTTPException(status_code=400, detail="No data provided")

    response = supabase.table("Visit") \
        .update(update_data) \
        .eq("id", str(id)) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=404, detail="Place not found")
        
    return response.data[0]

@router.delete("/{id}")
async def delete_place(id: Union[UUID, int, str]):
    """Delete a place"""
    supabase.table("Visit") \
        .delete() \
        .eq("id", str(id)) \
        .execute()

    return {"status": "deleted"}

@router.post("/", response_model=PlaceCardResponse, status_code=status.HTTP_201_CREATED)
async def create_place(place_data: PlaceCreate):
    """Create a new place"""
    response = supabase.table("Visit") \
        .insert(place_data.model_dump()) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create place")
        
    return response.data[0]