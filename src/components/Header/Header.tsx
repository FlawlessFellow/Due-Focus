import React from 'react';
import BlueBtn from '../BlueBtn/BlueBtn';
import headerLogo from '../../assets/images/header-logo.webp';
import './header.css';

const Header = () => {
    return (
        <header id='header'>
            <div className="header__wrapper container">
                <nav className="header__nav">
                    <div className="header__nav-links">
                        <a href="#!">
                            <img src={headerLogo} alt="logo" className="header__nav-logo" />
                        </a>
                        <a href="#!" className="header__nav-download hvr-grow">
                            Downloads
                        </a>
                    </div>
                    <div className="header__nav-actions">
                        <button type="button" className="header__nav-greyBtn">
                            Log In
                        </button>
                        <BlueBtn text={'Sign In'} classNames={'header__nav-blueBtn'} onClick={() => null}/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
