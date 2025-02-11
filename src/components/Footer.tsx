import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-16 text-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* Logo + Social Media */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="Logo" className="w-40 mb-6" />
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-gray-300 p-3 rounded-full"><i className="fab fa-telegram"></i></a>
            <a href="#" className="bg-gray-300 p-3 rounded-full"><i className="fab fa-facebook"></i></a>
            <a href="#" className="bg-gray-300 p-3 rounded-full"><i className="fab fa-youtube"></i></a>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">LIÊN HỆ</h3>
            <ul className="space-y-4">
              <li><i className="fas fa-map-marker-alt mr-2"></i> 420/3A Quốc lộ 13, Bình Dương</li>
              <li><i className="fas fa-phone mr-2"></i> 0889 666 661 - 0909 246 111</li>
              <li><i className="fas fa-envelope mr-2"></i> info@oryza.vn</li>
            </ul>
          </div>
        </div>

        {/* Sản phẩm */}
        <div className="flex flex-col items-start">
          <h3 className="font-thin text-xl mb-4">SẢN PHẨM</h3>
          <ul className="space-y-4">
            <li><a href="#">Camera</a></li>
            <li><a href="#">Access Control</a></li>
            <li><a href="#">Parking</a></li>
            <li><a href="#">Alarms</a></li>
            <li><a href="#">GPS</a></li>
            <li><a href="#">Storage</a></li>
            <li><a href="#">Sensors</a></li>
            <li><a href="#">Software & Platform</a></li>
          </ul>
        </div>

        {/* Giải pháp */}
        <div className="flex flex-col items-start">
          <h3 className="font-thin text-xl mb-4">GIẢI PHÁP</h3>
          <ul className="space-y-4">
            <li><a href="#">Smart Building</a></li>
            <li><a href="#">Smart Industrial Park</a></li>
            <li><a href="#">Smart Neighborhood</a></li>
            <li><a href="#">Smart Bank & Gold Shop Alarm</a></li>
          </ul>
        </div>

        {/* Công ty */}
        <div className="flex flex-col items-start">
          <h3 className="font-thin text-xl mb-4">Công ty</h3>
          <ul className="space-y-4">
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Đối tác</a></li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div className="flex flex-col items-start">
          <h3 className="font-thin text-xl mb-4">Hỗ trợ</h3>
          <ul className="space-y-4">
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Đặt lịch sửa chữa</a></li>
            <li><a href="#">Chính sách</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-12 text-center">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}
