import { type FC } from 'react'
import { FcGoogle } from 'react-icons/fc'

interface SignInButtonProps {
    type: 'login' | 'signup'
    onClick: () => void
}

const SignInButton: FC<SignInButtonProps> = ({ type, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
        >
            <FcGoogle className="w-6 h-6" />
            <span>Continue with Google</span>
        </button>
    )
}

export default SignInButton
