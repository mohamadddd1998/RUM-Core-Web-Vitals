import { Link } from "react-router-dom";

const Header = () => (
  <header className="my-4 px-6">
    <div className="container shadow-md bg-white rounded-2xl mx-auto p-4 flex justify-between items-center">
      <div className="logo">
        <a href="#" className="text-xl font-bold">
          لوگو سایت
        </a>
      </div>

      <nav>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <Link to="/" className="hover:text-blue-600">
              خانه
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-600">
              داشبورد
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-blue-600">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-blue-600">
              درباره ما
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-icons flex space-x-4">
        <a href="#">
          <span aria-hidden="true">🔍</span>
        </a>
        <a href="#">
          <span aria-hidden="true">🛒</span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
