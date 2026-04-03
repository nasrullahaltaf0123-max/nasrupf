import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  return (
    <motion.button
      onClick={() => setIsLight(!isLight)}
      className="fixed top-5 right-5 z-[200] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: isLight
          ? 'linear-gradient(145deg, #ffffff, #f0f1f5)'
          : 'linear-gradient(145deg, hsl(240 15% 10%), hsl(240 15% 6%))',
        border: isLight
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid hsl(270 80% 53% / 0.15)',
        boxShadow: isLight
          ? '0 2px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)'
          : '0 2px 20px hsl(270 80% 53% / 0.1), 0 0 0 1px hsl(270 80% 53% / 0.05)',
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="w-5 h-5" style={{ color: '#1a1a2e' }} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="w-5 h-5 text-neon-cyan" style={{ filter: 'drop-shadow(0 0 4px hsl(180 100% 50% / 0.5))' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
