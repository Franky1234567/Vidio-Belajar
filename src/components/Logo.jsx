
import PropTypes from 'prop-types';
import logo from '../assets/Logo.png';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logo = ({ avatar = '', textMenu = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('datauser');
    navigate('/'); 
  };

  const menuItems = [
    { label: 'Profile', path: '/Profile' },
    { label: 'Kelas Saya', path: '/my-classes' },
    { label: 'Pesanan Saya', path: '/my-orders' },
    { label: 'Logout', action: handleLogout },
  ];

  return (
    <nav className="w-full px-4 py-5 bg-white">
      <div className="container mx-auto max-w-[1170px] ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-auto w-auto md:h-8 lg:h-10" />
          </div>

          {/* Hamburger for mobile */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-gray-700 text-sm lg:text-base">{textMenu}</div>
            
            {/* Desktop dropdown container */}
            <div className="relative" ref={dropdownRef}>
              {avatar && (
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden cursor-pointer focus:outline-none"
                >
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
              
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() =>{ 
                      setIsDropdownOpen(false);
                      if (item.action) item.action();
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700 text-sm">{textMenu}</div>
              {avatar && (
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src={avatar} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-col border-t border-gray-200">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="py-3 px-2 border-b border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() =>{ 
                      setIsDropdownOpen(false);
                      if (item.action) item.action();
                      }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Logo.propTypes = {
  avatar: PropTypes.string,
  textMenu: PropTypes.string
};

export default Logo;