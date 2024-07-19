import React, { useState, useEffect } from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ManagementItemList from '../TeamManagementItemList/ManagementItem';
import SpecialistImg from '../../../assets/images/time-tracking-personal-img.png';
import SpecialistImg2 from '../../../assets/images/hero-blog-avatar.png';
import SpecialistImg3 from '../../../assets/images/accordion-avatar-1.png';
import SpecialistImg4 from '../../../assets/images/accordion-avatar-2.png';
import CardSpecialistName from '../CardSpecialistName/CardSpecialistName';
import TimeTrackingItems from './timeTrackingItems';
import CardStars from '../../../assets/images/stars.svg';
import CardEmptyStar from '../../../assets/images/empty-star.svg';
import './style.css';

const itemData = [
    {
        id: 1,
        comment: `"Efficient productivity management in quality assurance enables you to save a ton of money on development. And that’s exactly what we get with DueFocus. This practical tool gives us a clear view of our KPIs and workflows. We get concise performance statistics that enables us to improve our project planning and establish transparent communication with clients."`,
        avatar: SpecialistImg,
        name: 'Victoria V.',
        position: 'Lead of Testing Department at TestFort',
        stars: [CardStars, CardStars, CardStars, CardStars, CardEmptyStar],
    },
    {
        id: 2,
        comment: `"Duefocus is a time tracking tool that in my view one of the most helpful for freelancers. With this app I don't have to think about how fairly I will be paid or how to support all of my projects at the same time. Thank you I hope you will keep doing it!"`,
        avatar: SpecialistImg2,
        name: 'Greg P.',
        position: 'Web Designer',
        stars: [CardStars, CardStars, CardStars, CardStars, CardStars],
    },
    {
        id: 3,
        comment: `"You guys make some incredibly effective software. Time tracker has been working flawlessly for us. You even cannot imagine how much time your app saved and how productive it was. Your software is something we were looking for a long time"`,
        avatar: SpecialistImg3,
        name: 'Anthony F.',
        position: 'Product Owner',
        stars: [CardStars, CardStars, CardStars, CardStars, CardEmptyStar],
    },
    {
        id: 4,
        comment: `"This automated time tracking solution has been an incredible addition to our time management efforts and employee performance analysis on projects. Its convenient reporting tools provided us with means and data necessary to achieve a significant productivity boost."`,
        avatar: SpecialistImg4,
        name: 'Matthew A.',
        position: 'Head of PMO at QArea',
        stars: [CardStars, CardStars, CardStars, CardStars, CardStars],
    },
];

const TimeTracking = () => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(1);
    const [selectedItem, setSelectedItem] = useState<(typeof itemData)[0]>(itemData[0]);

    useEffect(() => {
        if (selectedItemId !== null) {
            const item = itemData.find((data) => data.id === selectedItemId);
            if (item) setSelectedItem(item);
        }
    }, [selectedItemId]);

    const handleItemClick = (id: number) => {
        if (selectedItemId === id) {
            setSelectedItemId(null);
        } else {
            setSelectedItemId(id);
        }
    };

    return (
        <section className="time__tracking">
            <div className="time__tracking-wrapper">
                <ProductTitle text={'Time Tracking Software That Suits Everyone'} classNames={'timetracking__title'} />
                <div className="content__blocks">
                    <div className="content__items-left">
                        <ul className="management__list">
                            {TimeTrackingItems.map((el) => (
                                <ManagementItemList
                                    key={el.id}
                                    itemDesc={el.itemDesc}
                                    itemText={el.itemText}
                                    classNames={'management__item-list'}
                                    handleClick={() => handleItemClick(el.id)}
                                    textVisible={selectedItemId === el.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="time__tracking-cardWrapper">
                        <div className="time__tracking-itemsWrapper">
                            <p className="time__tracking-cardText">{selectedItem.comment}</p>
                            <div className="time__tracking-starsWrapper">
                                {selectedItem.stars.map((star, index) => (
                                    <img key={index} src={star} className="time__tracking-starImg" alt="card star" />
                                ))}
                            </div>
                            <div className="time__tracking-cardPersonalInfoWrapper">
                                <img src={selectedItem.avatar} alt="#!" className="time__tracking-specialistImg" />
                                <div className="time__tracking-personalInfoItems">
                                    <CardSpecialistName text={selectedItem.name} classNames="time__tracking-specialistName" />
                                    <span className="time__tracking-specialistPosition">{selectedItem.position}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeTracking;
