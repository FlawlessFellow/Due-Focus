import React, {FC} from "react";
import Hero from "./HeroSection/Hero";
import Presentation from "./PresentationSection/Presentation";
import Layout from "../Layout";
import Management from "./TeamManagementSection/Management";
import GetStarted from "./GetStartedSection/GetStarted";
import TimeTracking from "./TimeTrackingSection/TimeTracking";
import DataSecurity from "./DataSecuritySection/DataSecurity";
// import SlickSlider from '../SlickSlider'
import Header from "../Header/Header";
import '../../assets/styles/main.css';
import '../../assets/styles/hover.css';

const MainSection: FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Presentation />
        <Management />
      </Layout>
      <GetStarted />
      <Layout>
        <TimeTracking />
        <DataSecurity />
      </Layout>
    </>
  );
};

export default MainSection;
