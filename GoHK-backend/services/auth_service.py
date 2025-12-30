from typing import Optional
from uuid import UUID
import logging

from models.auth import TokenResponse
from models.user import UserCreate, UserInDB, UserResponse
from repos.user_repo import user_repo
from external.google_auth_client import google_auth
from utils.jwt import jwt_handler
from utils.exceptions import AuthenticationError, ValidationError

logger = logging.getLogger(__name__)

class AuthService:

    async def authenticate_google_user(self, google_token: str) -> TokenResponse:
        """Handle Google OAuth authentication using Google access token from frontend"""
        try:
            logger.info("Starting Google token authentication process")
        
            # Step 1: Get user info using the Google access token
            logger.info("Fetching user info using Google access token")
            user_info = await google_auth.get_user_info(google_token)
        
            # Extract user information
            email = user_info.get("email")
            google_id = user_info.get("sub") or user_info.get("id")
            full_name = user_info.get("name", "")
        
            logger.info(f"User info retrieved - Email: {email}, Google ID: {google_id}, Name: {full_name}")
        
            # Validate we have required information
            if not email:
                logger.error(f"No email in user info. Keys: {user_info.keys()}")
                raise ValidationError("Email not provided by Google. Please ensure email permissions are granted.")
        
            if not google_id:
                logger.error(f"No Google ID in user info. Keys: {user_info.keys()}")
                raise ValidationError("Google ID not found")
        
            # Step 2: Create or get user (same logic as authenticate_google)
            user = await user_repo.get_by_google_id(google_id)
        
            if not user:
                # Check if email exists
                existing_user = await user_repo.get_by_email(email)
                if existing_user:
                    # Link Google account
                    user = await user_repo.update(
                        existing_user.id,
                        {"google_id": google_id}
                    )
                    logger.info(f"Linked Google account to existing user: {email}")
                else:
                    # Create new user
                    user = await user_repo.create(UserCreate(
                        email=email,
                        full_name=full_name or email.split("@")[0],
                        google_id=google_id
                    ))
                    logger.info(f"Created new user: {email}")
            else:
                logger.info(f"User logged in: {email}")
        
            # Step 3: Create tokens
            access_token, refresh_token, expires_in = jwt_handler.create_token_pair(user.id)
        
            logger.info(f"Google token authentication successful for: {email}")
        
            return TokenResponse(
                access_token=access_token,
                refresh_token=refresh_token,
                expires_in=expires_in,
                user=UserResponse(
                    id=user.id,
                    email=user.email,
                    full_name=user.full_name
                )
            )
        
        except (ValidationError, AuthenticationError) as e:
            logger.error(f"Google token auth error: {e}")
            raise
        except Exception as e:
            logger.error(f"Unexpected error during Google token authentication: {e}", exc_info=True)
            raise AuthenticationError(f"Google token authentication failed: {str(e)}")
    
    async def authenticate_google(self, code: str, state: Optional[str] = None) -> TokenResponse:
        """Handle Google OAuth authentication"""
        try:
            logger.info("Starting Google authentication process")
            
            # Step 1: Exchange code for tokens
            token_data = await google_auth.exchange_code_for_token(code)
            
            # Step 2: ALWAYS use access token to get user info
            # The ID token might not contain email/profile data
            if "access_token" not in token_data:
                raise AuthenticationError("No access token received from Google")
            
            # Get user info using access token
            logger.info("Fetching user info using access token")
            user_info = await google_auth.get_user_info(token_data["access_token"])
            
            # Extract user information
            email = user_info.get("email")
            google_id = user_info.get("sub") or user_info.get("id")
            full_name = user_info.get("name", "")
            
            logger.info(f"User info retrieved - Email: {email}, Google ID: {google_id}, Name: {full_name}")
            
            # Validate we have required information
            if not email:
                logger.error(f"No email in user info. Keys: {user_info.keys()}")
                raise ValidationError("Email not provided by Google. Please ensure email permissions are granted.")
            
            if not google_id:
                logger.error(f"No Google ID in user info. Keys: {user_info.keys()}")
                raise ValidationError("Google ID not found")
            
            # Step 3: Create or get user
            user = await user_repo.get_by_google_id(google_id)
            
            if not user:
                # Check if email exists
                existing_user = await user_repo.get_by_email(email)
                if existing_user:
                    # Link Google account
                    user = await user_repo.update(
                        existing_user.id,
                        {"google_id": google_id}
                    )
                    logger.info(f"Linked Google account to existing user: {email}")
                else:
                    # Create new user
                    user = await user_repo.create(UserCreate(
                        email=email,
                        full_name=full_name or email.split("@")[0],
                        google_id=google_id
                    ))
                    logger.info(f"Created new user: {email}")
            else:
                logger.info(f"User logged in: {email}")
            
            # Step 4: Create tokens
            access_token, refresh_token, expires_in = jwt_handler.create_token_pair(user.id)
            
            logger.info(f"Authentication successful for: {email}")
            
            return TokenResponse(
                access_token=access_token,
                refresh_token=refresh_token,
                expires_in=expires_in,
                user=UserResponse(
                    id=user.id,
                    email=user.email,
                    full_name=user.full_name
                )
            )
            
        except (ValidationError, AuthenticationError) as e:
            logger.error(f"Auth error: {e}")
            raise
        except Exception as e:
            logger.error(f"Unexpected error during authentication: {e}", exc_info=True)
            raise AuthenticationError(f"Authentication failed: {str(e)}")
    
    async def refresh_access_token(self, refresh_token: str) -> TokenResponse:
        """Refresh access token using refresh token"""
        payload = jwt_handler.decode_token(refresh_token)
        
        if not payload:
            raise AuthenticationError("Invalid or expired refresh token")
        
        if payload.get("type") != "refresh":
            raise AuthenticationError("Invalid token type")
        
        user_id = UUID(payload.get("sub"))
        user = await user_repo.get_by_id(user_id)
        
        if not user:
            raise AuthenticationError("User not found")
        
        access_token, new_refresh_token, expires_in = jwt_handler.create_token_pair(user.id)
        
        logger.info(f"Tokens refreshed for user: {user.email}")
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=new_refresh_token,
            expires_in=expires_in,
            user=UserResponse(
                id=user.id,
                email=user.email,
                full_name=user.full_name
            )
        )
    
    async def get_current_user(self, token: str) -> UserInDB:
        """Get current user from access token"""
        payload = jwt_handler.decode_token(token)
        
        if not payload:
            raise AuthenticationError("Invalid or expired token")
        
        if payload.get("type") != "access":
            raise AuthenticationError("Invalid token type")
        
        user_id = UUID(payload.get("sub"))
        user = await user_repo.get_by_id(user_id)
        
        if not user:
            raise AuthenticationError("User not found")
        
        return user

auth_service = AuthService()