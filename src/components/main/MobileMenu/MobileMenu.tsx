import React from 'react';
import './style.css';
import { Link } from 'gatsby';
import BlueBtn from '../../BlueBtn/BlueBtn';

interface MobileMenuProps {
    isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    const toSignIn = () => {
        return (window.location.href = 'https://web.duefocus.com/login');
    };

    return (
        <div id="mobile_menu" className={`mobile_menu-wrapper ${isOpen ? 'menu-open' : ''}`}>
            <div className="mobile_menu-content">
                <Link to="/" className="mobile_menu-links">
                    Home
                </Link>
                <Link to="/download" className="mobile_menu-links">
                    Downloads
                </Link>
                <div className="mobile_menu-buttonsWrapper">
                    <button onClick={toSignIn} type="button" style={{ margin: '20px' }} className="downloadPage-button">
                        Sign In
                    </button>
                    <Link to="/sign-up">
                        <BlueBtn text={'Sign Up'} classNames={'mobile-menu_blueBtn'} onClick={() => null} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
