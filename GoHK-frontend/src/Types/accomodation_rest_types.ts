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
    dishes: string[],
    link_to_website:string
}
