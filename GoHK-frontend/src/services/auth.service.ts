import { instance } from '../api/axios'

interface GoogleAuthUrlResponse {
    auth_url: string
}

interface AuthTokenResponse {
    access_token: string
    refresh_token: string
}

export const authService = {
    // Get Google OAuth URL from backend
    async getGoogleAuthUrl(): Promise<GoogleAuthUrlResponse> {
        const { data } = await instance.get<GoogleAuthUrlResponse>('/api/v1/auth/google/url')
        return data
    },

    // Exchange Google access token for app tokens
    async loginWithGoogleToken(googleAccessToken: string): Promise<AuthTokenResponse> {
        const { data } = await instance.post<AuthTokenResponse>('/api/v1/auth/google/token', {
            access_token: googleAccessToken
        })
        return data
    }
}
