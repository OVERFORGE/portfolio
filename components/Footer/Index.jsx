"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const container = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    // 1. Restore Reverse-Magnetic Cursor Tracking
    // When the mouse goes right, the text physically pulls to the left!
    const xTo = gsap.quickTo(textRef.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(textRef.current, "y", { duration: 0.8, ease: "power3" });
    
    // The ambient glowing background inherits a thicker, lazier reverse track
    const glowXTo = gsap.quickTo(glowRef.current, "x", { duration: 1.2, ease: "power2.out" });
    const glowYTo = gsap.quickTo(glowRef.current, "y", { duration: 1.2, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance relative to dead center
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Invert the tracking metric dynamically 
      xTo(distanceX * -0.15); 
      yTo(distanceY * -0.15);
      
      glowXTo(distanceX * -0.1);
      glowYTo(distanceY * -0.1);
    };

    const handleMouseLeave = () => {
      // Snap both elements beautifully back to dead center smoothly!
      xTo(0);
      yTo(0);
      glowXTo(0);
      glowYTo(0);
    };

    const el = container.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    // Phenomenal Awwwards 'Curtain Reveal' Parallax Expansion!
    // As the dark Footer touches the bottom of the screen against the bright Timeline layer,
    // it physically swells outward geometrically like a swelling liquid drop, instantly solving the structural border!
    gsap.from(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",    // Fired precisely on boundary collision
        end: "center center",   // Resolves into full-screen width completely 
        scrub: 1,
      },
      clipPath: "ellipse(20% 0% at 50% 100%)", // Crushed dynamically into a tiny bottom bead!
      ease: "power2.inOut"
    });

    // Deep Z-axis Text Parallax pulling the content elegantly up through the floor
    gsap.from(".footer-parallax", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
      y: 150,
      scale: 0.85,
      opacity: 0,
      ease: "power3.out"
    });
  }, { scope: container });

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@theexecutioners.in");
    setCopied(true);
    
    // Satisfying elastic impact animation on click!
    gsap.fromTo(textRef.current, 
      { scale: 0.9 },
      { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.3)" }
    );
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Inline clipPath ensures it compiles properly onto the raw DOM block before GSAP mounts
    <div ref={container} data-color="black" className="footer section w-full min-h-screen relative bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-pointer group" onClick={handleCopy} style={{ clipPath: "ellipse(150% 150% at 50% 50%)" }}>
      
      {/* Premium Web3 Tech Grid Background pushing insane depth behind the pure darkness */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4vw_4vw] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      {/* Dynamic Background Ambient Hover Glow mapping strictly to the cursor flow implicitly */}
      <div ref={glowRef} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,116,108,0.04),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(255,116,108,0.15),transparent_50%)] transition-colors duration-700 pointer-events-none z-0 will-change-transform"></div>

      {/* High-Fidelity Floating Glassmorphism Status Badge */}
      <div className="footer-parallax absolute top-[15%] sm:top-[20%] text-center transform transition-all group-hover:-translate-y-2 z-20">
         <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 shadow-[0_0_30px_rgba(255,116,108,0.05)] group-hover:border-white/20 transition-all hover:scale-105 duration-300">
            {/* Realtime Socket Indicator Dot */}
            <div className={`w-2 h-2 rounded-full ${copied ? 'bg-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,1)]' : 'bg-[--salmon] animate-pulse drop-shadow-[0_0_10px_rgba(255,116,108,0.8)]'}`}></div>
            <span className={`tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-mono uppercase transition-colors ${copied ? 'text-green-400 font-bold' : 'text-white/80'}`}>
              {copied ? "Address Copied!" : "Click anywhere to copy email"}
            </span>
         </div>
      </div>

      {/* Massive Brutalist Parallax Text structurally decoupled for Z-axis immersion */}
      <div ref={textRef} className="footer-parallax z-10 text-center pointer-events-none will-change-transform">
         <h1 className="font-[SansitaBold] text-[15vw] leading-[0.8] text-white tracking-widest sm:tracking-tighter drop-shadow-[0_0_80px_rgba(255,116,108,0.15)] group-hover:drop-shadow-[0_0_120px_rgba(255,116,108,0.3)] transition-shadow duration-500">
            LET'S <br className="sm:hidden" />
            <span className="text-[--salmon]">BUILD</span>
         </h1>
      </div>

      {/* Ambient Email Label hovering explicitly within the visual layout frame */}
      <div className="footer-parallax absolute bottom-[25%] sm:bottom-[30%] text-white/50 font-sans tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm z-20 pointer-events-none mix-blend-screen group-hover:text-white transition-colors duration-500">
          hello@theexecutioners.in
      </div>

      {/* Bottom Legal / Links upgraded with architectural line breaks */}
      <div className="absolute bottom-6 sm:bottom-10 w-full px-8 sm:px-16 flex flex-col z-20">
         <div className="w-full h-[1px] bg-white/10 mb-4 sm:mb-6"></div>
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[9px] sm:text-xs font-sans uppercase tracking-[0.2em]">
            <div className="hover:text-white transition-colors cursor-crosshair">© 2026 The Executioners. All Rights Reserved.</div>
            <div className="flex gap-6 sm:gap-10">
               <a href="#" className="hover:text-[--salmon] transition-colors cursor-pointer pointer-events-auto">Twitter</a>
               <a href="#" className="hover:text-[--salmon] transition-colors cursor-pointer pointer-events-auto">LinkedIn</a>
               <a href="#" className="hover:text-[--salmon] transition-colors cursor-pointer pointer-events-auto">Github</a>
            </div>
         </div>
      </div>

    </div>
  );
}
