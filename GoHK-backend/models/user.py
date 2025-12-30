from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from uuid import UUID

class UserBase(BaseModel):
    email: EmailStr
    full_name: str

class UserCreate(UserBase):
    google_id: str

class UserUpdate(BaseModel):
    full_name: Optional[str] = None

class UserInDB(UserBase):
    id: UUID
    google_id: Optional[str]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

class UserResponse(UserBase):
    id: UUID

# Auth models
class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class GoogleAuthCallback(BaseModel):
    code: str
    state: Optional[str] = None