import { instance } from "../api/axios"
import type { PlaceDetailedResponse, PlaceCardListResponse, PlaceCreate, PlaceUpdate } from "../Types/places"

export const placesService = {
    async getPlacesDetails(id: string): Promise<PlaceDetailedResponse> {
        const { data } = await instance.get(`/api/v1/places/${id}`)
        return data
    },

    async getPlacesCardList(): Promise<PlaceCardListResponse> {
        const { data } = await instance.get('/api/v1/places')
        return data
    },

    async updatePlaces(id: string, placesData: PlaceUpdate): Promise<PlaceDetailedResponse> {
        const { data } = await instance.put(`/api/v1/places/${id}`, placesData)
        return data
    },

    async deletePlaces(id: string): Promise<void> {
        await instance.delete(`/api/v1/places/${id}`)
    },

    async createPlaces(placesData: PlaceCreate): Promise<PlaceDetailedResponse> {
        const { data } = await instance.post('/api/v1/places', placesData)
        return data
    }
}