from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Literal, Union
from datetime import datetime
from uuid import UUID

# Nested models for AccommodationDetailedResponse
class PriceRange(BaseModel):
    """Price range for accommodation"""
    min: float
    max: float
    currency: str = "HKD"

class Coordinates(BaseModel):
    """Geographic coordinates"""
    lat: float
    lng: float

class Amenities(BaseModel):
    """Accommodation amenities"""
    general: List[str] = []  # Wi-Fi, AC, elevator
    room: List[str] = []  # TV, minibar, kettle
    bathroom: List[str] = []  # shower, bathtub
    services: List[str] = []  # laundry, storage

class RoomType(BaseModel):
    """Room type information"""
    name: str
    capacity: int
    price: float
    available: bool = True
    amenities: List[str] = []

class Policies(BaseModel):
    """Accommodation policies"""
    cancellation: str
    payment_methods: List[str]
    smoking: bool
    pets: bool
    age_restrictions: Optional[str] = None

class ReviewsSummary(BaseModel):
    """Reviews summary"""
    total: int
    cleanliness: float
    comfort: float
    location: float
    value_for_money: float

class Review(BaseModel):
    """Individual review"""
    author: str
    rating: float
    comment: str
    date: datetime

class NearbyItem(BaseModel):
    """Nearby location item"""
    name: str
    distance: str  # e.g., "500m", "1.2km"
    type: str

class Nearby(BaseModel):
    """Nearby locations"""
    transport: List[NearbyItem] = []
    attractions: List[NearbyItem] = []
    food: List[NearbyItem] = []

class BookingLink(BaseModel):
    """Booking platform link"""
    platform: str
    url: str
    price: Optional[float] = None

# Main models
class AccommodationCreate(BaseModel):
    """Request to create a new accommodation object"""
    name: str
    address: str
    description: str
    type: Literal["Hotel", "Hostel", "Apartment", "Guesthouse"]

class AccommodationCardResponse(BaseModel):
    """Accommodation card response for API"""
    id: Union[UUID, int, str]
    images: List[str]
    name: str
    address: str
    description: str
    rating: float
    price: str
    pros: List[str]
    link_to_website: str
    link_to_google_maps: str

class AccommodationDetailedResponse(BaseModel):
    """Accommodation detailed response for API"""
    id: Union[UUID, int, str]
    images: List[str]
    videos: Optional[str] = None
    name: str
    address: str
    description: str
    rating: float
    price_range: PriceRange

    # Location
    coordinates: Coordinates
    link_to_google_maps: str

    # Accommodation specifics
    type: Literal["Hotel", "Hostel", "Apartment", "Guesthouse"]
    star_rating: Optional[int] = None
    check_in_time: str
    check_out_time: str

    # Amenities
    amenities: Amenities

    # Rooms
    room_types: List[RoomType]

    # Policies
    policies: Policies

    # Reviews
    reviews_summary: ReviewsSummary
    featured_reviews: List[Review]

    # Nearby info
    nearby: Nearby

    # Links
    link_to_website: str
    booking_links: List[BookingLink]

class AccommodationInDB(BaseModel):
    """Accommodation model from database"""
    model_config = ConfigDict(from_attributes=True)
    
    id: Union[UUID, int, str]
    name: str
    address: str
    description: str
    type: Literal["Hotel", "Hostel", "Apartment", "Guesthouse"]
    rating: float
    created_at: datetime
    updated_at: Optional[datetime] = None

class AccommodationUpdate(BaseModel):
    """Update accommodation"""
    name: Optional[str] = None
    address: Optional[str] = None
    description: Optional[str] = None
    rating: Optional[float] = None

class AccommodationListResponse(BaseModel):
    """List of accommodations with pagination"""
    accommodations: List[AccommodationCardResponse]
    total: int
    page: int
    page_size: int