from fastapi import APIRouter, Depends
from api.dependencies import get_current_user
from models.user import UserInDB, UserResponse

router = APIRouter()

@router.get("/me", response_model=UserResponse)
async def get_current_user_info(
    current_user: UserInDB = Depends(get_current_user)
):
    """Get current user information"""
    return UserResponse(
        id=current_user.id,
        email=current_user.email,
        full_name=current_user.full_name
    )