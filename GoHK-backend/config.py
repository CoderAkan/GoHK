from pydantic_settings import BaseSettings
from functools import lru_cache
from typing import Optional

class Settings(BaseSettings):
    # App
    app_name: str = "GoHK"
    app_version: str = "0.1.0"
    debug: bool = False
    environment: str = "development"  # development, staging, production
    
    # API
    api_v1_prefix: str = "/api/v1"
    allowed_origins: list[str] = [
        "http://localhost:5173",
        "https://go-hk-hm93.vercel.app",
        "https://go-hk.vercel.app",
        "https://gohk.onrender.com"
    ]
    
    # Supabase
    supabase_url: str
    supabase_anon_key: str
    supabase_service_key: str  # For admin operations
    
    # Google OAuth
    google_client_id: str
    google_client_secret: str
    google_redirect_uri: str
    # google_redirect_uri: str = "http://localhost:5000/auth/google/callback"
    
    # JWT
    jwt_secret_key: str
    jwt_algorithm: str = "HS256"
    jwt_expiration_hours: int = 24 * 7  # 1 week

    jwt_access_token_expire_hours: int = 1  # 1 hour
    jwt_refresh_token_expire_days: int = 30  # 30 days
    class Config:
        env_file = ".env"
        case_sensitive = False

@lru_cache()
def get_settings() -> Settings:
    """Cached settings instance"""
    return Settings()

settings = get_settings()