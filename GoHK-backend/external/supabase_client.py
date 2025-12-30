from supabase import create_client, Client
from config import settings
from typing import Optional

class SupabaseClient:
    """Singleton Supabase client wrapper"""
    _instance: Optional[Client] = None
    _service_instance: Optional[Client] = None
    
    @classmethod
    def get_client(cls) -> Client:
        """Get regular client (with anon key for RLS)"""
        if cls._instance is None:
            cls._instance = create_client(
                settings.supabase_url,
                settings.supabase_anon_key
            )
        return cls._instance
    
    @classmethod
    def get_service_client(cls) -> Client:
        """Get service client (bypasses RLS for admin operations)"""
        if cls._service_instance is None:
            cls._service_instance = create_client(
                settings.supabase_url,
                settings.supabase_service_key
            )
        return cls._service_instance

# Convenience functions
def get_supabase() -> Client:
    """Get regular Supabase client"""
    return SupabaseClient.get_client()

def get_supabase_admin() -> Client:
    """Get admin Supabase client (use sparingly)"""
    return SupabaseClient.get_service_client()