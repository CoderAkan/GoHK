from typing import Optional
from uuid import UUID
from external.supabase_client import get_supabase, get_supabase_admin
from models.user import UserCreate, UserUpdate, UserInDB
from config import settings
import logging

logger = logging.getLogger(__name__)

class UserRepository:
    def __init__(self):
        # Use regular client for reads (respects RLS)
        self.client = get_supabase()
        # Use admin client for writes (bypasses RLS)
        self.admin_client = get_supabase_admin()
        self.table = "users"
    
    async def create(self, user_data: UserCreate) -> UserInDB:
        """Create new user using admin client to bypass RLS"""
        try:
            # Use admin client for INSERT to bypass RLS
            response = self.admin_client.table(self.table).insert({
                "email": user_data.email,
                "full_name": user_data.full_name,
                "google_id": user_data.google_id,
            }).execute()
            
            if response.data:
                logger.info(f"User created successfully: {user_data.email}")
                return UserInDB(**response.data[0])
            else:
                raise Exception("No data returned from insert")
                
        except Exception as e:
            logger.error(f"Error creating user: {e}")
            raise
    
    async def get_by_id(self, user_id: UUID) -> Optional[UserInDB]:
        """Get user by ID using regular client"""
        try:
            response = self.client.table(self.table).select("*").eq("id", str(user_id)).single().execute()
            return UserInDB(**response.data) if response.data else None
        except:
            return None
    
    async def get_by_email(self, email: str) -> Optional[UserInDB]:
        """Get user by email using admin client"""
        try:
            # Use admin client to bypass RLS for email lookup
            response = self.admin_client.table(self.table).select("*").eq("email", email).single().execute()
            return UserInDB(**response.data) if response.data else None
        except:
            return None
    
    async def get_by_google_id(self, google_id: str) -> Optional[UserInDB]:
        """Get user by Google ID using admin client"""
        try:
            # Use admin client to bypass RLS for Google ID lookup
            response = self.admin_client.table(self.table).select("*").eq("google_id", google_id).single().execute()
            return UserInDB(**response.data) if response.data else None
        except:
            return None
    
    async def update(self, user_id: UUID, user_data: dict) -> Optional[UserInDB]:
        """Update user using admin client"""
        try:
            # Use admin client for UPDATE to bypass RLS
            response = self.admin_client.table(self.table).update(user_data).eq("id", str(user_id)).execute()
            return UserInDB(**response.data[0]) if response.data else None
        except Exception as e:
            logger.error(f"Error updating user: {e}")
            return None


# Singleton instance
user_repo = UserRepository()