import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useGoogleLogin } from '@react-oauth/google'
import SignInButton from '../../components/SignInButton'
import { authService } from '../../api/auth.service'
import { useAppDispatch } from '../../store/hooks'
import { login as loginAction } from '../../store/slices/userSlice'

const AuthPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true)

        // Validate Google token first
        try {
          const googleTest = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`)
          const googleUserInfo = await googleTest.json()

          if (googleUserInfo.error) {
            console.error('Google token is invalid:', googleUserInfo)
            toast.error('Invalid Google token')
            return
          }
        } catch (e) {
          console.error('Failed to test Google token:', e)
          toast.error('Failed to validate Google token')
          return
        }

        // Exchange Google token for app tokens
        const resp = await authService.loginWithGoogleToken(tokenResponse.access_token)

        if (resp) {
          toast.success("Google authentication successful!")
          dispatch(loginAction(resp))
          navigate("/")
        }
      } catch (error: any) {
        console.error('Google login error:', error)
        const errorMessage = error.response?.data?.detail || 'Google authentication failed'
        toast.error(errorMessage)
      } finally {
        setIsLoading(false)
      }
    },
    onError: () => {
      toast.error('Google authentication failed')
    }
  })

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-12 h-12 bg-green-200 rounded-full opacity-10 animate-bounce pointer-events-none"></div>
      <div className="fixed top-1/3 right-10 w-8 h-8 bg-emerald-200 rounded-full opacity-15 animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-1/4 w-6 h-6 bg-teal-200 rounded-full opacity-10 pointer-events-none" style={{ animation: 'bounce 2s infinite 1s' }}></div>

      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-black/10 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">HK Trip Planner</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {isSignUp
                ? 'Start planning your Hong Kong adventure'
                : 'Sign in to continue your trip planning'
              }
            </p>
          </div>

          {/* Google Sign-In Button */}
          <div className="mb-6">
            <SignInButton
              type={isSignUp ? "signup" : 'login'}
              onClick={googleLogin}
            />
          </div>

          {/* Toggle Sign Up / Sign In */}
          <div className="text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                disabled={isLoading}
                className="text-green-600 hover:text-green-500 font-medium transition-colors disabled:opacity-50"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Benefits Section for Sign Up */}
          {isSignUp && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-green-800">
                  <p className="font-medium mb-1">Plan your perfect Hong Kong trip!</p>
                  <ul className="text-green-700 space-y-1">
                    <li>• Save your favorite places</li>
                    <li>• Get personalized recommendations</li>
                    <li>• Access offline trip guides</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center text-green-600">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm">Authenticating...</span>
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
