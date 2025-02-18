'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import QRCodeImage from '../../assets/qr.png';
import Bg from '../../assets/bg.png';
import { Input } from 'antd'; 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { checkPassword } from '../../utils/hashUtils'; 

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const validateEmailOrPhone = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]+$/;
        return emailRegex.test(value) || phoneRegex.test(value);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmailOrPhone(username)) {
            toast.error("Email hoặc số điện thoại không hợp lệ.");
            return;
        }
        if (!checkPassword(password)) {
            toast.error("Mật khẩu không đúng.");
            return;
        }
        sessionStorage.setItem("username", username);
        router.push('/profile');
    };

    // const validatePassword = (value: string) => {
    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    //     return passwordRegex.test(value);
    // };

    return (
        <div className="relative flex items-center justify-center min-h-screen text-white bg-black" style={{ backgroundImage: `url(${Bg.src})`, backgroundSize: 'cover' }}>
            <ToastContainer /> {/* Add ToastContainer for toast notifications */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col w-full max-w-5xl space-y-4">
                <div className="p-4 rounded-lg shadow-lg w-full flex relative">

                    <div className="p-4 rounded-lg w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50">
                        <Image src={QRCodeImage} alt="QR Code" width={200} height={200} priority />
                        <p className="text-xs text-gray-300 mt-4 text-center italic">Mở ứng dụng <strong>VMS Cloud</strong> và quét mã QR để đăng nhập nhanh!</p>
                    </div>

                    <div className="relative flex flex-col items-center justify-center w-15">
                        <div className="w-px flex-1 bg-gray-400"></div>
                        <span className="relative px-2 bg-transparent text-gray-400">Hoặc</span>
                        <div className="w-px flex-1 bg-gray-400"></div>
                    </div>

                    <div className="p-8 rounded-lg w-full bg-gray-800 bg-opacity-50">
                        <h2 className="text-lg font-semibold text-center mb-4 text-white">Đăng Nhập</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-bold text-gray-300">Email hoặc số điện thoại</label>
                                <Input
                                    type="text"
                                    id="username"
                                    value={username}
                                    placeholder="Email hoặc số điện thoại"
                                    prefix={<UserOutlined />}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-gray-300">Mật khẩu</label>
                                <Input
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="Nhập mật khẩu"
                                    prefix={<LockOutlined />}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-black rounded-md shadow-md text-white font-medium"
                            >
                                Đăng Nhập
                            </button>
                        </form>
                        <p className="text-xs text-gray-300 text-center mt-4 italic">
                            Bằng việc nhấn đăng nhập, bạn đồng ý với các <a href="#" className="text-gray-300 font-bold">Điều khoản dịch vụ</a> và <a href="#" className="text-gray-300 font-bold">Chính sách bảo mật</a> của chúng tôi.
                        </p>
                    </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-300 text-center italic">
                            <a href="#" className="text-gray-300 font-bold">Bạn chưa có tài khoản?</a> Đăng ký ngay để quản lý tất cả thiết bị IoT của bạn trong một hệ sinh thái duy nhất.
                        </p>
                        <p className="text-xs text-center mt-2 italic">
                            <a href="#" className="text-gray-300 font-bold">Đăng ký</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
