from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from uuid import UUID

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int
    user: "UserResponse"

class RefreshTokenRequest(BaseModel):
    refresh_token: str

class GoogleTokenRequest(BaseModel):
    access_token: str
    

# Avoid circular import
from models.user import UserResponse
TokenResponse.model_rebuild()