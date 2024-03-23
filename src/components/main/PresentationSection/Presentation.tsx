import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import PresentationList from '../PresentationList/PresentationList';
import firstItemImg from './../../../assets/images/image1.png';
import secondImg from './../../../assets/images/image2.png';
import thirdImg from './../../../assets/images/image3.png';
import fourthImg from './../../../assets/images/image4.png';
import fifthImg from './../../../assets/images/image5.png';
import sixthImg from './../../../assets/images/image6.png';

import './style.css';

const presentationItems = [
    {
        imageUrl: firstItemImg,
        itemDesc: 'Multivariate Tracking',
        itemText: 'Track time with one-click, manually or against tasks',
    },
    {
        imageUrl: secondImg,
        itemDesc: 'Embedded Task Tracker',
        itemText: 'Track work hours to your tasks and projects in one app',
    },
    {
        imageUrl: thirdImg,
        itemDesc: 'Real-time Monitoring',
        itemText: 'Be aware of how your team members spend working time',
    },
    {
        imageUrl: fourthImg,
        itemDesc: 'Easy Reporting',
        itemText: 'Send .xls reports to your task management tool, email, etc.',
    },
    {
        imageUrl: fifthImg,
        itemDesc: 'Screenshots',
        itemText: 'Monitor performance & employees',
    },
    {
        imageUrl: sixthImg,
        itemDesc: 'Stage Mapping',
        itemText: 'Change status and priority of tasks during the time tracking',
    },
];

const Presentation = () => {
    return (
        <section id="presentation" className="presentation">
            <div className="presentation__wrapper container">
                <ProductTitle text={'What Makes DueFocus an Innovative Time Tracker'} classNames={`presentation__title`} />
                <div className='presentation__list-wrapper'>
                    <ul className="presentation__list">
                        {presentationItems.map((el, index) => (
                            <PresentationList key={index} imageUrl={el.imageUrl} itemDesc={el.itemDesc} itemText={el.itemText} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
