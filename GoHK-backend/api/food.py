from fastapi import APIRouter, Depends, HTTPException, Query, status
from typing import Optional, List, Union
from uuid import UUID

from models.food import (
    FoodCreate, FoodCardResponse, FoodDetailedResponse,
    FoodListResponse, FoodUpdate
)
from external.supabase_client import get_supabase
from api.dependencies import get_current_user
from utils.exceptions import ResourceNotFoundError, ValidationError
import logging

router = APIRouter()
logger = logging.getLogger(__name__)
supabase = get_supabase()

@router.get("/", response_model=FoodListResponse)
async def get_food(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    """Get list of food/restaurants"""
    try:
        response = supabase.table("GoHK Food").select("*").execute()
        return {
            "food": response.data,
            "total": len(response.data),
            "page": page,
            "page_size": page_size
        }
    except Exception as e:
        logger.error(f"Error fetching food: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{id}", response_model=FoodDetailedResponse)
async def get_food_detail(id: Union[UUID, int, str]):
    """Get detailed food information"""
    response = supabase.table("GoHK Food").select("*").eq("id", str(id)).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Food/Restaurant not found")
    return response.data[0]

@router.put("/{id}", response_model=FoodCardResponse)
async def update_food(id: Union[UUID, int, str], food_update: FoodUpdate):
    """Update food/restaurant info"""
    update_data = food_update.model_dump(exclude_unset=True)
    if not update_data:
        raise HTTPException(status_code=400, detail="No data provided")

    response = supabase.table("GoHK Food") \
        .update(update_data) \
        .eq("id", str(id)) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=404, detail="Food not found")

    return response.data[0]

@router.delete("/{id}")
async def delete_food(id: Union[UUID, int, str]):
    """Delete food/restaurant"""
    supabase.table("GoHK Food") \
        .delete() \
        .eq("id", str(id)) \
        .execute()

    return {"status": "deleted"}

@router.post("/", response_model=FoodCardResponse, status_code=status.HTTP_201_CREATED)
async def create_food(food_data: FoodCreate):
    """Create a new food/restaurant entry"""
    response = supabase.table("GoHK Food") \
        .insert(food_data.model_dump()) \
        .execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create food entry")

    return response.data[0]