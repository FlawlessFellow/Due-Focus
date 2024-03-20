import React from 'react';
import './style.css';
import LinkPanelTopBlockImg from '../../../assets/images/link-panel-topBlock.png';
import BlueBtn from '../../BlueBtn/BlueBtn';
import linkItem1 from '../../../assets/images/link1-image.png';
import linkItem2 from '../../../assets/images/link2-image.png';
import linkItem3 from '../../../assets/images/link3-image.png';
import linkItem4 from '../../../assets/images/link4-image.png';
import linkItem5 from '../../../assets/images/link5-image.png';

const LinkPanel = () => {
    return (
        <section className="link__panel">
            <div className="link__panel-topBlock">
                <img src={LinkPanelTopBlockImg} alt="Chrome web store image" className="top__block-img" />
                <BlueBtn text={'Get Started'} classNames={'link__panel-blueBtn hvr-float-shadow'} onClick={() => null} />
            </div>
            <div className="link__panel-bottomBlock">
                <div className="link__panel-listBlock container">
                    <ul className="link__panel-list">
                        <li className="link__panel-listItem">
                            <a href="" className="link__panel-linkItem">
                                <img src={linkItem1} alt="time tracking image" />
                            </a>
                        </li>
                        <li className="link__panel-listItem">
                            <a href="" className="link__panel-linkItem">
                                <img src={linkItem2} alt="engineering metrics" />
                            </a>
                        </li>
                        <li className="link__panel-listItem">
                            <a href="" className="link__panel-linkItem">
                                <img src={linkItem3} alt="code quality ranking" />
                            </a>
                        </li>
                        <li className="link__panel-listItem">
                            <a href="" className="link__panel-linkItem">
                                <img src={linkItem4} alt="writing better code" />
                            </a>
                        </li>
                        <li className="link__panel-listItem">
                            <a href="" className="link__panel-linkItem">
                                <img src={linkItem5} alt="set realistic estimates" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LinkPanel;
