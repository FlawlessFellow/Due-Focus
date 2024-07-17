import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

            setScrollPercentage(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div
            id="progress-container"
            style={{
                height: '4px',
                width: '100%',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                zIndex: '2000',
                background: 'transparent',
            }}
        >
            <div
                className="progress-fill"
                style={{ height: '100%', width: `${scrollPercentage}%`, backgroundColor: '#4291EB' }}
            ></div>
        </div>
    );
};

export default ProgressBar;
