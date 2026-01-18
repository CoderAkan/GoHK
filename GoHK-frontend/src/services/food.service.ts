import { instance } from "../api/axios"
import type { FoodDetailedResponse, FoodCardListResponse, FoodUpdate, FoodCreate } from "../Types/food"

export const foodService = {
    async getFoodDetails(id: string): Promise<FoodDetailedResponse> {
        const { data } = await instance.get(`/api/v1/food/${id}`)
        return data
    },

    async getFoodCardList(): Promise<FoodCardListResponse> {
        const { data } = await instance.get('/api/v1/food')
        return data
    },

    async updateFood(id: string, foodData: FoodUpdate): Promise<FoodDetailedResponse> {
        const { data } = await instance.put(`/api/v1/food/${id}`, foodData)
        return data
    },

    async deleteFood(id: string): Promise<void> {
        await instance.delete(`/api/v1/food/${id}`)
    },

    async createFood(foodData: FoodCreate): Promise<FoodDetailedResponse> {
        const { data } = await instance.post('/api/v1/food', foodData)
        return data
    }
}