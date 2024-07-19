import React from 'react';
import './style.css';
import linkItem1 from '../../../assets/images/link1-image.png';
import linkItem2 from '../../../assets/images/link2-image.png';
import linkItem3 from '../../../assets/images/link3-image.png';
import linkItem4 from '../../../assets/images/link4-image.png';
import linkItem5 from '../../../assets/images/link5-image.png';

const linkItems = [
    { id: 1, img: linkItem1, alt: 'time tracking image', href: '#!' },
    { id: 2, img: linkItem2, alt: 'engineering metrics', href: 'https://duecode.io/' },
    {
        id: 3,
        img: linkItem3,
        alt: 'code quality ranking',
        href: 'https://duerank.com/leaderboard?country=G&lang=Go&max=10000&min=5000&page=1',
    },
    { id: 4, img: linkItem4, alt: 'writing better code', href: 'https://duelearn.com/' },
    {
        id: 5,
        img: linkItem5,
        alt: 'set realistic estimates',
        href: 'https://marketplace.atlassian.com/apps/1224361/duetask-for-jira/?ref=producthunt&tab=overview',
    },
];

const BottomLinkPanel = () => {
    return (
        <div className="bottom__link-panel">
            <div className="bottom__linkPanel-container">
                <div className="bottom__linkPanel-list">
                    {linkItems.map((el) => (
                        <a href={el.href} className="bottomPanel-linkItem" key={el.id} target="blank">
                            <img src={el.img} alt={el.alt} className="bottom__linkPanel-img" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomLinkPanel;
