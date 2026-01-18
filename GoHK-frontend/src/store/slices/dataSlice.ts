import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AccommodationCardResponse } from '../../Types/accomodation';
import type { FoodCardResponse } from '../../Types/food';
import type { place } from '../../Types/places';

interface DataState {
    hotels: AccommodationCardResponse[] | null;
    food: FoodCardResponse[] | null;
    places: place[] | null;
}

const initialState: DataState = {
    hotels: null,
    food: null,
    places: null,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setHotels: (state, action: PayloadAction<AccommodationCardResponse[]>) => {
            state.hotels = action.payload;
        },
        setFood: (state, action: PayloadAction<FoodCardResponse[]>) => {
            state.food = action.payload;
        },
        setPlaces: (state, action: PayloadAction<place[]>) => {
            state.places = action.payload;
        },
        clearData: (state) => {
            state.hotels = null;
            state.food = null;
            state.places = null;
        },
    },
});

export const { setHotels, setFood, setPlaces, clearData } = dataSlice.actions;
export default dataSlice.reducer;
