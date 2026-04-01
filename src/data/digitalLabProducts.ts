import promptnovaaiIcon from '@/assets/icons/promptnovaai.png';
import macheBhateIcon from '@/assets/icons/mache-bhate.png';
import nasrushopIcon from '@/assets/icons/nasrushop.png';
import studyflowaiIcon from '@/assets/icons/studyflowai.png';
import nasrutoolsIcon from '@/assets/icons/nasrutools.png';
import nasrustoreIcon from '@/assets/icons/nasrustore.png';
import cricketnIcon from '@/assets/icons/cricketn.png';
import warchroniclesIcon from '@/assets/icons/warchronicles.png';
import jibonflowIcon from '@/assets/icons/jibonflow.png';
import portfolioIcon from '@/assets/icons/portfolio.png';
import literariaIcon from '@/assets/icons/literaria.png';
import acuaworldIcon from '@/assets/icons/acuaworld.png';
import summitatlasIcon from '@/assets/icons/summitatlas.png';

export interface DigitalLabProduct {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  href: string;
  accent: string;
  featured: boolean;
  tooltip: string;
}

export const digitalLabProducts: DigitalLabProduct[] = [
  // ── Featured (shown in ProjectsSection) ──
  {
    id: 'promptnovaai',
    name: 'PromptNovaAI',
    subtitle: 'AI-powered prompt & tool platform',
    icon: promptnovaaiIcon,
    href: 'https://promptnovaai.lovable.app/',
    accent: '--neon-cyan',
    featured: true,
    tooltip: 'AI productivity toolkit',
  },
  {
    id: 'mache-bhate',
    name: 'মাছে ভাতে বাঙ্গালী',
    subtitle: 'Traditional Bengali Food Website',
    icon: macheBhateIcon,
    href: 'https://machebhatebanglai.pro.bd',
    accent: '--neon-orange',
    featured: true,
    tooltip: 'Bengali food heritage platform',
  },
  {
    id: 'nasrushop',
    name: 'NasruShop',
    subtitle: 'Modern AI e-commerce',
    icon: nasrushopIcon,
    href: 'https://nasrushop.lovable.app',
    accent: '--neon-cyan',
    featured: true,
    tooltip: 'AI-powered e-commerce experience',
  },

  // ── Orbit + Popup only ──
  {
    id: 'studyflowai',
    name: 'StudyFlowAI',
    subtitle: 'AI-driven study companion',
    icon: studyflowaiIcon,
    href: 'https://studyandcareer-ai.lovable.app/',
    accent: '--neon-blue',
    featured: false,
    tooltip: 'Smart AI study companion',
  },
  {
    id: 'nasrutools',
    name: 'NasruTools',
    subtitle: 'AI-powered utility tools',
    icon: nasrutoolsIcon,
    href: 'https://nasrutools.lovable.app',
    accent: '--neon-purple',
    featured: false,
    tooltip: 'Premium utility toolkit',
  },
  {
    id: 'nasrustore',
    name: 'Nasru Store',
    subtitle: 'Curated products & collections',
    icon: nasrustoreIcon,
    href: 'https://nasrustore.netlify.app/#',
    accent: '--neon-orange',
    featured: false,
    tooltip: 'Curated product collections',
  },
  {
    id: 'cricketn',
    name: 'Cricket N',
    subtitle: 'Live cricket experience',
    icon: cricketnIcon,
    href: 'https://cricketnasrumade.lovable.app/',
    accent: '--neon-blue',
    featured: false,
    tooltip: 'Live cricket experience',
  },
  {
    id: 'warchronicles',
    name: 'War Chronicles',
    subtitle: 'Strategic warfare experience',
    icon: warchroniclesIcon,
    href: 'https://warchronicles.lovable.app/',
    accent: '--neon-purple',
    featured: false,
    tooltip: 'Strategic warfare archive',
  },
  {
    id: 'jibonflow',
    name: 'JibonFlow | জীবনফ্লো',
    subtitle: 'Life management platform',
    icon: jibonflowIcon,
    href: 'https://jibonflow.lovable.app/',
    accent: '--neon-cyan',
    featured: false,
    tooltip: 'Life management system',
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    subtitle: 'Interactive AI portfolio',
    icon: portfolioIcon,
    href: 'https://mdnasrullah.pro.bd/',
    accent: '--neon-blue',
    featured: false,
    tooltip: 'Interactive AI portfolio',
  },
  {
    id: 'literaria',
    name: 'Literaria',
    subtitle: 'Writers & literature platform',
    icon: literariaIcon,
    href: 'https://literaryarchive.lovable.app/',
    accent: '--neon-cyan',
    featured: false,
    tooltip: 'Writers & literature archive',
  },
  {
    id: 'acuaworld',
    name: 'Acua World',
    subtitle: 'Ocean, rivers & aquatic exploration',
    icon: acuaworldIcon,
    href: 'https://acuaworld.lovable.app/',
    accent: '--neon-blue',
    featured: false,
    tooltip: 'Ocean discovery experience',
  },
  {
    id: 'summitatlas',
    name: 'Summit Atlas',
    subtitle: 'Hill, mountain & summit discovery',
    icon: summitatlasIcon,
    href: 'https://summitatlas.lovable.app/',
    accent: '--neon-purple',
    featured: false,
    tooltip: 'Summit exploration world',
  },
];

export const featuredProducts = digitalLabProducts.filter(p => p.featured);
export const orbitProducts = digitalLabProducts.filter(p => !p.featured);
