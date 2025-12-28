
import React from 'react';
import { Project, Service } from './types';
import { Code, Cpu, Globe, Layout, Layers, Zap, TrendingUp } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'Leonice Dias',
    category: 'Landing Page Profissional',
    description: 'Presença digital elegante e moderna desenvolvida para Leonice Dias, focada em autoridade e conversão.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
    link: 'https://leonicedias.vercel.app',
    tags: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: '8',
    title: 'Thata Gourmet',
    category: 'Gastronomia & Delivery',
    description: 'Vitrine digital gastronômica para a Thata Gourmet, unindo design apetitoso com funcionalidade de encomendas.',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
    link: 'https://thatagourmet.vercel.app',
    tags: ['UX Design', 'React', 'Mobile First']
  },
  {
    id: '1',
    title: 'Dashboard Lumina AI',
    category: 'Aplicação Web',
    description: 'Um dashboard corporativo sofisticado para monitoramento de performance de modelos de IA.',
    imageUrl: 'https://picsum.photos/seed/lumina/1200/800',
    link: '#',
    tags: ['Next.js', 'Tailwind', 'Recharts']
  },
  {
    id: '2',
    title: 'Nexus Crypto Exchange',
    category: 'Fintech',
    description: 'Plataforma de trading em tempo real de alta performance para ativos digitais.',
    imageUrl: 'https://picsum.photos/seed/nexus/1200/800',
    link: '#',
    tags: ['React', 'WebSockets', 'D3.js']
  },
  {
    id: '3',
    title: 'EcoFlow E-Commerce',
    category: 'Varejo',
    description: 'Marketplace de produtos sustentáveis com experiência de checkout fluida.',
    imageUrl: 'https://picsum.photos/seed/eco/1200/800',
    link: '#',
    tags: ['Shopify', 'Headless', 'Framer Motion']
  },
  {
    id: '4',
    title: 'Aura Wellness App',
    category: 'Saúde',
    description: 'Aplicativo de mindfulness e rastreamento de saúde para clínicas premium.',
    imageUrl: 'https://picsum.photos/seed/aura/1200/800',
    link: '#',
    tags: ['React Native', 'Firebase', 'GraphQL']
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sites de alta performance sob medida para suas necessidades usando os frameworks mais modernos.',
    icon: <Globe className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas focadas em ROI no Google Ads e Meta Ads para escalar seu faturamento rapidamente.',
    icon: <TrendingUp className="w-8 h-8 text-green-400" />
  },
  {
    title: 'Excelência em UI/UX',
    description: 'Designs centrados no usuário que convertem visitantes em clientes através de interações intuitivas.',
    icon: <Layout className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'Integração com IA',
    description: 'Aproveite o poder dos LLMs e automação para otimizar seus processos de negócio.',
    icon: <Cpu className="w-8 h-8 text-emerald-400" />
  },
  {
    title: 'Arquitetura Escalonável',
    description: 'Sistemas robustos desenhados para lidar com milhões de requisições sem falhas.',
    icon: <Layers className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Otimização de SEO',
    description: 'Garantimos que seu site carregue instantaneamente e ranqueie no topo dos buscadores.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  }
];
