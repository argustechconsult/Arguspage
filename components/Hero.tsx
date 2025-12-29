import React, { useEffect, useState } from 'react';
import { ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { generateAIPitch } from '../services/geminiService';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  const [pitch, setPitch] = useState<string>(
    'ArgusTech: Transformamos seu negócio local em uma potência digital com sites profissionais que atraem clientes e geram resultados reais.',
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPitch = async () => {
      const generated = await generateAIPitch('ArgusTech');
      setPitch(generated);
      setIsLoading(false);
    };
    fetchPitch();
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in hover:scale-105 transition-transform cursor-default shadow-lg shadow-blue-500/20 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Sua Empresa no Próximo Nível
          </span>
        </div>

        <h1 className="font-montserrat text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-10">
          PRESENÇA{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            DIGITAL
          </span>
        </h1>

        {/* Pitch Card Container */}
        <div
          className={`max-w-3xl mx-auto relative transition-all duration-1000 transform ${
            isLoading
              ? 'opacity-0 translate-y-4 blur-md'
              : 'opacity-100 translate-y-0 blur-0'
          }`}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg" />
          <div className="relative px-8 py-6 rounded-2xl bg-gray-900/40 border border-white/10 backdrop-blur-md">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed tracking-wide font-medium italic">
              "{pitch}"
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#portfolio"
            className="group flex items-center gap-3 bg-white text-gray-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            Ver Portfólio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Hero Horizontal Slider (Site Showcases) */}
      <div className="w-full relative overflow-hidden mt-20">
        <div className="flex gap-8 px-6 animate-[scroll_50s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {[...PROJECTS, ...PROJECTS].map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="w-[320px] md:w-[500px] aspect-video rounded-2xl overflow-hidden glass-card group cursor-pointer relative border border-white/5"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <span className="text-blue-400 text-[10px] font-black tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-1 rounded-md bg-white/10 text-white/70 backdrop-blur-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
