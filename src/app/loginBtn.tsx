'use client'
import { useRouter } from 'next/navigation'

export default function LoginBtn() {
    const router = useRouter()
    return (
        <button
            type="button"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-700 transition"
            onClick={() => router.push('/login')}
        >
            Login
        </button>
    )
}