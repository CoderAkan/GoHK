export interface OpeningHour {
    day: string;
    open: string;
    close: string;
}

export interface MenuItem {
    name: string;
    description: string | null;
    price: number;
    image: string | null;
    is_highlight: boolean;
}

export interface MenuCategory {
    name: string;
    items: MenuItem[];
}

export interface Menu {
    categories: MenuCategory[];
    highlights: MenuItem[];
}

export interface RestaurantFeatures {
    dining_options: string[];
    atmosphere: string[];
    suitable_for: string[];
}

export interface Reservations {
    required: boolean;
    supported: boolean;
    link: string | null;
}

export interface FoodReviewsSummary {
    total: number;
    food: number;
    service: number;
    ambiance: number;
    value: number;
}

export interface Review {
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface PopularTime {
    day: string;
    busy_hours: string[];
}

export interface NearbyItem {
    name: string;
    distance: string;
    type: string;
}

export interface Nearby {
    attractions: NearbyItem[];
    transport: NearbyItem[];
}

export interface DeliveryLink {
    platform: string;
    url: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

// Main response models
export interface FoodCardResponse {
    id: string;
    image: string;
    name: string;
    description: string;
    address: string;
    rating: number;
    price: number;
    cuisine: string;
    halal: boolean;
    link_to_website: string;
    link_to_google_maps: string;
}

export interface FoodDetailedResponse {
    id: string;
    images: string[];
    videos: string[] | null;
    name: string;
    description: string;
    cuisine: string[];
    rating: number;
    price_range: "$" | "$$" | "$$$";
    address: string;
    coordinates: Record<string, number>; // lat, lng
    link_to_google_maps: string;
    opening_hours: OpeningHour[];
    is_open_now: boolean;
    menu: Menu;
    features: RestaurantFeatures;
    amenities: string[];
    dietary_options: string[];
    reservations: Reservations;
    reviews_summary: FoodReviewsSummary;
    featured_reviews: Review[];
    popular_times: PopularTime[] | null;
    nearby: Nearby;
    phone: string | null;
    website: string | null;
    delivery_links: DeliveryLink[] | null;
}

export interface FoodListResponse {
    food: FoodCardResponse[];
    total: number;
    page: number;
    page_size: number;
}

export type FoodCardListResponse = FoodListResponse;

export interface FoodCreate {
    name: string;
    description: string;
    address: string;
    cuisine: string[];
    halal?: boolean;
}

export interface FoodUpdate {
    name?: string;
    description?: string;
    address?: string;
    cuisine?: string[];
    rating?: number;
}

// Original interface for backward compatibility
export interface rest {
    image: string;
    name: string;
    description: string;
    address: string;
    rating: number;
    price: number;
    cuisine: string;
    halal: boolean;
    link_to_website: string;
    link_to_google_maps: string;
}