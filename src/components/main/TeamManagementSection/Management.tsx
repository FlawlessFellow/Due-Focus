import React from 'react';
import { useState } from 'react';
import './style.css';
import ProductTitle from '../ProductTitle/ProductTitle';
import ManagementLeftBlockImg from './../../../assets/images/Management-left-block.png';
import ManagementItemList from '../TeamManagementItemList/ManagementItem';
import managementItems from './teamManagementItems';

const Management = () => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const handleItemClick = (id: number) => {
        if (selectedItemId === id) {
            setSelectedItemId(null);
        } else {
            setSelectedItemId(id);
        }
    };

    return (
        <section className="management">
            <div className="container">
                <div className="management__wrapper">
                    <ProductTitle text={'Managing Teams Has Never Been Easier'} classNames={`management__title`} />
                    <div className="management__dual-block">
                        <div className="management__left-block">
                            <img src={ManagementLeftBlockImg} alt="Management image" className="management__leftBlock-img" />
                        </div>
                        <div className="management__right-block">
                            <ul className="management__list">
                                {managementItems.map((el, index: number) => (
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Management;
