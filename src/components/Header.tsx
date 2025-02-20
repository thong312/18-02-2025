import Link from 'next/link';

export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-cover bg-center transition-colors duration-300 hover:bg-white">
        {/* Logo và Menu */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-gray-800">Logo</Link>
          <nav>
            <ul className="flex space-x-6 text-gray-900">
              <li key="san-pham"><a href="#san-pham" className="hover:text-gray-900">SẢN PHẨM</a></li>
              <li key="giai-phap"><a href="#giai-phap" className="hover:text-gray-900">GIẢI PHÁP</a></li>
              <li key="cong-ty"><a href="#cong-ty" className="hover:text-gray-900">CÔNG TY</a></li>
              <li key="ho-tro"><a href="#ho-tro" className="hover:text-gray-900">HỖ TRỢ</a></li>
              <li key="tai-nguyen"><a href="#tai-nguyen" className="hover:text-gray-900">TÀI NGUYÊN</a></li>
            </ul>
          </nav>
        </div>
  
        {/* Phần bên phải */}
        <div className="flex items-center space-x-4">
          {/* Nút chuyển đổi Dark Mode */}
          <button className="flex items-center bg-gray-300 rounded-full p-2">
            <span className="mr-2 text-gray-600">🌙</span>
            <div className="w-5 h-5 bg-gray-900 rounded-full"></div>
          </button>
  
          {/* Chuyển đổi ngôn ngữ */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1">
            <span className="text-gray-800">EN</span>
          </div>
  
          {/* Nút đăng nhập */}
          <a href="/login" className="bg-orange-600 text-white px-4 py-2 rounded-md">
            ĐĂNG NHẬP
          </a>
        </div>
      </header>
    );
}
