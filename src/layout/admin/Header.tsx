import { Moon } from "lucide-react";

const Header = () => (
  <header className="bg-white border-b border-b-gray-300 py-6 px-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <button className="toggle-sidebar md:hidden mr-4">☰</button>
        <h1 className="text-xl font-bold">مانیتورینگ داده‌های واقعی </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Moon />
      </div>
    </div>
  </header>
);
export default Header;
