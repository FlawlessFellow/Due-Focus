import React from 'react';
import './style.css';
import Header from '../Header/Header';
import downloadLogo from '../../assets/images/get-started-logo.svg';
import BottomLinkPanel from '../main/BottomLinkPanelSection/BottomLinkPanel';
import Footer from '../Footer/Footer';
import BlueBtn from '../BlueBtn/BlueBtn';

const toDownloadPage = () => {
    window.open('https://chromewebstore.google.com/detail/duefocus-time-tracking-ap/jmjoillacjphggegfecfofhagpcfnhda', '_blank');
};

// HEADER-BLOG CSS STYLES
const headerNav = {
    justifyContent: 'space-between',
};
const headerNavDownload = {
    display: 'none',
};
const headerNavActions = {
    width: '25%',
    marginLeft: '0',
    marginRight: '10px',
};

const DownloadPage = () => {
    return (
        <>
            <Header
                headerNavClass={headerNav}
                headerNavDownloadClass={headerNavDownload}
                headerNavActionsClass={headerNavActions}
            />
            <div className="main-wrapper">
                <div className="main-content">
                    <img src={downloadLogo} alt="logo" style={{ width: '120px', height: '120px' }} />
                    <br />
                    <br />
                    <div className="main-text">
                        <h1 className="download-title">Download DueFocus now</h1>
                        <p className="download-text">Enjoy DueFocus Desktop Application in all OS</p>
                    </div>
                    <div className="button-wrapper">
                        <BlueBtn text="Download App" classNames={'download-button'} onClick={toDownloadPage} />
                    </div>
                    {/* <span>Graphic card with support for WebGL</span> */}
                </div>
            </div>
            <BottomLinkPanel />
            <Footer />
        </>
    );
};

export default DownloadPage;
