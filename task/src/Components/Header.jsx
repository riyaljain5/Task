import { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import logo from '../assets/g.png';
import Button from './Button';
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
        <ul className={`flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 items-center justify-between`}>
        <button 
    onClick={handleNavigation} // Handle click event
    className="flex items-center text-[#286181] hover:text-[#A91B60]"
  >
    <FaUserCircle className="mr-2 text-xl h-10 w-10" /> {/* Profile Icon */}
  </button>
  <li>
    <Link to="/" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl">Home</Link>
  </li>
  <li>
    <Link to="/explore" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl">Explore</Link>
  </li>
  <li>
    <Link to="/services" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl">Services</Link>
  </li>
</ul>


        {/* Logo */}
        <img src={logo} width={300} height={100} alt="Logo" className='object-contain'/>
        {/* Search Bar and Profile Icon */}
        <div className='flex items-center gap-4'>
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="w-64 py-2 px-4 rounded-full border border-[#286181] focus:outline-none focus:border-[#A91B60] text-[#286181]"
    />
    <button className="absolute right-2 top-2 text-[#286181] hover:text-[#A91B60]">
      <FaSearch />
    </button>
  </div>
  <Button text={"Add Post"} className=''/>

  

</div>

      </nav>
    </section>
  );
};

export default Header;
