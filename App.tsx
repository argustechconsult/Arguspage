
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import PaidTraffic from './components/PaidTraffic';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

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

      {/* Persistent Call to Action for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="#contact"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
        >
          <span className="sr-only">Contate-nos</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
