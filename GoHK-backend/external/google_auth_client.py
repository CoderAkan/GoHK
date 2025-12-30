from typing import Optional, Dict, Any
import httpx
from config import settings
import secrets
import base64
import logging
from urllib.parse import urlencode

logger = logging.getLogger(__name__)

class GoogleAuthClient:
    """Handle Google OAuth flow"""
    
    GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
    GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
    GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"
    
    @staticmethod
    def get_auth_url(state: Optional[str] = None) -> str:
        """Generate Google OAuth URL"""
        if not state:
            state = base64.urlsafe_b64encode(secrets.token_bytes(32)).decode('utf-8')
        
        params = {
            "client_id": settings.google_client_id,
            "redirect_uri": settings.google_redirect_uri,
            "response_type": "code",
            "scope": "openid email profile",  # Make sure all scopes are included
            "state": state,
            "access_type": "offline",
            "prompt": "consent"  # Changed from select_account to consent to ensure scopes are granted
        }
        
        # Use proper URL encoding
        param_string = urlencode(params)
        auth_url = f"{GoogleAuthClient.GOOGLE_AUTH_URL}?{param_string}"
        logger.debug(f"Generated auth URL with scopes: openid email profile")
        return auth_url
    
    @staticmethod
    async def exchange_code_for_token(code: str) -> Dict[str, Any]:
        """Exchange authorization code for tokens"""
        logger.info("Exchanging authorization code for tokens")
        
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    GoogleAuthClient.GOOGLE_TOKEN_URL,
                    data={
                        "code": code,
                        "client_id": settings.google_client_id,
                        "client_secret": settings.google_client_secret,
                        "redirect_uri": settings.google_redirect_uri,
                        "grant_type": "authorization_code"
                    }
                )
                
                if response.status_code != 200:
                    logger.error(f"Token exchange failed: {response.status_code} - {response.text}")
                    raise ValueError(f"Token exchange failed: {response.text}")
                
                token_data = response.json()
                logger.info(f"Token exchange successful. Keys: {list(token_data.keys())}")
                
                return token_data
                
            except httpx.RequestError as e:
                logger.error(f"Request error during token exchange: {e}")
                raise ValueError(f"Failed to contact Google: {str(e)}")
    
    @staticmethod
    async def get_user_info(access_token: str) -> Dict[str, Any]:
        """Get user info using access token"""
        logger.info("Fetching user info with access token")
        
        async with httpx.AsyncClient() as client:
            try:
                response = await client.get(
                    GoogleAuthClient.GOOGLE_USERINFO_URL,
                    headers={"Authorization": f"Bearer {access_token}"}
                )
                
                if response.status_code != 200:
                    logger.error(f"Failed to get user info: {response.status_code} - {response.text}")
                    raise ValueError(f"Failed to get user info: {response.text}")
                
                user_info = response.json()
                logger.info(f"User info retrieved successfully. Keys: {list(user_info.keys())}")
                logger.debug(f"User email: {user_info.get('email')}, Name: {user_info.get('name')}")
                
                return user_info
                
            except httpx.RequestError as e:
                logger.error(f"Request error getting user info: {e}")
                raise ValueError(f"Failed to get user info: {str(e)}")
    
    @staticmethod
    def verify_token(token: str) -> Dict[str, Any]:
        """Verify and decode Google ID token (kept for reference but not used)"""
        try:
            from google.auth.transport import requests as google_requests
            from google.oauth2 import id_token
            
            request = google_requests.Request()
            idinfo = id_token.verify_oauth2_token(token, request, settings.google_client_id)
            return idinfo
        except Exception as e:
            logger.error(f"Token verification failed: {e}")
            raise ValueError(f"Token verification failed: {str(e)}")

google_auth = GoogleAuthClient()