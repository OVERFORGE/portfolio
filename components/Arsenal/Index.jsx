"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Arsenal() {
  const container = useRef(null);
  const scaleContainer = useRef(null);
  const trailContainer = useRef(null);

  // We rotate sequentially through the high-end project/web3 images you provided inside the DOM node spawner!
  const images = [
    "/assets/img1.png",
    "/assets/img2.jpeg",
    "/assets/img3.jpeg",
    "/assets/img4.JPG",
    "/assets/img5.png",
    "/assets/img6.png",
    "/assets/img7.png",
    "/assets/bitcoin-btc-logo.png",
    "/assets/ethereum-eth-logo.png"
  ];

  useGSAP(() => {
    // Epic cinematic "Pull-Through" camera entrance securely locked to the viewport!
    // As the bottom of this massive section hits the screen bottom, the parent component PINS in place!
    // The user continues to physically scroll down, but instead of moving down the page, they zoom *into* the container 
    // while the completely unpinned Terminal gracefully slides up underneath it!
    gsap.to(scaleContainer.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "bottom bottom", // Trigger exactly when the section has been fully scrolled!
        end: "+=150vh",       // Add a massive 1.5 screen structural buffer just for the zoom physics
        scrub: 1,
        pin: container.current,  // Lock the user's viewport physically onto the Arsenal block!
        pinSpacing: false,       // CRITICAL: Do NOT push the Terminal down! Let the HTML flow normally so the Terminal crawls up under the fading typography!
      },
      scale: 60,                 // Massively punch out the camera boundaries
      opacity: 0,                // Soft dissolve to cleanly drop the user natively into the CLI
      ease: "power2.in"
    });
  }, { scope: container });

  useEffect(() => {
    let currentIndex = 0;
    let lastPos = { x: 0, y: 0 };
    const distanceThreshold = 60; // Spawns a fluid image every exactly 60px of mouse travel

    // Ultra-fast math evaluating hypotenuse thresholds between raw pointer frames
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const spawnImage = (x, y) => {
      if (!trailContainer.current) return;

      // We bypass React state totally and inject raw DOM nodes for an insane 60+ FPS glitchless framerate.
      const img = document.createElement('img');
      img.src = images[currentIndex % images.length];
      // Inject brutalist shadowing and border radiuses mimicking high-end glass cards
      img.className = "absolute w-[18vh] sm:w-[35vh] h-[25vh] sm:h-[45vh] object-cover rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] pointer-events-none z-50 border border-white/10";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = "translate(-50%, -50%) scale(1) rotate(" + gsap.utils.random(-15, 15) + "deg)"; // Random tilt!

      trailContainer.current.appendChild(img);

      // The structural GSAP fade-out physics mapped per element
      gsap.to(img, {
        scale: 0.5,
        opacity: 0,
        y: "+=150", // Drift downwards lazily like dropping physically
        rotation: "+=" + gsap.utils.random(-20, 20),
        duration: 1.5,
        ease: "power3.out",
        onComplete: () => {
          if (trailContainer.current?.contains(img)) {
            trailContainer.current.removeChild(img);
          }
        }
      });

      currentIndex++;
    };

    const handleMouseMove = (e) => {
      // Map coordinates rigidly relative to the section's position on standard scroll boundaries
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (calculateDistance(lastPos.x, lastPos.y, x, y) > distanceThreshold) {
        spawnImage(x, y);
        lastPos = { x, y };
      }
    };

    const el = container.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Structural Brutalist Text
  const stack = [
    "NEXT.JS", "RUST", "SOLIDITY", "GSAP", "TAILWIND"
  ];

  return (
    // The outer wrapper explicitly maintains `overflow-hidden` to completely mask the inner zooming container.
    <div ref={container} data-color="black" className="arsenal section w-full min-h-[150vh] relative z-20 bg-transparent overflow-hidden sm:cursor-crosshair selection:bg-transparent">
      
      {/* The isolated scale container that rockets into the camera safely out of document bounds! */}
      <div ref={scaleContainer} className="relative w-full h-full min-h-[150vh] flex flex-col items-center justify-center">
        
        {/* Title */}
        <div className="absolute top-[10%] left-6 sm:left-16 z-30 pointer-events-none">
           <h1 className="font-[SansitaReg] text-[4vh] sm:text-[6vh] leading-none text-[#aedee0] font-semibold tracking-widest opacity-80 uppercase drop-shadow-[0_0_20px_rgba(174,222,224,0.3)]">
               The Arsenal
           </h1>
        </div>

        {/* Centerpiece Text Alignment tracking mouse flow directly */}
        <div className="w-full flex flex-col items-center justify-center gap-2 sm:gap-6 z-10 pointer-events-none mix-blend-difference">
           {stack.map((item, i) => (
             <h2 key={i} className="font-[SansitaBold] text-[10vh] sm:text-[20vh] text-[#fff] leading-[0.8] tracking-tighter uppercase whitespace-nowrap opacity-90">
               {item}
             </h2>
           ))}
        </div>

        <div className="absolute bottom-[5%] sm:bottom-[10%] text-center text-white tracking-[0.4em] text-xs font-mono pointer-events-none opacity-40 uppercase">
           Drag Cursor to Illuminate Frameworks
        </div>

        {/* Absolute boundary where raw DOM elements are rapidly constructed by JS and destroyed out of state mapping */}
        <div ref={trailContainer} className="absolute top-0 left-0 w-full h-full pointer-events-none z-40"></div>

      </div>

    </div>
  );
}
