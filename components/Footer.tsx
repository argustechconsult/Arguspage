
import React from 'react';
import { Terminal, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1 rounded-lg">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-montserrat text-xl font-black text-white">ARGUSTECH</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Superando os limites do que é possível na web. Criando experiências digitais rápidas, acessíveis e impactantes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Serviços</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#ads" className="hover:text-blue-400 transition-colors">Tráfego Pago</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Design UI/UX</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">IA & Automação</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Empresa</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Nosso Trabalho</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-sm text-gray-500 mb-6">Receba insights tecnológicos e atualizações da agência mensalmente.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none flex-grow" placeholder="Seu e-mail" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Assinar</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-900 gap-6">
          <p className="text-xs text-gray-600">© 2024 ArgusTech Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-xs text-gray-600 font-medium">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
