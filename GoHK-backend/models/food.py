from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Literal, Dict, Any
from datetime import datetime
from uuid import UUID

# Nested models for RestaurantDetail
class OpeningHour(BaseModel):
    """Opening hours for a specific day"""
    day: str
    open: str
    close: str

class MenuItem(BaseModel):
    """Individual menu item"""
    name: str
    description: Optional[str] = None
    price: float
    image: Optional[str] = None
    is_highlight: bool = False

class MenuCategory(BaseModel):
    """Category of menu items"""
    name: str
    items: List[MenuItem]

class Menu(BaseModel):
    """Full restaurant menu"""
    categories: List[MenuCategory]
    highlights: List[MenuItem]

class RestaurantFeatures(BaseModel):
    """Features and atmosphere of the restaurant"""
    dining_options: List[str] = []  # dine-in, takeout, delivery
    atmosphere: List[str] = []      # cozy, romantic, casual
    suitable_for: List[str] = []    # families, dates, groups

class Reservations(BaseModel):
    """Reservation policy"""
    required: bool
    supported: bool
    link: Optional[str] = None

class FoodReviewsSummary(BaseModel):
    """Reviews summary for food/restaurant"""
    total: int
    food: float
    service: float
    ambiance: float
    value: float

class Review(BaseModel):
    """Individual review"""
    author: str
    rating: float
    comment: str
    date: datetime

class PopularTime(BaseModel):
    """Popular hours for the restaurant"""
    day: str
    busy_hours: List[str]

class NearbyItem(BaseModel):
    """Nearby location item"""
    name: str
    distance: str
    type: str

class Nearby(BaseModel):
    """Nearby attractions and transport"""
    attractions: List[NearbyItem] = []
    transport: List[NearbyItem] = []

class DeliveryLink(BaseModel):
    """Delivery platform link"""
    platform: str
    url: str

# Main models
class FoodCreate(BaseModel):
    """Request to create a new food/restaurant object"""
    name: str
    description: str
    address: str
    cuisine: List[str]
    halal: bool = False

class FoodCardResponse(BaseModel):
    """Food card response for API (list view)"""
    id: UUID
    image: str
    name: str
    description: str
    address: str
    rating: float
    price: float
    cuisine: str
    halal: bool
    link_to_website: str
    link_to_google_maps: str

class FoodDetailedResponse(BaseModel):
    """Detailed food/restaurant response for API"""
    id: UUID
    images: List[str]
    videos: Optional[List[str]] = None
    name: str
    description: str
    cuisine: List[str]
    rating: float
    price_range: Literal["$", "$$", "$$$"]
    address: str
    coordinates: Dict[str, float]  # lat, lng
    link_to_google_maps: str
    opening_hours: List[OpeningHour]
    is_open_now: bool
    menu: Menu
    features: RestaurantFeatures
    amenities: List[str]
    dietary_options: List[str]
    reservations: Reservations
    reviews_summary: FoodReviewsSummary
    featured_reviews: List[Review]
    popular_times: Optional[List[PopularTime]] = None
    nearby: Nearby
    phone: Optional[str] = None
    website: Optional[str] = None
    delivery_links: Optional[List[DeliveryLink]] = None

class FoodInDB(BaseModel):
    """Food/Restaurant model from database"""
    model_config = ConfigDict(from_attributes=True)
    
    id: UUID
    name: str
    address: str
    description: str
    cuisine: List[str]
    rating: float
    created_at: datetime
    updated_at: Optional[datetime] = None

class FoodUpdate(BaseModel):
    """Update food/restaurant information"""
    name: Optional[str] = None
    description: Optional[str] = None
    address: Optional[str] = None
    cuisine: Optional[List[str]] = None
    rating: Optional[float] = None

class FoodListResponse(BaseModel):
    """List of food/restaurants with pagination"""
    food: List[FoodCardResponse]
    total: int
    page: int
    page_size: int

class FoodPartResponse(BaseModel):
    """Response for a specific part of food/restaurant info"""
    id: UUID
    type: str
    data: Any
