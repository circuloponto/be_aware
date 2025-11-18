'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const lastHoveredElement = useRef(null);

  useEffect(() => {
    // Check if device is mobile/touch device or small screen
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0) ||
                     window.innerWidth < 768; // Also check screen width
      setIsMobile(mobile);
    };
    
    checkMobile();
    
    // Re-check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't initialize cursor on mobile
    if (isMobile) return;
    // Create click sounds using Web Audio API for better quality
    let audioContext;
    
    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      return audioContext;
    };
    
    const createClickSound = (frequency, duration) => {
      const ctx = initAudio();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    };
    
    hoverSoundRef.current = () => createClickSound(1200, 0.04);
    clickSoundRef.current = () => createClickSound(800, 0.06);

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.onclick !== null ||
                           target.getAttribute('role') === 'button';
      
      // Play hover sound when entering interactive element
      const currentElement = isInteractive ? (target.closest('a') || target.closest('button') || target) : null;
      
      if (isInteractive && currentElement !== lastHoveredElement.current) {
        if (hoverSoundRef.current) {
          try {
            hoverSoundRef.current();
          } catch (e) {}
        }
        lastHoveredElement.current = currentElement;
      } else if (!isInteractive) {
        lastHoveredElement.current = null;
      }
      
      setIsHovering(isInteractive);
    };

    const handleClick = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.onclick !== null ||
                           target.getAttribute('role') === 'button';
      
      if (isInteractive && clickSoundRef.current) {
        try {
          clickSoundRef.current();
        } catch (e) {}
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      lastHoveredElement.current = null;
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering, isMobile]);

  // Don't render cursor on mobile
  if (isMobile || !isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Yellow center dot - bigger when not hovering */}
      <div className={`cursor-dot ${isHovering ? 'cursor-dot-small' : 'cursor-dot-large'}`}></div>
      {/* Blue borders only show when hovering */}
      {isHovering && (
        <>
          <div className="cursor-ring cursor-ring-1"></div>
          <div className="cursor-ring cursor-ring-2"></div>
        </>
      )}
    </div>
  );
}
