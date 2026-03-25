import { useCallback, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileTapOptions {
  enableVibration?: boolean;
  vibrationMs?: number;
  enableSound?: boolean;
  soundVolume?: number;
}

const useMobileTap = (options: MobileTapOptions = {}) => {
  const {
    enableVibration = true,
    vibrationMs = 12,
    enableSound = true,
    soundVolume = 0.03,
  } = options;

  const isMobile = useIsMobile();
  const [isPressed, setIsPressed] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTapSound = useCallback(() => {
    if (!enableSound) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(soundVolume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // silent
    }
  }, [enableSound, soundVolume]);

  const triggerVibration = useCallback(() => {
    if (!enableVibration) return;
    try {
      if (navigator.vibrate) {
        navigator.vibrate(vibrationMs);
      }
    } catch {
      // silent
    }
  }, [enableVibration, vibrationMs]);

  const handleTouchStart = useCallback(() => {
    if (!isMobile) return;
    setIsPressed(true);
    playTapSound();
    triggerVibration();
  }, [isMobile, playTapSound, triggerVibration]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobile) return;
    // Small delay so the press visual registers
    setTimeout(() => setIsPressed(false), 150);
  }, [isMobile]);

  // Framer-motion-compatible tap props for mobile only
  const mobileTapProps = isMobile
    ? {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
      }
    : {};

  // Scale style to apply inline when pressed (for non-framer elements)
  const tapStyle = isMobile && isPressed
    ? { transform: 'scale(0.97)', transition: 'transform 0.15s ease' }
    : { transform: 'scale(1)', transition: 'transform 0.15s ease' };

  return { mobileTapProps, tapStyle, isPressed, isMobile };
};

export default useMobileTap;
