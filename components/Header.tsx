import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6L30.5 17.5L42 24L30.5 30.5L24 42L17.5 30.5L6 24L17.5 17.5L24 6Z" stroke="#C75D3C" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M30 6L33 12L39 15L33 18L30 24L27 18L21 15L27 12L30 6Z" stroke="#C75D3C" strokeWidth="3" strokeLinejoin="round"/>
    </svg>
    <span className="text-xl font-bold tracking-tight text-brand-dark">MARRAKECH RENTALS</span>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-primary/10'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
    isActive ? 'bg-brand-primary text-white' : 'text-brand-dark hover:bg-brand-primary/10'
  }`;

  return (
    <header className="bg-brand-secondary/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/"><Logo /></Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/vehicles" className={navLinkClasses}>Vehicles</NavLink>
              <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-secondary inline-flex items-center justify-center p-2 rounded-md text-brand-primary hover:text-brand-dark hover:bg-brand-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/vehicles" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Vehicles</NavLink>
            <NavLink to="/services" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;