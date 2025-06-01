import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or any icon library

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
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/workshopprogramme" className="text-gray-700 hover:text-blue-600 font-medium">Workshop Programme</a>
            
            <a href="/organiser" className="text-gray-700 hover:text-blue-600 font-medium">Organiser</a>
            <a href="/callforpaper" className="text-gray-700 hover:text-blue-600 font-medium">Call for Paper</a>
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
            <a href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/workshopprogramme" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Workshop Programme</a>
            
            <a href="/organization" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Organiser</a>
            <a href="/callforpaper" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium">Call for Paper</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



