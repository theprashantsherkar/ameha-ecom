// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../Components/HeroSection';
import TopCategories from '../Components/TopCategories';
import BestsellersSection from '../Components/BestsellersSection';

const Home = () => {
return (
    <div>
    <HeroSection />
    <TopCategories />
    <BestsellersSection />
    </div>
);
};

export default Home;

