import { instance } from "../api/axios"
import type { AccommodationDetailedResponse, AccommodationCardListResponse, AccommodationUpdate, AccommodationCreate } from "../Types/accomodation"

export const accommodationService = {
    async getAccommodationDetails(id: string): Promise<AccommodationDetailedResponse> {
        const { data } = await instance.get(`/api/v1/accommodations/${id}`)
        return data
    },

    async getAccommodationCardList(): Promise<AccommodationCardListResponse> {
        const { data } = await instance.get('/api/v1/accommodations')
        return data
    },

    async updateAccommodation(id: string, accommodationData: AccommodationUpdate): Promise<AccommodationDetailedResponse> {
        const { data } = await instance.put(`/api/v1/accommodations/${id}`, accommodationData)
        return data
    },

    async deleteAccommodation(id: string): Promise<void> {
        await instance.delete(`/api/v1/accommodations/${id}`)
    },

    async createAccommodation(accommodationData: AccommodationCreate): Promise<AccommodationDetailedResponse> {
        const { data } = await instance.post('/api/v1/accommodations', accommodationData)
        return data
    }
}