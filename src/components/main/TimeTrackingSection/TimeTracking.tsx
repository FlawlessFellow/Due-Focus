import React, { useState } from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ManagementItemList from '../TeamManagementItemList/ManagementItem';
import SpecialistImg from './../../../assets/images/time-tracking-personal-img.png';
import CardSpecialistName from '../CardSpecialistName/CardSpecialistName';
import TimeTrackingItems from './timeTrackingItems';
import CardStars from './../../../assets/images/stars.svg';
import CardEmptyStar from './../../../assets/images/empty-star.svg';
import './style.css';

const TimeTracking = () => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

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
                            {TimeTrackingItems.map((el, index: number) => (
                                <ManagementItemList
                                    key={index}
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
                            <p className="time__tracking-cardText">
                                "Efficient productivity management in quality assurance enables you to save a ton of money on
                                development. And that’s exactly what we get with DueFocus. This practical tool gives us a clear
                                view of our KPIs and workflows. We get concise performance statistics that enables us to improve
                                our project planning and establish transparent communication with clients."
                            </p>
                            <div className="time__tracking-starsWrapper">
                                <img src={CardStars} className="time__tracking-starImg" alt="card star" />
                                <img src={CardStars} className="time__tracking-starImg" alt="card star" />
                                <img src={CardStars} className="time__tracking-starImg" alt="card star" />
                                <img src={CardStars} className="time__tracking-starImg" alt="card star" />
                                <img src={CardEmptyStar} alt="empty card star" />
                            </div>
                            <div className="time__tracking-cardPersonalInfoWrapper">
                                <img src={SpecialistImg} alt="#!" className="time__tracking-specialistImg" />
                                <div className="time__tracking-personalInfoItems">
                                    <CardSpecialistName text="Victoria V." classNames="time__tracking-specialistName" />
                                    <span className="time__tracking-specialistPosition">
                                        Lead of Testing Department at <a href="#!">TestFort</a>
                                    </span>
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
