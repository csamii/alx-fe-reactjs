import { useState } from 'react';
import { ChefHat, Search } from 'lucide-react';

// Main App component containing the Navbar
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800 flex items-center">
              <ChefHat className="text-orange-500 w-8 h-8 mr-2" />
              RecipeBox
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-md font-medium transition duration-300">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-md font-medium transition duration-300">
              Recipes
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-md font-medium transition duration-300">
              About
            </a>
          </div>

          {/* User Actions & Mobile Menu Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-orange-500 p-2 rounded-full transition duration-300">
                <Search className="w-5 h-5" />
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-300 shadow-md">
                <span className="flex items-center">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close menu icon */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-800 hover:bg-orange-100 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</a>
          <a href="#" className="text-gray-800 hover:bg-orange-100 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Recipes</a>
          <a href="#" className="text-gray-800 hover:bg-orange-100 block px-3 py-2 rounded-md text-base font-medium transition duration-300">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;