// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../Components/HeroSection';
import TopCategories from '../Components/TopCategories';
import BestsellersSection from '../Components/BestsellersSection';
import WhyShopWithUs from '../Components/WhyShopWithUs';
import NewsletterFooterSection from '../Components/NewsletterFooterSection';

const Home = () => {
return (
    <div className="bg-gray-50 min-h-screen">
    <HeroSection />
    <TopCategories />
    <BestsellersSection />
    <WhyShopWithUs />
    <NewsletterFooterSection />
    </div>
);
};

export default Home;

