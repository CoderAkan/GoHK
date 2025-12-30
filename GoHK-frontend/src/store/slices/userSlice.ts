import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
    access_token: string;
    refresh_token: string;
}

const loadInitialState = () => {
    try {
        const access_token = localStorage.getItem('access_token')
        const refresh_token = localStorage.getItem('refresh_token')
        if (access_token != null && refresh_token != null) {
            return { access_token, refresh_token }
        } else {
            return { access_token: '', refresh_token: '' }
        }
    } catch {
        return { access_token: '', refresh_token: '' }
    }
}

const initialState: UserState = loadInitialState()

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.access_token = action.payload?.access_token
            state.refresh_token = action.payload?.refresh_token

            const access_token = action.payload?.access_token || ""
            const refresh_token = action.payload?.refresh_token || ""

            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)
        },
        logout: (state) => {
            state.access_token = ""
            state.refresh_token = ""

            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        }
    }
})

export const { login, logout } = userSlice.actions

export const selectCase = (state: RootState) => state.user

export default userSlice.reducer