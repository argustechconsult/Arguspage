
import React from 'react';
import { TrendingUp, Target, BarChart3, Rocket } from 'lucide-react';

const PaidTraffic: React.FC = () => {
  const features = [
    {
      title: 'Google Ads',
      desc: 'Apareça para quem já está procurando pelo seu produto ou serviço.',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Meta Ads',
      desc: 'Segmente seu público ideal no Instagram e Facebook com precisão cirúrgica.',
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />
    },
    {
      title: 'Análise de Dados',
      desc: 'Decisões baseadas em métricas reais, não em achismos.',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Escalabilidade',
      desc: 'Aumente seu investimento à medida que os resultados aparecem.',
      icon: <Rocket className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <section id="ads" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-blue-950/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">Alta Performance</h2>
            <h3 className="font-montserrat text-4xl md:text-6xl font-black text-white leading-tight">
              TRÁFEGO PAGO QUE <span className="text-blue-500 italic">VENDE.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Não basta ter um site bonito. É preciso atrair as pessoas certas. Nossa gestão de tráfego foca no que importa: <strong>Retorno sobre Investimento (ROI)</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="mb-4">{f.icon}</div>
                  <h4 className="text-white font-bold mb-2">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all hover:scale-105">
                Quero Escalar Meu Negócio
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Marketing Digital Analytics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent flex items-end p-8">
                <div className="glass-card p-6 rounded-2xl w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-bold text-lg">Crescimento de ROI</span>
                    <span className="text-green-400 font-bold">+240%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[85%] animate-[grow_2s_ease-out_forwards]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes grow {
          from { width: 0; }
          to { width: 85%; }
        }
      `}</style>
    </section>
  );
};

export default PaidTraffic;
