import React from 'react';
import { Project, Service } from './types';
import {
  Code,
  Cpu,
  Globe,
  Layout,
  Layers,
  Zap,
  TrendingUp,
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Thata Gourmet',
    category: 'Gastronomia & Delivery',
    description:
      'Vitrine digital gastronômica para a Thata Gourmet, unindo design apetitoso com funcionalidade de encomendas.',
    imageUrl: '/projects/thatagourmet.png',
    link: 'https://thatagourmet.vercel.app',
    tags: ['UX Design', 'React', 'Mobile First'],
  },
  {
    id: '2',
    title: 'Leonice Dias',
    category: 'Landing Page Profissional',
    description:
      'Presença digital elegante e moderna desenvolvida para Leonice Dias, focada em autoridade e conversão.',
    imageUrl: '/projects/leonicedias.png',
    link: 'https://leonicedias.vercel.app',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: '3',
    title: 'Argus Construtora',
    category: 'Engenharia & Construção',
    description:
      'Plataforma institucional robusta destacando o portfólio de obras e a solidez da Argus Construtora.',
    imageUrl: '/projects/argus-contrutora.png',
    link: 'https://argus-contrutora.vercel.app',
    tags: ['Institucional', 'Corporate', 'React'],
  },
  {
    id: '4',
    title: 'Netlink Connects',
    category: 'Telecom & Internet',
    description:
      'Portal de vendas para provedor de internet de alta velocidade, focado em planos e aquisição de clientes.',
    imageUrl: '/projects/netlink-connects.png',
    link: 'https://netlink-connects.vercel.app',
    tags: ['Telecom', 'Vendas', 'Landing Page'],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento Web',
    description:
      'Sites de alta performance sob medida para suas necessidades usando os frameworks mais modernos.',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Gestão de Tráfego Pago',
    description:
      'Campanhas focadas em ROI no Google Ads e Meta Ads para escalar seu faturamento rapidamente.',
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
  },
  {
    title: 'Excelência em UI/UX',
    description:
      'Designs centrados no usuário que convertem visitantes em clientes através de interações intuitivas.',
    icon: <Layout className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'Integração com IA',
    description:
      'Aproveite o poder dos LLMs e automação para otimizar seus processos de negócio.',
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: 'Arquitetura Escalonável',
    description:
      'Sistemas robustos desenhados para lidar com milhões de requisições sem falhas.',
    icon: <Layers className="w-8 h-8 text-orange-400" />,
  },
  {
    title: 'Otimização de SEO',
    description:
      'Garantimos que seu site carregue instantaneamente e ranqueie no topo dos buscadores.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
];
