"use client";
import { useState } from "react";
import "./switch.css";

export default function CameraSystem() {
  const [cameras, setCameras] = useState([
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Kích hoạt thất bại" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Kích hoạt thất bại" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Đang kích hoạt" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Lỗi xác thực" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Sai loại thiết bị" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Mất kết nối" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Đã tắt" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Đã bị khóa" },
    { id: "MHE1145551", name: "Camera phòng họp", ip: "211.445.026.16", location: "420 Đại lộ Bình Dương, Khu phố 7", timestamp: "11.047019,106.838356", status: "Đang hoạt động" },
  ]);

  const statusColors = {
    "Đang hoạt động": "text-green-500",
    "Kích hoạt thất bại": "text-red-500",
    "Đang kích hoạt": "text-blue-500",
    "Lỗi xác thực": "text-orange-500",
    "Sai loại thiết bị": "text-orange-500",
    "Mất kết nối": "text-orange-500",
    "Đã tắt": "text-gray-500",
    "Đã bị khóa": "text-orange-500",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4">Tích hợp thiết bị</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 mb-4">
            <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600" style={{fontSize:"16"}}>Camera</button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600" style={{fontSize:"16"}}>Computing AI</button>
            <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600" style={{fontSize:"16"}}>Thiết bị khác</button>
          </div>
          <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu..."
            className="border p-2 rounded-lg w-1/3"
          />
          <div className="flex items-center space-x-2">
            <select className="border p-2 rounded-lg">
              <option>Hiển thị: Tất cả</option>
            </select>
            <button className="px-4 py-2 rounded-lg bg-black text-white">Tạo mới</button>
          </div>

          </div>
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Mã ID</th>
                <th className="py-2 px-4">Tên camera</th>
                <th className="py-2 px-4">Địa chỉ IP/domain</th>
                <th className="py-2 px-4">Địa chỉ</th>
                <th className="py-2 px-4">Tọa độ vị trí</th>
                <th className="py-2 px-4">Trạng thái</th>
                <th className="py-2 px-4">Bật/Tắt</th>
              </tr>
            </thead>
            <tbody>
              {cameras.map((camera, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4">{camera.id}</td>
                  <td className="py-2 px-4">{camera.name}</td>
                  <td className="py-2 px-4">{camera.ip}</td>
                  <td className="py-2 px-4">{camera.location}</td>
                  <td className="py-2 px-4 text-blue-500 cursor-pointer">{camera.timestamp}</td>
                  <td className={`py-2 px-4 ${statusColors[camera.status]}`}>{camera.status}</td>
                  <td className="py-2 px-4 text-center">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span>9/100 dữ liệu</span>
          <div className="flex items-center space-x-1">
            <button className="px-2 py-1 border rounded">&lt;</button>
            {[1, 2, 3, '...', 10, 11, 12].map((page, i) => (
              <button
                key={i}
                className={`px-2 py-1 border rounded ${page === 1 ? 'bg-gray-200' : ''}`}
              >
                {page}
              </button>
            ))}
            <button className="px-2 py-1 border rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
