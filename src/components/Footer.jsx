import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-700 py-6 mt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left side - copyright */}
          <p className="text-sm text-center md:text-left ">
            &copy; {new Date().getFullYear()} MyEvent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
