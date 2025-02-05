import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import alch from "../images/clients/alch.png";

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const povDropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const DropdownLink = ({ to, onClick, children }) => (
    <Link 
      to={to}
      onClick={onClick}
      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={alch} alt="Alchemyte Logo" className="h-8 w-auto sm:h-10" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "absolute top-16 left-0 right-0" : "hidden"
            } md:relative md:flex md:items-center md:space-x-4 bg-white md:bg-transparent w-full md:w-auto transition-all duration-200 ease-in-out`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 md:flex md:space-x-4 md:space-y-0 md:p-0">
              <Link 
                to="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 md:hover:bg-transparent rounded-md"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              {/* Services Dropdown */}
<div className="relative" ref={servicesDropdownRef}>
  <div className="flex items-center justify-between w-full">
    <Link
      to="/alchemyte"
      className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 md:hover:bg-transparent rounded-md"
    >
      What does Alchemyte do?
    </Link>
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevents the link click from affecting dropdown behavior
        toggleDropdown("services");
      }}
      className="px-2 py-2"
    >
      <ChevronDown
        size={16}
        className={`transition-transform duration-200 ${
          openDropdown === "services" ? "rotate-180" : ""
        }`}
      />
    </button>
  </div>

  {openDropdown === "services" && (
    <div className="mt-2 md:absolute md:left-0 w-full md:w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        <DropdownLink to="/service1" onClick={closeMenu}>
          Data & AI Strategy
        </DropdownLink>
        <DropdownLink to="/service2" onClick={closeMenu}>
          Innovative Products
        </DropdownLink>
        <DropdownLink to="/service3" onClick={closeMenu}>
          Growth Startups
        </DropdownLink>
      </div>
    </div>
  )}
</div>


              {/* POV Dropdown */}
              {/* POV Dropdown */}
<div className="relative" ref={povDropdownRef}>
  <div className="flex items-center justify-between w-full">
    <Link
      to="/pov"
      className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 md:hover:bg-transparent rounded-md"
    >
      POV
    </Link>
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevents link click from interfering with dropdown toggle
        toggleDropdown("pov");
      }}
      className="px-2 py-2"
    >
      <ChevronDown
        size={16}
        className={`transition-transform duration-200 ${
          openDropdown === "pov" ? "rotate-180" : ""
        }`}
      />
    </button>
  </div>

  {openDropdown === "pov" && (
    <div className="mt-2 md:absolute md:left-0 w-full md:w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        <DropdownLink to="/pov1" onClick={closeMenu}>Analytics POV</DropdownLink>
        <DropdownLink to="/pov2" onClick={closeMenu}>Product Thinking POV</DropdownLink>
        <DropdownLink to="/pov3" onClick={closeMenu}>Leadership POV</DropdownLink>
        <DropdownLink to="/pov4" onClick={closeMenu}>Agent AI POV</DropdownLink>
      </div>
    </div>
  )}
</div>

              <Link 
                to="/team"
                onClick={closeMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 md:hover:bg-transparent rounded-md"
              >
                The Team
              </Link>
              
              <Link 
                to="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 md:hover:bg-transparent rounded-md"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;