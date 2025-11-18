'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
    };

    initScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
