import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Sparkles, Bot, Wrench, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useHoverSound from '@/hooks/useHoverSound';
import GradientMesh from '@/components/GradientMesh';
import Particles from '@/components/Particles';

interface ShelfItem {
  name: string;
  emoji: string;
  desc: string;
  url: string;
  category: 'ai' | 'project' | 'experiment';
}

const items: ShelfItem[] = [
  { name: 'PromptNovaAI', emoji: '🤖', desc: 'AI prompt engineering toolkit', url: 'https://promptnovaai.lovable.app/', category: 'ai' },
  { name: 'StudyFlowAI', emoji: '📚', desc: 'AI-driven study companion', url: 'https://studyandcareer-ai.lovable.app/', category: 'ai' },
  { name: 'NasruTools', emoji: '🛠️', desc: 'AI-powered utility tools', url: 'https://nasrutools.lovable.app', category: 'ai' },
  { name: 'NasruShop', emoji: '🛍️', desc: 'Modern AI e-commerce storefront', url: 'https://nasrushop.lovable.app', category: 'project' },
  { name: 'Nasru Store', emoji: '🏪', desc: 'Curated products & collections', url: 'https://nasrustore.netlify.app/#', category: 'project' },
  { name: 'Cricket N', emoji: '🏏', desc: 'Live cricket experience app', url: 'https://cricketnasrumade.lovable.app/', category: 'project' },
  { name: 'মাছে ভাতে বাঙ্গালী', emoji: '🍛', desc: 'Bengali food experience website', url: 'https://xn--r5bdf0b1bef2b3gccc1a2gd3h.xn--45bl4db.xn--54b7fta0cc/', category: 'experiment' },
  { name: 'Literaria', emoji: '📖', desc: 'Writers & literature platform', url: 'https://literariahub.lovable.app/', category: 'experiment' },
];

const categories = [
  { key: 'ai' as const, label: 'AI Tools', icon: Bot },
  { key: 'project' as const, label: 'Projects', icon: Wrench },
  { key: 'experiment' as const, label: 'Experiments', icon: Beaker },
];

const Creations = () => {
  const navigate = useNavigate();
  const { play } = useHoverSound();

  return (
    <div className="min-h-screen relative">
      <GradientMesh />
      <Particles />

      <div className="relative z-10 px-4 py-8 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'hsl(var(--muted) / 0.5)',
              border: '1px solid hsl(var(--neon-cyan) / 0.2)',
            }}
          >
            <ArrowLeft className="w-5 h-5 text-neon-cyan" />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold gradient-text flex items-center gap-2">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neon-cyan" />
              Digital Lab
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">My personal creation shelf — tools, projects & experiments</p>
          </div>
        </motion.div>

        {/* Shelves */}
        {categories.map((cat, ci) => {
          const catItems = items.filter(i => i.category === cat.key);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
              className="mb-10"
            >
              {/* Shelf label */}
              <div className="flex items-center gap-2 mb-4">
                <cat.icon className="w-4 h-4 text-neon-purple" />
                <h2 className="text-sm md:text-base font-bold text-foreground uppercase tracking-widest">{cat.label}</h2>
              </div>

              {/* Shelf */}
              <div
                className="rounded-2xl p-4 md:p-6 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--muted) / 0.3), hsl(var(--background) / 0.5))',
                  border: '1px solid hsl(var(--neon-purple) / 0.1)',
                  boxShadow: '0 8px 30px hsl(0 0% 0% / 0.2), inset 0 -2px 0 hsl(var(--neon-purple) / 0.08)',
                }}
              >
                {/* Shelf edge line */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.2), transparent)' }}
                />
                {/* Shelf bottom reflection */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, hsl(var(--neon-purple) / 0.04), transparent)',
                  }}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {catItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.15 + i * 0.08, duration: 0.4 }}
                      whileHover={{ y: -6, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onMouseEnter={play}
                      className="group block rounded-xl p-4 text-center transition-all duration-300"
                      style={{
                        background: 'linear-gradient(145deg, hsl(var(--muted) / 0.5), hsl(var(--background) / 0.8))',
                        border: '1px solid hsl(var(--neon-purple) / 0.12)',
                        boxShadow: '0 2px 10px hsl(0 0% 0% / 0.15)',
                      }}
                    >
                      <span className="text-3xl md:text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </span>
                      <h3 className="text-xs md:text-sm font-bold text-foreground mb-1 group-hover:text-glow transition-all duration-300 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-muted-foreground mb-2 line-clamp-2">{item.desc}</p>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground mx-auto group-hover:text-neon-cyan transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Creations;
