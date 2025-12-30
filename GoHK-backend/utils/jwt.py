import jwt
from datetime import datetime, timedelta
from typing import Optional, Dict
from uuid import UUID
from config import settings
import secrets

class JWTHandler:
    """Handle JWT token operations"""
    
    @staticmethod
    def create_access_token(user_id: UUID) -> str:
        """Create access token (1 hour expiry)"""
        expire = datetime.utcnow() + timedelta(hours=settings.jwt_access_token_expire_hours)
        payload = {
            "sub": str(user_id),
            "exp": expire,
            "iat": datetime.utcnow(),
            "type": "access",
            "jti": secrets.token_hex(16)
        }
        return jwt.encode(payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)
    
    @staticmethod
    def create_refresh_token(user_id: UUID) -> str:
        """Create refresh token (30 days expiry)"""
        expire = datetime.utcnow() + timedelta(days=settings.jwt_refresh_token_expire_days)
        payload = {
            "sub": str(user_id),
            "exp": expire,
            "iat": datetime.utcnow(),
            "type": "refresh",
            "jti": secrets.token_hex(16)
        }
        return jwt.encode(payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)
    
    @staticmethod
    def decode_token(token: str) -> Optional[Dict]:
        """Decode and validate JWT token"""
        try:
            payload = jwt.decode(token, settings.jwt_secret_key, algorithms=[settings.jwt_algorithm])
            return payload
        except jwt.ExpiredSignatureError:
            return None
        except jwt.InvalidTokenError:
            return None
    
    @staticmethod
    def create_token_pair(user_id: UUID) -> tuple[str, str, int]:
        """Create access and refresh token pair"""
        access_token = JWTHandler.create_access_token(user_id)
        refresh_token = JWTHandler.create_refresh_token(user_id)
        expires_in = settings.jwt_access_token_expire_hours * 3600
        return access_token, refresh_token, expires_in

jwt_handler = JWTHandler()