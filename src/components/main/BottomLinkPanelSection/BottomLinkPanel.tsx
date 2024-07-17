import React from 'react';
import './style.css';
import linkItem1 from '../../../assets/images/link1-image.png';
import linkItem2 from '../../../assets/images/link2-image.png';
import linkItem3 from '../../../assets/images/link3-image.png';
import linkItem4 from '../../../assets/images/link4-image.png';
import linkItem5 from '../../../assets/images/link5-image.png';

const linkItems = [
    { id: 1, img: linkItem1, alt: 'time tracking image' },
    { id: 2, img: linkItem2, alt: 'engineering metrics' },
    { id: 3, img: linkItem3, alt: 'code quality ranking' },
    { id: 4, img: linkItem4, alt: 'writing better code' },
    { id: 5, img: linkItem5, alt: 'set realistic estimates' },
];

const BottomLinkPanel = () => {
    return (
        <div className="bottom__link-panel">
            <div className="bottom__linkPanel-container">
                <div className="bottom__linkPanel-list">
                    {linkItems.map((el) => (
                        <a href="#!" className="bottomPanel-linkItem" key={el.id}>
                            <img src={el.img} alt={el.alt} className="bottom__linkPanel-img" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomLinkPanel;
