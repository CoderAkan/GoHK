export type PlaceType = "Nature" | "City" | "Sports" | "Art" | "Attractions" | "Spiritual";
export type CrowdLevel = "Low" | "Medium" | "High";

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface PlaceOpeningHour {
    day: string;
    open: string;
    close: string;
}

export interface EntryFee {
    adult: string;
    child: string | null;
    student: string | null;
    free_days: string | null;
}

export interface Accessibility {
    wheelchair_accessible: boolean;
    elevators: boolean | null;
    ramps: boolean | null;
    notes: string | null;
}

export interface PopularTime {
    day: string;
    busy_hours: string[];
}

export interface PlaceNearbyItem {
    name: string;
    distance: string;
    type: string;
}

export interface PlaceNearby {
    attractions: PlaceNearbyItem[];
    food: PlaceNearbyItem[];
    transport: PlaceNearbyItem[];
}

export interface PlaceReviewsSummary {
    total: number;
    experience: number;
    value: number;
    accessibility: number;
}

export interface Review {
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface SocialLinks {
    instagram: string | null;
    facebook: string | null;
}

// Main response models
export interface PlaceCardResponse {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    type: PlaceType;
    link_to_google_maps: string;
    rating: number;
    nearby_mtr_station: string;
    entry_fee: string;
    link_to_website: string;
}

export interface PlaceDetailedResponse {
    id: string;
    images: string[];
    videos: string[] | null;
    panoramic_view: string | null;
    name: string;
    description: string;
    type: PlaceType;
    rating: number;
    location: string;
    address: string | null;
    coordinates: Coordinates;
    link_to_google_maps: string;
    nearby_mtr_station: string;
    opening_hours: PlaceOpeningHour[];
    best_time_to_visit: string | null;
    recommended_duration: string;
    entry_fee: EntryFee;
    ticket_required: boolean;
    booking_link: string | null;
    highlights: string[];
    activities: string[];
    facilities: string[];
    accessibility: Accessibility;
    rules: string[] | null;
    safety_tips: string[] | null;
    crowd_level: CrowdLevel;
    popular_times: PopularTime[] | null;
    nearby: PlaceNearby;
    reviews_summary: PlaceReviewsSummary;
    featured_reviews: Review[];
    link_to_website: string | null;
    social_links: SocialLinks | null;
}

export interface PlaceListResponse {
    places: PlaceCardResponse[];
    total: number;
    page: number;
    page_size: number;
}

export type PlaceCardListResponse = PlaceListResponse;

export interface PlaceCreate {
    name: string;
    description: string;
    location: string;
    type: PlaceType;
    link_to_google_maps: string;
    nearby_mtr_station: string;
    entry_fee_summary: string;
}

export interface PlaceUpdate {
    name?: string;
    description?: string;
    type?: PlaceType;
    rating?: number;
}

// Original interface for backward compatibility
export interface place {
    name: string;
    description: string;
    image: string;
    location: string;
    type: PlaceType;
    link_to_google_maps: string;
    rating: number;
    nearby_mtr_station: string;
    entry_fee: string;
    link_to_website: string;
}
