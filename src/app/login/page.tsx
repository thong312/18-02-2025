'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sessionStorage.setItem("username", username);
        router.push('/profile');
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('/mnt/data/image.png')]">
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-center text-white text-2xl font-semibold mb-4">ĐĂNG NHẬP</h2>

                <button className="w-44 text-white bg-blue-600 p-2 rounded-md text-left text-sm">
                    Quên mật khẩu?
                </button>

                <form onSubmit={handleLogin} className="mt-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Số điện thoại hoặc tài khoản *"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border rounded-md bg-white/80 placeholder-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Mật khẩu *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-md bg-white/80 placeholder-gray-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold text-lg"
                    >
                        ĐĂNG NHẬP
                    </button>
                </form>
            </div>
        </div>
    );
}
