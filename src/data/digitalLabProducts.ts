import { Bot, UtensilsCrossed, ShoppingBag, BookOpen, User, Swords, Heart, Wrench, Store, GraduationCap, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface DigitalLabProduct {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  href: string;
  accent: string;
  featured: boolean;
}

export const digitalLabProducts: DigitalLabProduct[] = [
  // ── Featured (shown in ProjectsSection) ──
  {
    id: 'promptnovaai',
    name: 'PromptNovaAI',
    subtitle: 'AI-powered prompt & tool platform',
    icon: Bot,
    href: 'https://promptnovaai.lovable.app/',
    accent: '--neon-cyan',
    featured: true,
  },
  {
    id: 'mache-bhate',
    name: 'মাছে ভাতে বাঙ্গালী',
    subtitle: 'Traditional Bengali Food Website',
    icon: UtensilsCrossed,
    href: 'https://xn--r5bdf0b1bef2b3gccc1a2gd3h.xn--45bl4db.xn--54b7fta0cc/',
    accent: '--neon-orange',
    featured: true,
  },
  {
    id: 'nasrushop',
    name: 'NasruShop',
    subtitle: 'Modern AI e-commerce',
    icon: ShoppingBag,
    href: 'https://nasrushop.lovable.app',
    accent: '--neon-cyan',
    featured: true,
  },

  // ── Orbit + Popup only ──
  {
    id: 'studyflowai',
    name: 'StudyFlowAI',
    subtitle: 'AI-driven study companion',
    icon: GraduationCap,
    href: 'https://studyandcareer-ai.lovable.app/',
    accent: '--neon-blue',
    featured: false,
  },
  {
    id: 'nasrutools',
    name: 'NasruTools',
    subtitle: 'AI-powered utility tools',
    icon: Wrench,
    href: 'https://nasrutools.lovable.app',
    accent: '--neon-purple',
    featured: false,
  },
  {
    id: 'nasrustore',
    name: 'Nasru Store',
    subtitle: 'Curated products & collections',
    icon: Store,
    href: 'https://nasrustore.netlify.app/#',
    accent: '--neon-orange',
    featured: false,
  },
  {
    id: 'cricketn',
    name: 'Cricket N',
    subtitle: 'Live cricket experience',
    icon: Trophy,
    href: 'https://cricketnasrumade.lovable.app/',
    accent: '--neon-blue',
    featured: false,
  },
  {
    id: 'warchronicles',
    name: 'War Chronicles',
    subtitle: 'Strategic warfare experience',
    icon: Swords,
    href: '#',
    accent: '--neon-purple',
    featured: false,
  },
  {
    id: 'jibonflow',
    name: 'JibonFlow | জীবনফ্লো',
    subtitle: 'Life management platform',
    icon: Heart,
    href: '#',
    accent: '--neon-cyan',
    featured: false,
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    subtitle: 'Interactive AI portfolio',
    icon: User,
    href: 'https://mdnasrullah.pro.bd/',
    accent: '--neon-blue',
    featured: false,
  },
  {
    id: 'literaria',
    name: 'Literaria',
    subtitle: 'Writers & literature platform',
    icon: BookOpen,
    href: 'https://literariahub.lovable.app/',
    accent: '--neon-cyan',
    featured: false,
  },
];

export const featuredProducts = digitalLabProducts.filter(p => p.featured);
export const orbitProducts = digitalLabProducts.filter(p => !p.featured);
