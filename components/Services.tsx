
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Capacidades</h2>
          <h3 className="font-montserrat text-4xl md:text-6xl font-black text-white mb-8">COMO CONSTRUÍMOS</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Combinamos estratégia de alto nível com execução impecável para criar marcas que dominam seus mercados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.title} 
              className="p-10 rounded-3xl glass-card hover:bg-white/5 transition-colors group"
            >
              <div className="mb-8 p-4 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
