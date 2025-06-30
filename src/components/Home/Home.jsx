import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import WhyChooseUs from './sections/WhyChooseUs';
import Facilities from './sections/Facilities';
import EnhancedGallery from '../EnhancedGallery/EnhancedGallery';
import Testimonials from './sections/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Academics />
      <WhyChooseUs />
      <Facilities />
      <EnhancedGallery />
      <Testimonials />
    </div>
  );
};

export default Home;
