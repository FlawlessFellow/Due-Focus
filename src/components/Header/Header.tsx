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
        }
        if (window.scrollY === 0) {
            headerRef.current.classList.remove('header-fixed');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', isHeaderFixed);
        return () => {
            window.removeEventListener('scroll', isHeaderFixed);
        };
    }, [isHeaderFixed]);

    return (
        <header id="header" ref={headerRef}>
            <div className="header__wrapper">
                <nav className="header__nav">
                    <div className="header__nav-links">
                        <Link to="#!" target={'_blank'}>
                            <img src={headerLogo} alt="logo" className="header__nav-logo" />
                        </Link>
                        <Link to="#!" target={'_blank'} className="header__nav-download hvr-grow">
                            Downloads
                        </Link>
                        <div className="header__burger">
                            <span></span>
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
