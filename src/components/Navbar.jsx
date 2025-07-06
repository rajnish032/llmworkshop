import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Workshop Programme', href: '/workshopprogramme' },
    { name: 'Organiser', href: '/organiser' },
    { name: 'Call for Paper', href: '/workshopinfo' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-gray-700 font-medium px-2 pb-1 ${
                  isActive(link.href) ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-700 font-medium ${
                  isActive(link.href) ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




