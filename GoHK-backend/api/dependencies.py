from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional
from services.auth_service import auth_service
from models.user import UserInDB
from utils.exceptions import AuthenticationError
import logging

logger = logging.getLogger(__name__)

security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
) -> UserInDB:
    """Dependency to get current authenticated user"""
    try:
        token = credentials.credentials
        user = await auth_service.get_current_user(token)
        return user
    except AuthenticationError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
            headers={"WWW-Authenticate": "Bearer"},
        )

async def get_current_user_optional(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(HTTPBearer(auto_error=False))
) -> Optional[UserInDB]:
    """Returns user if authenticated, None otherwise"""
    if not credentials:
        return None
    try:
        token = credentials.credentials
        return await auth_service.get_current_user(token)
    except:
        return None