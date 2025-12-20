import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/DefaultPages/Layout";
import ErrorPage from "../pages/DefaultPages/ErrorPage";
import HomePage from "../pages/WebPages/HomePage";
// import AuthPage from "../pages/WebPages/AuthPage"; - it's too early for this

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, 
                element: <HomePage />
            },
            // {
            //     path: '/auth', - it's too early for this
            //     element: <AuthPage />
            // }
        ]
    }
])