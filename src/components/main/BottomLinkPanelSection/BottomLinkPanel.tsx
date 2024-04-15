import React from 'react';
import './style.css';
import { Link } from 'gatsby';
import linkItem1 from '../../../assets/images/link1-image.png';
import linkItem2 from '../../../assets/images/link2-image.png';
import linkItem3 from '../../../assets/images/link3-image.png';
import linkItem4 from '../../../assets/images/link4-image.png';
import linkItem5 from '../../../assets/images/link5-image.png';

const linkItems = [
    { img: linkItem1, alt: 'time tracking image' },
    { img: linkItem2, alt: 'engineering metrics' },
    { img: linkItem3, alt: 'code quality ranking' },
    { img: linkItem4, alt: 'writing better code' },
    { img: linkItem5, alt: 'set realistic estimates' },
];

const BottomLinkPanel = () => {
    return (
        <div className="bottom__link-panel">
            <div className="bottom__linkPanel-container">
                <div className="bottom__linkPanel-list">
                    {linkItems.map((item) => (
                        <Link to="#!" target={'_blank'} className="bottomPanel-linkItem">
                            <img src={item.img} alt={item.alt} className='bottom__linkPanel-img'/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomLinkPanel;
