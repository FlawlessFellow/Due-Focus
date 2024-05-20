import React, { FC } from 'react';
import Hero from './main/HeroSection/Hero';
import Presentation from './main/PresentationSection/Presentation';
import Management from './main/TeamManagementSection/Management';
import GetStarted from './main/GetStartedSection/GetStarted';
import TimeTracking from './main/TimeTrackingSection/TimeTracking';
import DataSecurity from './main/DataSecuritySection/DataSecurity';
import Header from './Header/Header';
import '../assets/styles/main.css';
import Recommendation from './main/RecommendationSection/Recommendation';
import LinkPanel from './main/LinkPanelSection/LinkPanel';
import Footer from './Footer/Footer';
import BottomLinkPanel from './main/BottomLinkPanelSection/BottomLinkPanel';
import SignUpSection from './SignUpPage/SignUpSection/SignUpSection';
import MobileMenu from './main/MobileMenu/MobileMenu';

const MainSection: FC = () => {
    return (
        <>
            {/* <Header />
            <Hero />
            <Presentation />
            <Management />
            <GetStarted />
            <TimeTracking />
            <DataSecurity />
            <Recommendation />
            <LinkPanel />
            <BottomLinkPanel />
            <Footer />
            <MobileMenu /> */}
            <SignUpSection />
        </>
    );
};

export default MainSection;
