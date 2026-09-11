import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, FileUp, ExternalLink, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Call for Papers', href: '/workshopinfo' },
    { name: 'Programme', href: '/workshopprogramme' },
    { name: 'Organizers & TPC', href: '/organiser' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Logo / Academic Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <span className="font-mono-academic font-bold">TC26</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base md:text-lg tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                TADD-Climate 2026
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                IEEE BigData 2026 Workshop
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isActive(link.href)
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 transition-all shadow-sm shadow-slate-900/10 hover:shadow-md hover:-translate-y-0.5"
            >
              <FileUp className="w-4 h-4 text-emerald-400" />
              <span>Submit Paper</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://wi-lab.com/cyberchair/2026/bigdata26/scripts/submit.php?subarea=S16&undisplay_detail=1&wh=/cyberchair/2026/bigdata26/scripts/ws_submit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900 text-white flex items-center gap-1.5"
            >
              <FileUp className="w-3.5 h-3.5 text-emerald-400" />
              Submit
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.href)
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="https://bigdataieee.org/BigData2026/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                <span>IEEE BigData 2026 Main Conference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




