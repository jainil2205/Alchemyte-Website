import React, { useState, useEffect, useRef } from 'react';
import NavLinks from './NavLink';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    function handleClick() {
        setIsOpen((prev) => !prev);
    }

    // Handle scroll effect
    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 10);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-white shadow-lg' : ''}`}>
            <div className="flex flex-row justify-between items-center py-4 px-6">
                
                {/* Logo */}
                <div className="text-xl font-bold text-blue-900">
                    <a href="/"></a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-8">
                    <NavLinks />
                </div>

                {/* Mobile Menu Button */}
                <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                    <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation */}
                <div ref={menuRef} className={`fixed left-0 top-16 w-full bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col space-y-6">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
