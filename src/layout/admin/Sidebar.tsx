import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-md h-screen fixed top-0 right-0 z-10 ">
    <div className="p-6 border-b border-b-gray-200">
      <h2 className="text-xl font-bold"> پنل مدیریت </h2>
    </div>
    <nav>
      <ul className="space-y-2 p-2 text-gray-500">
        <li>
          <Link
            to="/dashboard"
            className="block p-4 hover:bg-gray-100 rounded-2xl"
          >
            📊 داشبورد
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-4 hover:bg-gray-100 rounded-2xl">
            🏠 خانه
          </Link>
        </li>
        <li>
          <Link to="#" className="block p-4 hover:bg-gray-100 rounded-2xl">
            ⚙️ تنظیمات
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);
export default Sidebar;
