import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import PaidTraffic from './components/PaidTraffic';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
          }
        });
      },
      { threshold: 0.1 },
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <TechStack />
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Portfolio />
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <PaidTraffic />
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Services />
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Contact />
        </div>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default App;
