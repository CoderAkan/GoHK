export interface accom {
    image: string,
    name: string,
    address: string,
    description: string,
    rating: number,
    price: number,
    pros: string[],
    link_to_website: string,
    link_to_google_maps: string
}


export interface rest {
    image: string,
    name: string
    description: string
    address: string
    rating: number,
    price: number,
    cuisine: string
    halal: boolean,
    link_to_website: string,
    link_to_google_maps: string
}

export interface place {
    name: string,
    description: string,
    image: string,
    location: string,
    type: "Nature" | "City" | "Sports" | "Art" | "Attractions",
    link_to_google_maps: string,
    rating: number,
    nearby_mtr_station: string,
    entry_fee: string,
    link_to_website: string,
}
