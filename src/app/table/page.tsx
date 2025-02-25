"use client";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../assets/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // Import the CSS file for animations
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function AccountInfo() {
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCancel = () => {
    setIsEditingPassword(false);
    setPassword("");
    setConfirmPassword("");
  };

  const handleSave = () => {
    if (password === confirmPassword) {
      toast.success("Mật khẩu đã được lưu!");
      handleCancel();
    } else {
      toast.error("Mật khẩu không khớp. Vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-10xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg relative">
      <ToastContainer />
      {/* Header */}
      <div className="bg-gray-600 text-white rounded-t-2xl p-4">
        <h1 className="text-xl font-semibold">Thông tin tài khoản</h1>
      </div>

      {/* User Info */}
      <div className="p-6" style={{ height: "300px" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-70 h-70">
              <Image
                src={Avatar}
                alt="Avatar"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-75 rounded-full"></div>
              <div className="absolute inset-0 flex items-end justify-center rounded-full cursor-pointer">
                <div className="mb-1 border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center hover:border-gray-100 transition">
                  <span className="text-gray-100 text-base font-bold">+</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold" style={{ color: "#55595D" }}>Username</h2>
              <p className="text-thin" style={{ color: "#55595D" }}>Full name</p>
            </div>
          </div>

          {/* Logout Button */}
          <div>
            <button className="animated-button px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 shadow transition-transform transform hover:scale-105" style={{ color: "#323232" }}>
              <LogoutIcon style={{ color: '#007DC0', padding: '2px', marginRight: '4px' }} />
              Đăng xuất
            </button>
          </div>
        </div>

        {/* Email Section */}
        <div className="mt-6 border-b pb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium" style={{ color: "#323232" }}>Địa chỉ email</h3>
              <p style={{ color: "#8E95A9" }}>Địa chỉ email liên kết với tài khoản của bạn.</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <span style={{ color: "#323232" }}>email@gmail.com</span>
              <span style={{ color: "#22AE68" }}>Đã xác thực</span>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-6 relative">
          {/* Tiêu đề luôn giữ nguyên vị trí */}
          <h3 className="font-medium mt-6" style={{ color: "#323232" }}>Mật khẩu</h3>

          <div className="flex justify-between items-center relative mt-2">
            {/* Nội dung mặc định */}
            <div className={!isEditingPassword ? "" : "hidden"}>
              <p style={{ color: "#8E95A9" }}>
                Cài mật khẩu khác biệt để bảo vệ an toàn cho tài khoản của bạn.
              </p>
            </div>

            {/* Nút Đổi mật khẩu */}
            {!isEditingPassword ? (
              <button
                className="animated-button px-4 py-2 bg-gray-100 rounded-lg border-slate-200 relative z-10 transition-transform transform hover:scale-105"
                style={{ color:"#55595D"}}
                onClick={() => setIsEditingPassword(true)}
              >
                Đổi mật khẩu
              </button>
            ) : (
              // Form nhập mật khẩu đè lên nút đổi mật khẩu
              <CSSTransition
                in={isEditingPassword}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <div className="absolute inset-0 bg-white flex items-center py-1 slide-enter-active">
                  <div className="flex flex-col justify-start space-y-1 w-1/4 pt-8">
                    <input
                      type="password"
                      placeholder="Nhập mật khẩu mới..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-none rounded-none px-0.5 py-2 w-3/4  "
                    />
                  </div>

                  <div className="flex flex-col justify-start space-y-2 w-1/4 ">
                    <label>Nhập lại</label>
                    <input
                      type="password"
                      placeholder="Nhập lại mật khẩu...."
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="border-none rounded-lg px-0.5 py-2 w-3/4 "
                    />
                  </div>

                  <div className="flex space-x-1 justify-end w-full mt-7">
                    <button
                      onClick={handleCancel}
                      className="animated-button px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105 slide-left slide-left-back "
                    >
                      <HighlightOffIcon style={{color:"gray",padding:'4px'}}/>
                      Hủy thay đổi 
                    </button>
                    <button
                      onClick={handleSave}
                      className="animated-button px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 slide-right slide-right-back"
                    >
                      Lưu mật khẩu
                    </button>
                  </div>
                </div>
              </CSSTransition>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
