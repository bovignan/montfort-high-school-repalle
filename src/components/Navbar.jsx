import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & School Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpg"
            alt="Montfort Logo"
            className="w-12 h-12 rounded-full object-contain"
          />
          <h1 className="text-lg sm:text-xl font-bold leading-tight">
            Montfort High School, Repalle
          </h1>
        </div>

        {/* Hamburger Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col sm:flex sm:flex-row sm:space-x-4 ${isOpen ? "flex" : "hidden"} sm:items-center`}>
          <Link to="/" className="block mt-2 sm:mt-0 hover:text-yellow-300">Home</Link>
          <Link to="/about" className="block mt-2 sm:mt-0 hover:text-yellow-300">About</Link>
          <Link to="/events" className="block mt-2 sm:mt-0 hover:text-yellow-300">Events</Link>
          
          <Link to="/login" className="block mt-2 sm:mt-0 hover:text-yellow-300">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
