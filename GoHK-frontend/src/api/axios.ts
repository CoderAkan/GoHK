import axios from "axios";
import { store } from "../store/store";
import { login, logout } from "../store/slices/userSlice";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const instance = axios.create({
    baseURL: API_URL.endsWith('/') ? API_URL : `${API_URL}/`,
})

// Request interceptor to add access token to headers
instance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const access_token = state.user?.access_token;

        if (access_token) {
            console.log("Access token:", access_token)
            config.headers.Authorization = `Bearer ${access_token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // If we get 401 and haven't already tried to refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const state = store.getState();
            const refresh_token = state.user.refresh_token;

            if (refresh_token) {
                try {
                    // ✅ FIXED: Added /api/v1/ to the refresh URL
                    const response = await axios.post(`${API_URL}/api/v1/auth/refresh`, {
                        refresh_token: refresh_token
                    });

                    const { access_token, refresh_token: new_refresh_token } = response.data;

                    // Update tokens in store
                    store.dispatch(login({
                        access_token,
                        refresh_token: new_refresh_token
                    }));

                    // Retry the original request with new token
                    originalRequest.headers.Authorization = `Bearer ${access_token}`;
                    return instance(originalRequest);

                } catch (refreshError) {
                    // Refresh failed, log out user
                    store.dispatch(logout());
                    // Optionally redirect to login page
                    window.location.href = '/auth';
                    return Promise.reject(refreshError);
                }
            } else {
                // No refresh token, log out user
                store.dispatch(logout());
                window.location.href = '/auth';
            }
        }

        return Promise.reject(error);
    }
);