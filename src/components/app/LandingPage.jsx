import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from '../heroSection/HeroSection'
import Faq from '../faqSection/faq/Faq'
import Footer from '../footer/Footer'
const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Faq />
        <Footer />

        </div>
    )
}

export default LandingPage
