"use client";
import { useState } from "react";
import "./switch.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Cctv, CirclePlus, Cpu, Ghost, LayoutGrid, List, Search, CircleAlert, Circle, Dot, CopyIcon, HardDrive } from "lucide-react";
import { cameras } from "./camera_data";
import { ComputingAI } from "./ComputingAI_data";

export default function CameraSystem() {
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedData, setSelectedData] = useState("camera");

  const itemsPerPage = 10;
  const data = selectedData === "camera" ? cameras : ComputingAI;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const tagStatuses = [
    "Lỗi xác thực",
    "Sai loại thiết bị",
    "Mất kết nối",
    "Đã tắt",
    "Đã bị khóa",
    "Đang hoạt động",
    "Kích hoạt thất bại"
  ];

  const tagStyles: Record<string, string> = {
    "Lỗi xác thực": "text-[#FF7A00] bg-[#FFF1E0] ",
    "Sai loại thiết bị": "text-[#FF7A00] bg-[#FFF1E0]",
    "Mất kết nối": "text-[#FF7A00] bg-[#FFF1E0]",
    "Đã tắt": "text-[#808080] bg-[#E3E5E5]",
    "Đã bị khóa": "text-[#FF7A00] bg-[#FFF1E0]",
    "Đang hoạt động": "text-[#22AE68] bg-[#DFF5E8]",
    "Kích hoạt thất bại":"bg-[#FFE3E3] text-[#E42727]"
  };

  const statusColors: Record<string, string> = {
    "Đang hoạt động": "text-[#22AE68] bg-[#DFF5E8]",
    "Đang kích hoạt": "text-[#78C6E7]",
  };

  const renderStatus = (status: string) => {
    if (tagStatuses.includes(status)) {
      return (
        <span
          className={`inline-block px-2 py-0.5 text-sm border rounded-3xl max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap ${tagStyles[status]}`}
          title={status} // Hiển thị tooltip khi hover vào
        >
          {["Lỗi xác thực", "Sai loại thiết bị", "Mất kết nối", "Đã bị khóa"].includes(status) && (
            <CircleAlert size={16} className="inline-block mr-1" />
          )}
          {["Đã tắt", "Đang hoạt động", "Kích hoạt thất bại"].includes(status) && (
            <Circle size={16} className="inline-block mr-1" />
          )}
          {status}
        </span>
      );
    }
    return <span className={statusColors[status] || "text-gray-500"}>{status}</span>;
  };
  

  const renderIcon = (dataType: string) => {
    if (dataType === "camera") {
      return <Cctv size={64} className="text-gray-400" />;
    } else if (dataType === "computingAI") {
      return <HardDrive size={64} className="text-gray-400" />;
    }
    return null;
  };
  const renderIconSmall = (dataType: string) => {
    if (dataType === "camera") {
      return <Cctv size={16} className="text-gray-400" />;
    } else if (dataType === "computingAI") {
      return <HardDrive size={16} className="text-gray-400" />;
    }
    return null;
  };
  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6">
      <div className="bg-white shadow rounded-2xl p-2 sm:p-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Tích hợp thiết bị</h2>
        
        {/* Device type buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-2 mb-4 w-full sm:w-auto">
            <button
              className={`px-3 py-2 rounded-lg ${selectedData === "camera" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"} flex items-center space-x-2 text-sm sm:text-base`}
              onClick={() => setSelectedData("camera")}
            >
              <Cctv className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Camera</span>
            </button>
            
            <button
              className={`px-3 py-2 rounded-lg ${selectedData === "computingAI" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"} flex items-center space-x-2 text-sm sm:text-base`}
              onClick={() => setSelectedData("computingAI")}
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Computing AI</span>
            </button>
            
            <button className="px-3 py-2 rounded-lg bg-gray-100 text-gray-600 flex items-center space-x-2 text-sm sm:text-base">
              <Ghost className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Thiết bị khác</span>
            </button>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Tìm kiếm dữ liệu..."
                className="border p-2 pl-10 rounded-lg w-full"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setIsGridLayout(true)}
                  className={`p-2 rounded-lg ${isGridLayout ? "bg-white shadow" : "text-gray-400"}`}
                >
                  <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setIsGridLayout(false)}
                  className={`p-2 rounded-lg ${!isGridLayout ? "bg-white shadow" : "text-gray-400"}`}
                >
                  <List className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <select className="border p-2 rounded-lg text-sm">
                <option value="" disabled hidden>Hiển thị</option>
                <option>Tất cả</option>
                <option>Đang kích hoạt</option>
                <option>Kích hoạt thất bại</option>
                <option>Lỗi xác thực</option>
              </select>

              <FilterListIcon className="w-6 h-6" />
              
              <button className="px-3 py-2 rounded-lg bg-black text-white flex items-center space-x-2 text-sm sm:text-base">
                <CirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Tạo mới</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid/List View */}
        <div className="overflow-x-auto rounded-lg">
          {isGridLayout ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {currentData.map((item, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow relative w-full">
                  <div className="flex flex-col items-center py-4">
                    {renderIcon(selectedData)}
                    {renderStatus(item.status)}
                  </div>
                  <div className="border-t p-4">
                    <p className=" flex items-center gap-2 mb-2 ">
                      {renderIconSmall(selectedData)} <span className="text-[#55595D]"> {item.name}</span>
                    </p>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-600">Mã ID</span>
                      <div className="flex items-center gap-1">
                        <a href="#" className="text-blue-500 hover:underline">{item.id}</a>
                        <CopyIcon size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                      </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-600">IP</span>
                      <div className="flex items-center gap-1">
                        <a href="#" className="text-blue-500 hover:underline">{item.ip}</a>
                        <CopyIcon size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="p-3 xl:p-4">#</th>
                    <th scope="col" className="p-3 xl:p-4">
                      <div className="flex items-center">
                        Mã ID
                      </div>
                    </th>
                    <th scope="col" className="p-3 xl:p-4">
                      <div className="flex items-center">
                        Tên thiết bị
                      </div>
                    </th>
                    <th scope="col" className="hidden sm:table-cell p-3 xl:p-4">
                      <div className="flex items-center">
                        Địa chỉ IP/domain
                      </div>
                    </th>
                    <th scope="col" className="hidden md:table-cell p-3 xl:p-4">
                      <div className="flex items-center">
                        Địa chỉ
                      </div>
                    </th>
                    <th scope="col" className="hidden lg:table-cell p-3 xl:p-4">
                      <div className="flex items-center">
                        Tọa độ vị trí
                      </div>
                    </th>
                    <th scope="col" className="p-3 xl:p-4">
                      <div className="flex items-center">
                        Trạng thái
                      </div>
                    </th>
                    <th scope="col" className="p-3 xl:p-4">
                      <div className="flex items-center">
                        Bật/Tắt
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="p-3 xl:p-4">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="p-3 xl:p-4">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{item.id}</span>
                          <CopyIcon size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                        </div>
                      </td>
                      <td className="p-3 xl:p-4 font-medium">
                        {item.name}
                      </td>
                      <td className="hidden sm:table-cell p-3 xl:p-4">
                        <div className="flex items-center gap-1">
                          {item.ip}
                          <CopyIcon size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                        </div>
                      </td>
                      <td className="hidden md:table-cell p-3 xl:p-4">
                        {item.location}
                      </td>
                      <td className="hidden lg:table-cell p-3 xl:p-4">
                        <div className="flex items-center gap-1 text-blue-500">
                          {item.timestamp}
                          <CopyIcon size={16} className="cursor-pointer text-gray-400 hover:text-gray-600" />
                        </div>
                      </td>
                      <td className="p-3 xl:p-4">
                        {renderStatus(item.status)}
                      </td>
                      <td className="p-3 xl:p-4">
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
          )}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
          <span className="text-sm">{currentData.length}/{data.length} dữ liệu</span>
          
          <div className="flex items-center space-x-2">
            {/* Nút Previous */}
            <button
              className="p-2  flex items-center justify-center disabled:opacity-50"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {/* Các số trang */}
            {totalPages > 6 ? (
              <>
                <button
                  className={`w-8 h-8 flex items-center justify-center  ${currentPage === 1 ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
                {currentPage > 3 && <span className="px-2">...</span>}

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
                  .map(page => (
                    <button
                      key={page}
                      className={`w-8 h-8 flex items-center justify-center  ${currentPage === page ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}

                {currentPage < totalPages - 2 && <span className="px-2">...</span>}
                <button
                  className={`w-8 h-8 flex items-center justify-center  ${currentPage === totalPages ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            ) : (
              [...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 flex items-center justify-center rounded-md border ${currentPage === i + 1 ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))
            )}

            {/* Nút Next */}
            <button
              className="p-2 flex items-center justify-center disabled:opacity-50"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>

          <span className="flex items-center text-sm">
            <span className="text-gray-700 font-medium">Trang</span>
            <div className="ml-3 px-3 py-1 border rounded-lg bg-white shadow-sm text-[#55595D] font-semibold">
              {currentPage}
            </div>
          </span>
        </div>

      </div>
    </div>
  );
}
