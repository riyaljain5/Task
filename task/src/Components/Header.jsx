import { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = () => {
    navigate('/login'); // Change to '/signup' if you want to navigate to the signup page
  };

  return (
    <section className="py-6">
      <nav className="container mx-auto flex flex-row items-center justify-between">
        {/* Hamburger Menu Icon */}
        <button className="px-4 md:hidden text-gray-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 flex items-center justify-between`}>
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">Explore</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">Services</Link>
          </li>
        </ul>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 mx-auto">LOGO</h1>

        {/* Search Bar and Profile Icon */}
        <div className='flex items-center gap-4'>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
              <FaSearch />
            </button>
          </div>
          <button 
            onClick={handleNavigation} // Handle click event
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FaUserCircle className="mr-2 text-xl h-10 w-10" /> {/* Profile Icon */}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
