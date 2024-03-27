import React, { useState } from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ManagementItemList from '../TeamManagementItemList/ManagementItem';
import SpecialistImg from './../../../assets/images/time-tracking-personal-img.png';
import CardSpecialistName from '../RecommendationCardName/CardSpecialistName';
import CardSpecialistPosition from '../RecommendationCardJobTitle/CardSpecialistPosition';
import TimeTrackingItems from './timeTrackingItems';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
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
            <div className="time__tracking-wrapper container">
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
                    <RecommendationCard
                        cardText={
                            '"Efficient productivity management in quality assurance enables you to save a ton of money on development. And that’s exactly what we get with DueFocus. This practical tool gives us a clear view of our KPIs and workflows. We get concise performance statistics that enables us to improve our project planning and establish transparent communication with clients."'
                        }
                        cardWrapperClassName="card__wrapper"
                        cardTextClassName="card__text"
                        starsClassName="stars"
                    >
                        <div className="card__items-wrapper">
                            <img src={SpecialistImg} alt="specialist image" className="specialist__img" />
                            <div className="card__items">
                                <CardSpecialistName text="Victoria V." classNames="specialist__name" />
                                <CardSpecialistPosition
                                    text="Lead of Testing Department at ..."
                                    classNames="specialist__position"
                                />
                            </div>
                        </div>
                    </RecommendationCard>
                </div>
            </div>
        </section>
    );
};

export default TimeTracking;
