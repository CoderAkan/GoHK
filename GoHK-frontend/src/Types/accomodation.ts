export type AccommodationType = "Hotel" | "Hostel" | "Apartment" | "Guesthouse";

export interface PriceRange {
    min: number;
    max: number;
    currency: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Amenities {
    general: string[];
    room: string[];
    bathroom: string[];
    services: string[];
}

export interface RoomType {
    name: string;
    capacity: number;
    price: number;
    available: boolean;
    amenities: string[];
}

export interface Policies {
    cancellation: string;
    payment_methods: string[];
    smoking: boolean;
    pets: boolean;
    age_restrictions: string | null;
}

export interface ReviewsSummary {
    total: number;
    cleanliness: number;
    comfort: number;
    location: number;
    value_for_money: number;
}

export interface Review {
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface NearbyItem {
    name: string;
    distance: string;
    type: string;
}

export interface Nearby {
    transport: NearbyItem[];
    attractions: NearbyItem[];
    food: NearbyItem[];
}

export interface BookingLink {
    platform: string;
    url: string;
    price: number | null;
}

// Main response models
export interface AccommodationCardResponse {
    id: string;
    images: string[];
    name: string;
    address: string;
    description: string;
    rating: number;
    price: string;
    pros: string[];
    link_to_website: string;
    link_to_google_maps: string;
}

export interface AccommodationDetailedResponse {
    id: string;
    images: string[];
    videos: string | null;
    name: string;
    address: string;
    description: string;
    rating: number;
    price_range: PriceRange;
    coordinates: Coordinates;
    link_to_google_maps: string;
    type: AccommodationType;
    star_rating: number | null;
    check_in_time: string;
    check_out_time: string;
    amenities: Amenities;
    room_types: RoomType[];
    policies: Policies;
    reviews_summary: ReviewsSummary;
    featured_reviews: Review[];
    nearby: Nearby;
    link_to_website: string;
    booking_links: BookingLink[];
}

export interface AccommodationListResponse {
    accommodations: AccommodationCardResponse[];
    total: number;
    page: number;
    page_size: number;
}

// Keeping the original name requested in the service if different, 
// though typically it should match the backend ListResponse.
// I'll alias it just in case.
export type AccommodationCardListResponse = AccommodationListResponse;

export interface AccommodationCreate {
    name: string;
    address: string;
    description: string;
    type: AccommodationType;
}

export interface AccommodationUpdate {
    name?: string;
    address?: string;
    description?: string;
    rating?: number;
}

// Original interface for backward compatibility if needed
export interface accom {
    image: string;
    name: string;
    address: string;
    description: string;
    rating: number;
    price: number;
    pros: string[];
    link_to_website: string;
    link_to_google_maps: string;
}
