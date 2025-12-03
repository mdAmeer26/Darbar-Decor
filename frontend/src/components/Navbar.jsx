import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-maroon to-secondary-purple rounded-full flex items-center justify-center">
              <span className="text-primary-gold font-bold text-xl">DD</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-maroon">
                Darbar Decor
              </h1>
              <p className="text-xs text-neutral-charcoal">Premium Events</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-maroon border-b-2 border-primary-gold'
                    : 'text-neutral-charcoal hover:text-primary-maroon'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 bg-primary-gold text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              <FaPhone />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-maroon text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-beige">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 py-2 ${
                    location.pathname === link.path
                      ? 'text-primary-maroon font-bold'
                      : 'text-neutral-charcoal hover:text-primary-maroon'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-primary-gold text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                <FaPhone />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
