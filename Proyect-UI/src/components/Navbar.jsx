import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Establece el estado inicial de isMobile
    handleResize();

    window.addEventListener('resize', handleResize);

    // Limpia el evento resize 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Cierra el menú cuando cambia la ubicación
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img width={260} height={40} src='http://localhost:4500/uploads/Home/Home_small_logo.jpg' />
        </a>
        <button
          className="lg:hidden text-black hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="/" className="text-black hover:text-white text-lg">Home</a>
          </li>
          <li>
            <a href="/courses" className="text-black hover:text-white text-lg">Courses</a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-white text-lg">About</a>
          </li>
        </ul>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="/" className="block py-2 px-4 text-black hover:text-white" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="/courses" className="block py-2 px-4 text-black hover:text-white" onClick={toggleMenu}>Courses</a>
          </li>
          <li>
            <a href="/about" className="block py-2 px-4 text-black hover:text-white" onClick={toggleMenu}>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
