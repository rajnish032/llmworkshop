import React, { useState } from 'react';
import { Link, Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Logo or Title */}
          {/* <div className="text-xl font-bold text-blue-600">MyEvent</div> */}

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/workshopprogramme" className="text-gray-700 hover:text-blue-600 font-medium">Workshop Programme</Link>
            
            <Link to="/organiser" className="text-gray-700 hover:text-blue-600 font-medium">Organiser</Link>
            <Link to="/callforus" className="text-gray-700 hover:text-blue-600 font-medium">Call for Paper</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/workshopprogramme" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Workshop Programme</Link>
            
            <Link to="/organization" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Organiser</Link>
            <link to="/callforus" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Call for Paper</link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



