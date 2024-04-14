import React from 'react';
import './style.css';
import LinkPanelTopBlockImg from '../../../assets/images/link-panel-topBlock.png';
import BlueBtn from '../../BlueBtn/BlueBtn';

const LinkPanel = () => {
    return (
        <section className="link__panel">
            <div className="link__panel-itemsWrapper">
                <div className="link__panel-imgWrapper">
                    <img src={LinkPanelTopBlockImg} alt="Chrome web store image" className="top__block-img" />
                </div>
                <BlueBtn text={'Get Started'} classNames={'link__panel-blueBtn hvr-float-shadow'} onClick={() => null} />
            </div>
        </section>
    );
};

export default LinkPanel;
