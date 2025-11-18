'use client';

import { useEffect } from 'react';

export default function MobileClickSound() {
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0) ||
                     window.innerWidth < 768;

    if (!isMobile) return;

    let audioContext;
    
    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      return audioContext;
    };
    
    const createClickSound = () => {
      const ctx = initAudio();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.06);
    };

    const handleTouch = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.onclick !== null ||
                           target.getAttribute('role') === 'button';
      
      if (isInteractive) {
        try {
          createClickSound();
        } catch (err) {
          console.error('Audio error:', err);
        }
      }
    };

    // Use only touchstart for mobile (not click to avoid double sound)
    document.addEventListener('touchstart', handleTouch);

    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return null;
}
