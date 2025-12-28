
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Entre em Contato</h2>
            <h3 className="font-montserrat text-4xl md:text-6xl font-black text-white mb-8">VAMOS CONSTRUIR ALGO <span className="text-blue-500 italic">LENDÁRIO.</span></h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">E-mail</p>
                  <p className="text-lg text-white font-medium">contato@argustech.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-purple-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Telefone</p>
                  <p className="text-lg text-white font-medium">+55 (11) 90000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-emerald-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Onde Estamos</p>
                  <p className="text-lg text-white font-medium">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2rem] border-white/5 relative">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Nome Completo</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ex: João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Seu E-mail</label>
                  <input type="email" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="joao@exemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Tipo de Projeto</label>
                <select className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option>Tráfego Pago / ROI</option>
                  <option>Aplicação Web / Site</option>
                  <option>E-Commerce</option>
                  <option>Consultoria de IA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Mensagem</label>
                <textarea rows={4} className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Conte-nos sobre sua visão..."></textarea>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
