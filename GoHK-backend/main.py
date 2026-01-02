from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

from config import settings
from api import auth, users, places, food, accomodation
from external.supabase_client import get_supabase

# Configure logging
logging.basicConfig(
    level=logging.INFO if not settings.debug else logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    # Startup
    logger.info(f"Starting {settings.app_name} in {settings.environment} mode")
    
    # Test Supabase connection
    try:
        supabase = get_supabase()
        # Simple health check query
        supabase.table("Visit").select("name").limit(1).execute()
        logger.info("✅ Supabase connection established")
    except Exception as e:
        logger.error(f"❌ Supabase connection failed: {e}")
    
    yield
    
    # Shutdown
    logger.info("Shutting down application")

# Create FastAPI app
app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    lifespan=lifespan,
    docs_url="/docs" if settings.debug else None,
    redoc_url="/redoc" if settings.debug else None
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": f"Welcome to {settings.app_name} API", "version": settings.app_version}

# Health check
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "environment": settings.environment,
        "version": settings.app_version
    }

# Include routers
app.include_router(auth.router, prefix=f"{settings.api_v1_prefix}/auth", tags=["auth"])
app.include_router(users.router, prefix=f"{settings.api_v1_prefix}/users", tags=["users"])
app.include_router(places.router, prefix=f"{settings.api_v1_prefix}/places", tags=["places"])
app.include_router(food.router, prefix=f"{settings.api_v1_prefix}/food", tags=["food"])
app.include_router(accomodation.router, prefix=f"{settings.api_v1_prefix}/accommodations", tags=["accommodations"])