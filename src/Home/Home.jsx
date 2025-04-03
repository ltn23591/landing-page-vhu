import React from "react";
import Header from "../components/header";
import Hero from "./Hero/index";
import Intro from "./Intro/index";
import News from "./News/index";
import SubIntro from "./SubIntro/index";
import About from "./About/index";
import Admissions from "./Admissions/index";
import AboutUs from "./AboutUs/index";
import Footer from "../components/Footer/index";
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Intro />
            <News />
            <SubIntro />
            <Admissions />
            <AboutUs />
            <About />
            <Footer />
        </>
    );
};

export default Home;
