import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './header.css';
import BlueBtn from '../BlueBtn/BlueBtn';
import headerLogo from '../../assets/images/header-logo.webp';
import MobileMenu from '../main/MobileMenu/MobileMenu';

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const burgerMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isHeaderFixed = () => {
        if (!headerRef.current) return;
        if (window.scrollY >= 70) {
            headerRef.current.classList.add('header-fixed');
        } else if (window.scrollY === 0) {
            headerRef.current.classList.remove('header-fixed');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', isHeaderFixed);
        return () => {
            window.removeEventListener('scroll', isHeaderFixed);
        };
    }, [isHeaderFixed]);

    const toggleMenu = () => {
        if (burgerMenuRef.current) {
            if (burgerMenuRef.current.classList.contains('open')) {
                burgerMenuRef.current.classList.remove('open');
                setIsMenuOpen(false); // Закрываем меню
            } else {
                burgerMenuRef.current.classList.add('open');
                setIsMenuOpen(true); // Открываем меню
            }
        }
    };

    const handleOpenMenu = () => {
        window.scrollTo(0, 0);
        if (burgerMenuRef.current?.classList.contains('open')) {
            mobileMenuRef.current?.classList.add('menu-open');
            document.body.classList.add('modal-active');
        } else {
            mobileMenuRef.current?.classList.remove('menu-open');
            document.body.classList.remove('modal-active');
        }
    };

    const handleCloseMenu = () => {
        mobileMenuRef.current?.classList.remove('menu-open');
        document.body.classList.remove('modal-active');
        burgerMenuRef.current?.classList.remove('open');
        setIsMenuOpen(false); // Закрываем меню
    };

    return (
        <header id="header" ref={headerRef}>
            <div className="header__wrapper">
                <nav className="header__nav">
                    <div className="header__nav-links">
                        <Link to="#!" target={'_blank'}>
                            <img src={headerLogo} alt="logo" className="header__nav-logo" />
                        </Link>
                        <Link to="#!" target={'_blank'} onClick={handleCloseMenu} className="header__nav-download hvr-grow">
                            Downloads
                        </Link>
                        <div onClick={handleOpenMenu} ref={mobileMenuRef} className="mobile-menu">
                            <div onClick={toggleMenu} ref={burgerMenuRef} id="burger-menu" className="burger_menu">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="header__nav-actions">
                        <button type="button" className="header__nav-greyBtn">
                            Log In
                        </button>
                        <BlueBtn text={'Sign Up'} classNames={'header__nav-blueBtn'} onClick={() => null} />
                    </div>
                </nav>
            </div>
            <MobileMenu isOpen={isMenuOpen} />
        </header>
    );
};

export default Header;
