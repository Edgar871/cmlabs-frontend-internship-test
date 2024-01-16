import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
    const { openSidebar } = useSidebarContext();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 60) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar bg-white flex align-center ${scrolled ? 'scrolled' : ""}`}>
            <div className='container w-100'>
                <div className='navbar-content text-black'>
                    <div className='brand-and-toggler flex align-center justify-between'>
                        <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
                            <MdFoodBank />
                            <span className='navbar-brand-text fw-7'>mealapp</span>
                        </Link>
                      <div className='navbar-btns flex align-center'>
                          <IoMdMenu className={`navbar-menu-icon ${isMenuOpen ? 'open' : ''} d-md-none`} onClick={handleMenuClick} />
                           <ul className={`navbar-list-items mobile-menu ${isMenuOpen ? 'show' : ''} d-md-flex`}>
                            <li><a href='' onClick={handleMenuClick}>Home</a></li>
                            <li><a href='#categories' onClick={handleMenuClick}>Categories</a></li>
                            <li><a href='' onClick={handleMenuClick}>Contact</a></li>
                            <li><a href='' onClick={handleMenuClick}>About</a></li>
                           </ul>
                      </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
