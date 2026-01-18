from fastapi import APIRouter, HTTPException, Query, status
from services.auth_service import auth_service
from models.auth import TokenResponse, RefreshTokenRequest, GoogleTokenRequest
from external.google_auth_client import google_auth
from utils.exceptions import AuthenticationError, ValidationError
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/google/url")
async def google_login():
    """Initiate Google OAuth flow"""
    auth_url = google_auth.get_auth_url()
    return {"auth_url": auth_url}

@router.get("/google/callback")
async def google_callback(code: str = Query(...), state: str = Query(None)):
    """Handle Google OAuth callback"""
    try:
        token_response = await auth_service.authenticate_google(code, state)
        return token_response
    except AuthenticationError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
    except ValidationError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        logger.error(f"OAuth callback error: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Authentication failed")

@router.post("/google/token")
async def google_token_login(request: GoogleTokenRequest):
    """Authenticate with Google access token from frontend"""
    try:
        token_response = await auth_service.authenticate_google_user(request.access_token)
        
        return token_response
    except AuthenticationError as e:
        logger.error(f"Google token authentication error: {e}")
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
    except ValidationError as e:
        logger.error(f"Google token validation error: {e}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        logger.error(f"Google token login error: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Google authentication failed")

@router.post("/refresh")
async def refresh_token(request: RefreshTokenRequest):
    """Refresh access token using refresh token"""
    try:
        token_response = await auth_service.refresh_access_token(request.refresh_token)
        return token_response
    except AuthenticationError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))
    except Exception as e:
        logger.error(f"Token refresh error: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to refresh token")

@router.post("/logout")
async def logout():
    """Logout endpoint - token invalidation handled client-side for JWT"""
    # In production, we'd blacklist the token here
    # For MVP, client removes token
    return {"message": "Successfully logged out"}