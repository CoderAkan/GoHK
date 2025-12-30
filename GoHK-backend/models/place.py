from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Literal, Dict, Any
from datetime import datetime
from uuid import UUID

# Shared Literals
PlaceType = Literal["Nature", "City", "Sports", "Art", "Attractions", "Spiritual"]
CrowdLevel = Literal["Low", "Medium", "High"]

# Nested models for PlaceDetail
class Coordinates(BaseModel):
    """Geographic coordinates"""
    lat: float
    lng: float

class PlaceOpeningHour(BaseModel):
    """Opening hours for a specific day"""
    day: str
    open: str
    close: str

class EntryFee(BaseModel):
    """Entry fee information for different categories"""
    adult: str
    child: Optional[str] = None
    student: Optional[str] = None
    free_days: Optional[str] = None

class Accessibility(BaseModel):
    """Accessibility features"""
    wheelchair_accessible: bool
    elevators: Optional[bool] = None
    ramps: Optional[bool] = None
    notes: Optional[str] = None

class PopularTime(BaseModel):
    """Popular hours for the place"""
    day: str
    busy_hours: List[str]

class PlaceNearbyItem(BaseModel):
    """Nearby location item"""
    name: str
    distance: str
    type: str

class PlaceNearby(BaseModel):
    """Nearby attractions, food, and transport"""
    attractions: List[PlaceNearbyItem] = []
    food: List[PlaceNearbyItem] = []
    transport: List[PlaceNearbyItem] = []

class PlaceReviewsSummary(BaseModel):
    """Reviews summary for a place"""
    total: int
    experience: float
    value: float
    accessibility: float

class Review(BaseModel):
    """Individual review"""
    author: str
    rating: float
    comment: str
    date: datetime

class SocialLinks(BaseModel):
    """Social media links"""
    instagram: Optional[str] = None
    facebook: Optional[str] = None

# Main models
class PlaceCreate(BaseModel):
    """Request to create a new place"""
    name: str
    description: str
    location: str
    type: PlaceType
    link_to_google_maps: str
    nearby_mtr_station: str
    entry_fee_summary: str  # maps to the string version in card view

class PlaceCardResponse(BaseModel):
    """Place card response for API (list view)"""
    id: UUID
    name: str
    description: str
    image: str
    location: str
    type: PlaceType
    link_to_google_maps: str
    rating: float
    nearby_mtr_station: str
    entry_fee: str
    link_to_website: str

class PlaceDetailedResponse(BaseModel):
    """Detailed place response for API"""
    id: UUID
    
    # Media
    images: List[str]
    videos: Optional[List[str]] = None
    panoramic_view: Optional[str] = None

    # Basic info
    name: str
    description: str
    type: PlaceType
    rating: float

    # Location
    location: str
    address: Optional[str] = None
    coordinates: Coordinates
    link_to_google_maps: str
    nearby_mtr_station: str

    # Visiting info
    opening_hours: List[PlaceOpeningHour]
    best_time_to_visit: Optional[str] = None
    recommended_duration: str

    # Tickets & fees
    entry_fee: EntryFee
    ticket_required: bool
    booking_link: Optional[str] = None

    # Highlights
    highlights: List[str]
    activities: List[str]

    # Facilities
    facilities: List[str]
    accessibility: Accessibility

    # Rules & tips
    rules: Optional[List[str]] = None
    safety_tips: Optional[List[str]] = None

    # Crowd & atmosphere
    crowd_level: CrowdLevel
    popular_times: Optional[List[PopularTime]] = None

    # Nearby
    nearby: PlaceNearby

    # Reviews
    reviews_summary: PlaceReviewsSummary
    featured_reviews: List[Review]

    # Links
    link_to_website: Optional[str] = None
    social_links: Optional[SocialLinks] = None

class PlaceInDB(BaseModel):
    """Place model from database"""
    model_config = ConfigDict(from_attributes=True)
    
    id: UUID
    name: str
    description: str
    type: PlaceType
    rating: float
    created_at: datetime
    updated_at: Optional[datetime] = None

class PlaceUpdate(BaseModel):
    """Update place information"""
    name: Optional[str] = None
    description: Optional[str] = None
    type: Optional[PlaceType] = None
    rating: Optional[float] = None

class PlaceListResponse(BaseModel):
    """List of places with pagination"""
    places: List[PlaceCardResponse]
    total: int
    page: int
    page_size: int
