import React, { useState } from 'react';

// Navbar component definition
function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
      <div className="flex items-center">
  <a 
    href="/" 
    className="text-3xl font-bold text-[#FB9E3A] transition-transform duration-300 hover:scale-105 font-handwriting"
  >
    Hassan Mahmood
  </a>
</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="Navbar.js">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#portfolio">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#FB9E3A] focus:outline-none focus:ring-2 focus:ring-[#FB9E3A] p-2 rounded"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              // Close icon (X) when menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black mt-4 py-4 rounded-md shadow-inner">
          <ul className="flex flex-col items-center space-y-4">
            <li><MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink></li>
            <li><MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink></li>
            <li><MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink></li>
            <li><MobileNavLink href="#portfolio" onClick={toggleMenu}>Projects</MobileNavLink></li>
            <li><MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// NavLink component for desktop navigation items
// It includes the animated underline on hover, with no text color change.
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      // The text color remains fixed. The 'group' class allows the child span to react to parent hover.
      className="relative text-[#FB9E3A] text-lg font-medium group"
    >
      {children}
      {/* Animated underline */}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FB9E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </a>
  );
}

// MobileNavLink component for mobile navigation items
// Now also includes the animated underline on hover, with no background change.
function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      // The text color remains fixed. Added 'relative' and 'group' for the underline effect.
      className="block w-full text-center py-2 text-[#FB9E3A] text-lg font-medium relative group"
    >
      {children}
      {/* Animated underline for mobile links */}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FB9E3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </a>
  );
}

// Export the Navbar component for use in other files.
export default Navbar;
