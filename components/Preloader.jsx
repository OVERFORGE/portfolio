"use client";
import React, { useRef } from 'react';
import { gsap, Expo, Power4 } from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = () => {
  const container = useRef(null);
  const percentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 0. Initial elegant fade in for the loader elements
    tl.from(".loader-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut,
    });

    // 1. Reveal the loading bar and percentage text dramatically over 2.5 seconds
    tl.to(".loading-bar", {
      width: "100%",
      duration: 2.5,
      ease: Expo.easeInOut, // Super sleek dramatic ease
      onUpdate: function () {
        // This calculates the exact percentage as the bar grows!
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = progress + "%";
        }
      }
    });

    // 2. Shrink the GIF into the center and fade out
    tl.to(".loader-content", {
      scale: 0.85,
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: Power4.easeInOut,
    }, "-=0.2"); 

    // 3. Slide the whole black background up off the screen. 
    // I added a border-radius effect so it acts like a dramatic curtain opening!
    tl.to(container.current, {
      y: "-100%",
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      duration: 1,
      ease: Expo.easeInOut,
    });

  }, { scope: container });

  return (
    <div ref={container} className="fixed top-0 left-0 w-full h-[110vh] bg-[#050505] z-[9999] flex flex-col items-center justify-center pointer-events-none overflow-hidden">
      <div className="loader-content flex flex-col items-center justify-center gap-6 w-full">
        
        {/* GIF container - Made perfectly circular with a subtle glowing luxury border */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-[0_0_40px_rgba(255,116,108,0.4)] bg-black border border-[--salmon] border-opacity-50 flex items-center justify-center overflow-hidden">
          <img src="/assets/preloader.gif" alt="" className="w-[90%] h-[90%] object-cover rounded-full filter opacity-100 mix-blend-screen" />
        </div>
        
        {/* Progress percentage text matching your Sansita font */}
        <div className="text-[--salmon] font-[SansitaReg] text-[3vh] sm:text-[4vh] tracking-widest font-bold mt-4 drop-shadow-[0_0_12px_rgba(255,116,108,0.8)]">
            <span ref={percentRef}>0%</span>
        </div>

        {/* Progress bar container - Modernized, thickened, glowing */}
        <div className="w-56 sm:w-[350px] h-[8px] sm:h-[10px] bg-[#1a1a1a] rounded-full overflow-hidden border border-white/5 mt-2 shadow-[0_0_20px_rgba(255,116,108,0.15)]">
          <div className="loading-bar w-0 h-full bg-[--salmon] rounded-full shadow-[0_0_20px_var(--salmon)] relative">
             {/* Little glowing bright tip inside the bar for extra spice */}
             <div className="absolute right-0 top-0 h-full w-[25px] bg-white opacity-90 blur-[3px]"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Preloader;
