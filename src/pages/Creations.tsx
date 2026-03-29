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
              className="mb-12"
            >
              {/* Shelf label */}
              <div className="flex items-center gap-2 mb-5">
                <cat.icon className="w-4 h-4 text-neon-purple" />
                <h2 className="text-sm md:text-base font-bold text-foreground uppercase tracking-widest">{cat.label}</h2>
              </div>

              {/* 3D Shelf */}
              <div className="relative">
                {/* Shelf surface */}
                <div
                  className="rounded-2xl p-5 md:p-7 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--muted) / 0.25), hsl(var(--background) / 0.4))',
                    border: '1px solid hsl(var(--neon-purple) / 0.1)',
                    boxShadow: '0 12px 40px hsl(0 0% 0% / 0.25), inset 0 1px 0 hsl(var(--neon-purple) / 0.06)',
                  }}
                >
                  {/* Shelf wood-grain top edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--neon-purple) / 0.08), hsl(var(--neon-cyan) / 0.12), hsl(var(--neon-purple) / 0.08))',
                    }}
                  />
                  {/* Shelf bottom shadow (3D depth) */}
                  <div
                    className="absolute -bottom-2 left-4 right-4 h-4 rounded-b-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, hsl(0 0% 0% / 0.15), transparent)',
                      filter: 'blur(4px)',
                    }}
                  />
                  {/* Inner reflection */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, hsl(var(--neon-purple) / 0.03), transparent)',
                    }}
                  />
                  {/* Shelf edge highlight */}
                  <div
                    className="absolute bottom-0 left-6 right-6 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.15), transparent)' }}
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
                    {catItems.map((item, i) => (
                      <motion.a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: ci * 0.15 + i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -8, scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onMouseEnter={play}
                        className="group block rounded-xl p-4 md:p-5 text-center transition-all duration-300 relative"
                        style={{
                          background: 'linear-gradient(160deg, hsl(var(--muted) / 0.6), hsl(var(--background) / 0.85))',
                          border: '1px solid hsl(var(--neon-purple) / 0.1)',
                          boxShadow: '0 4px 16px hsl(0 0% 0% / 0.2), 0 1px 3px hsl(0 0% 0% / 0.15)',
                        }}
                      >
                        {/* Hover glow */}
                        <div
                          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          style={{
                            background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.12), transparent 70%)',
                            filter: 'blur(12px)',
                          }}
                        />
                        <span className="text-3xl md:text-4xl block mb-2.5 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                          {item.emoji}
                        </span>
                        <h3 className={`text-xs md:text-sm font-bold text-foreground mb-1 group-hover:text-glow transition-all duration-300 truncate ${/[\u0980-\u09FF]/.test(item.name) ? 'font-bengali' : ''}`}>
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground mb-2.5 line-clamp-2 leading-relaxed">{item.desc}</p>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground mx-auto group-hover:text-neon-cyan transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>
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
