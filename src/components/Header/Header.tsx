import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './header.css';
import BlueBtn from '../BlueBtn/BlueBtn';
import headerLogo from '../../assets/images/header-logo.webp';

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

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

    const menuActive = () => {
        const hamburger = document.getElementById('burger-menu');
        if (hamburger?.className === 'open') {
            hamburger.removeAttribute('class');
        } else {
            hamburger?.classList.add('open');
        }
        return false;
    };

    const handleOpenMenu = () => {
        window.scrollTo(0, 0);
        if (document.getElementById('burger-menu')?.className === 'burger_menu open') {
            document.getElementById('mobile_menu')?.classList.add('menu-open');
            document.body.classList.add('modal-active');
        } else {
            document.getElementById('mobile_menu')?.classList.remove('menu-open');
            document.body.removeAttribute('class');
        }
    };

    const handleCloseMenu = () => {
        document.getElementById('mobile_menu')?.classList.remove('menu-open');
        document.body.removeAttribute('class');
        document.getElementById('burger-menu')?.removeAttribute('class');
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
                        <div onClick={handleOpenMenu} className="mobile-menu">
                            <div onClick={menuActive} id="burger-menu" className="burger_menu">
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
        </header>
    );
};

export default Header;
