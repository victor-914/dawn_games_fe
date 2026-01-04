import React from 'react'
import HeroSection from '../components/about/HeroSection';
import More from '../components/about/More';
import Values from '../components/about/Values';
import Enterprise from '../components/about/Enterprise';
import JoinUs from '../components/about/JoinUs';

const About = () => {
  return (
    <main>
        <HeroSection />
        <More />
        <Values />
        <Enterprise />
        <JoinUs />
    </main>
  )
}

export default About;
