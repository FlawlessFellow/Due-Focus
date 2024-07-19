import React from 'react';
import './style.css';
import LinkPanelTopBlockImg from '../../../assets/images/link-panel-topBlock.png';
import BlueBtn from '../../BlueBtn/BlueBtn';

const LinkPanel = () => {
    const goToWebStore = () => {
        window.open(
            'https://chromewebstore.google.com/detail/duefocus-time-tracking-ap/jmjoillacjphggegfecfofhagpcfnhda',
            '_blank'
        );
    };

    return (
        <section className="link__panel">
            <div className="link__panel-itemsWrapper">
                <div className="link__panel-imgWrapper">
                    <img src={LinkPanelTopBlockImg} alt="Chrome web store image" className="top__block-img" />
                </div>
                <BlueBtn text={'Get Started'} classNames={'link__panel-blueBtn'} onClick={goToWebStore} />
            </div>
        </section>
    );
};

export default LinkPanel;
