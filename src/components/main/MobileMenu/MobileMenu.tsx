import React from 'react';
import './style.css';
import BlueBtn from '../../BlueBtn/BlueBtn';

interface MobileMenuProps {
    isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    return (
        <div id="mobile_menu" className={`mobile_menu-wrapper ${isOpen ? 'menu-open' : ''}`}>
            <div className="mobile_menu-content">
                <a className="mobile_menu-links" href="#!">
                    Home
                </a>
                <a className="mobile_menu-links" href="#!">
                    Downloads
                </a>
                <div className="mobile_menu-buttonsWrapper">
                    <button type="button" style={{ margin: '20px' }} className="header__nav-greyBtn">
                        Log In
                    </button>
                    <BlueBtn text={'Sign Up'} classNames={'mobile-menu_blueBtn'} onClick={() => null} />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
