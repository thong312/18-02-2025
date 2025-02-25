"use client";
import { useState } from "react";
import "./switch.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Cctv, CirclePlus, Cpu, Ghost, LayoutGrid, List, Search } from "lucide-react";

export default function CameraSystem() {
  const [cameras] = useState([
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
  const [isGridLayout, setIsGridLayout] = useState(false);

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

            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 flex items-center space-x-2" style={{ fontSize: "16px" }}>
                <Cctv size={20} />
                <span>Camera</span>
              </button>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 flex items-center space-x-2" style={{ fontSize: "16px" }}>
                <Cpu size={20} />
                <span>Computing AI</span>
              </button>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 flex items-center space-x-2" style={{ fontSize: "16" }}>
                <Ghost size={20} />
                <span> Thiết bị khác </span>
              </button>
            </div>

          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Tìm kiếm dữ liệu..."
                className="border p-2 pl-10 rounded-lg w-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setIsGridLayout(true)}
                  className={`p-2 rounded-lg ${isGridLayout ? "bg-white shadow" : "text-gray-400"}`}
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setIsGridLayout(false)}
                  className={`p-2 rounded-lg ${!isGridLayout ? "bg-white shadow" : "text-gray-400"}`}
                >
                  <List size={20} />
                </button>
              </div>
              <select className="border p-2 rounded-lg">
                <option value="" disabled hidden>Hiển thị</option>
                <option>Tất cả</option>
                <option>Đang kích hoạt</option>
                <option>Kích hoạt thất bại</option>
                <option>Lỗi xác thực</option>
              </select>

              <FilterListIcon />
              <div className="flex justify-center items-center space-x-2">
                <button className="px-4 py-2 rounded-lg bg-black text-white flex items-center space-x-2">
                  <CirclePlus size={20} />
                  <span>Tạo mới</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className={`min-w-full text-sm text-left ${isGridLayout ? 'grid-layout' : ''}`}>
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
