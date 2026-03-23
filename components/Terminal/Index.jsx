"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MagneticButton = ({ children, onClick }) => {
  const btnRef = useRef(null);
  
  useEffect(() => {
    // Subtle, highly elegant magnetism scaling for a pill-shaped structural button
    const xTo = gsap.quickTo(btnRef.current, "x", { duration: 1, ease: "power3.out" });
    const yTo = gsap.quickTo(btnRef.current, "y", { duration: 1, ease: "power3.out" });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = btnRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const x = clientX - centerX;
      const y = clientY - centerY;
      
      // Strict structural pull limit mimicking Awwwards standards
      xTo(x * 0.15); 
      yTo(y * 0.15);
    };

    const mouseLeave = () => {
      // Smooth reset flow
      xTo(0);
      yTo(0);
    };

    const el = btnRef.current;
    if (el) {
      el.addEventListener("mousemove", mouseMove);
      el.addEventListener("mouseleave", mouseLeave);
    }
    
    return () => {
      if (el) {
        el.removeEventListener("mousemove", mouseMove);
        el.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={btnRef} 
      onClick={onClick}
      className="relative px-8 py-4 sm:px-12 sm:py-5 bg-[#0A0A0A]/50 border border-[--salmon] rounded-full flex items-center justify-center cursor-pointer text-[--salmon] font-sans tracking-[0.2em] font-bold text-[1.2vh] sm:text-[1.5vh] z-30 hover:text-black transition-colors duration-500 overflow-hidden group shrink-0 backdrop-blur-md"
    >
      {/* Sleek Structural Hover Swoosh matching high-end agency designs */}
      <div className="absolute inset-0 bg-[--salmon] translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
      
      <span className="relative z-10 flex items-center justify-center gap-3 w-full">
        {children}
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform -translate-y-[2px] transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </span>
    </div>
  );
};

export default function Terminal() {
  const container = useRef(null);
  const terminalWrapperRef = useRef(null);
  const terminalInnerRef = useRef(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const scrollBodyRef = useRef(null); // Strictly isolates scrolling inside the terminal container!

  const [history, setHistory] = useState([
    { type: "system", content: "Initializing Interactive Resume Matrix..." },
    { type: "system", content: "Connection secured natively." },
    { type: "system", content: "Type 'help' to extract resume data endpoints." }
  ]);
  const [input, setInput] = useState("");

  const commands = {
    help: "Resume Queries: whoami | skills | experience | clear",
    whoami: "Full-stack Web3 developer building seamless, immersive products.",
    skills: "Next.js, React, Rust, Solidity, GSAP, TailwindCSS, Node.js",
    experience: "Scaled 10+ Web3 brands | 20+ shipped MVPs | Millions in generated impressions.",
    clear: "" // Controlled locally by the hook
  };

  useGSAP(() => {
    // 1. Sleek entrance mapping the terminal fading upwards
    // Mathematically isolated onto the inner struct to prevent GSAP property overriding!
    gsap.fromTo(terminalInnerRef.current, 
      { scale: 0.9, opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      }
    );

    // 2. The breathtaking 3D 180-degree flip exit!
    // Safely targeting the massive outer wrapper independently so scaling and opacity don't collide!
    gsap.to(terminalWrapperRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "center center", // Start flipping exactly when it hits the vertical center of the screen
        end: "bottom top",      // Complete the flip as it leaves the top of the viewport
        scrub: 1,
      },
      rotationX: 180,           // Cuberto style 3D flip over the X axis
      scale: 0.4,               // Shrink visually as it rotates away backwards
      opacity: 0,               // Perfectly dissolve into the shadow
      transformOrigin: "bottom center", // Pinched safely to the lower structure
      ease: "none"              // Fixed linear scrub mapping ensures it matches wheel velocity mathematically!
    });

  }, { scope: container });

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let newHistory = [...history, { type: "command", content: `visitor@portfolio:~$ ${input}` }];
      
      if (cmd === 'clear') {
        newHistory = [];
      } else if (commands[cmd]) {
        newHistory.push({ type: "output", content: commands[cmd] });
      } else if (cmd !== "") {
        newHistory.push({ type: "error", content: `bash: ${cmd}: query invalid. Type 'help'.` });
      }
      
      setHistory(newHistory);
      setInput("");
      
      // We explicitly isolate scrolling to the strict internal DOM node!
      // This completely obliterates the "jumping screen" bug caused by standard window.scrollIntoView!
      setTimeout(() => {
        if (scrollBodyRef.current) {
           scrollBodyRef.current.scrollTop = scrollBodyRef.current.scrollHeight;
        }
      }, 10);
    }
  };

  return (
    // Perspective 1500px ensures GSAP mathematically correctly renders deep 3D structural bounds.
    <div ref={container} data-color="black" className="terminal section w-full min-h-[120vh] relative z-20 flex flex-col justify-center items-center pointer-events-none py-40" style={{ perspective: "1500px" }}>
      
      {/* Dynamic Context Header */}
      <div className="z-10 pointer-events-none mix-blend-difference mb-12 sm:mb-20 w-full text-center">
         <h1 className="font-[SansitaReg] text-[6vh] sm:text-[10vh] leading-none text-[#ededed] font-semibold tracking-tight uppercase">
             Interactive <br className="sm:hidden" /> 
             <span className="text-[--salmon] drop-shadow-[0_0_20px_rgba(255,116,108,0.4)]">Resume.</span>
         </h1>
      </div>

      {/* Wrapping the Terminal and Button together seamlessly so they rotate 3D cohesively! */}
      <div ref={terminalWrapperRef} className="w-full flex justify-center will-change-transform z-20 px-6 sm:px-10">
          
          {/* Internal wrapper splitting the GSAP property loads natively avoiding collision overrides */}
          <div ref={terminalInnerRef} className="w-full flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
              
              {/* Extreme Premium Terminal Window Box */}
          <div 
            ref={terminalRef} 
            onClick={() => inputRef.current?.focus()}
            className="w-full sm:w-[50%] h-[50vh] sm:h-[60vh] bg-[#0A0A0A]/50 backdrop-blur-[40px] rounded-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(174,222,224,0.05)] overflow-hidden flex flex-col font-mono text-[1.2vh] sm:text-[1.8vh] relative cursor-text pointer-events-auto hover:border-white/20 transition-colors duration-500"
          >
            {/* Sleek Mac OS Styled Header */}
            <div className="w-full h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-3 shrink-0">
               <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
               <div className="flex-1 text-center text-white/30 text-[1vh] sm:text-[1.2vh] -ml-8 select-none font-bold tracking-[0.2em] font-sans uppercase">Resume_Matrix_Local</div>
            </div>

            {/* Terminal Text Body */}
            {/* The scroll-smooth property and ref strictly handles our custom scroll physics */}
            <div ref={scrollBodyRef} className="p-6 sm:p-10 overflow-y-auto flex-1 text-[--salmon] font-medium leading-loose relative z-10 custom-scrollbar scroll-smooth">
              
              {history.map((line, i) => (
                 <div key={i} className={`mb-4 font-mono tracking-widest text-shadow-sm ${line.type === 'system' ? 'text-[--cyan] opacity-90' : line.type === 'error' ? 'text-red-400' : line.type === 'output' ? 'text-[#e0e0e0]' : 'text-[#888]'}`}>
                   {line.content}
                 </div>
              ))}

              <div className="flex items-center gap-3 mt-6">
                <span className="text-[--salmon] opacity-70 whitespace-nowrap select-none">visitor@portfolio:~$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent outline-none border-none text-[--cyan] shadow-none caret-[--cyan] font-mono tracking-widest w-full font-bold"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* Cuberto Styled Magnetic Resume Download Button */}
          {/* Automatically injects a native browser highly-accessible anchor download! */}
          <a href="/assets/resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer" className="pointer-events-auto shrink-0 outline-none">
             <MagneticButton>
                DOWNLOAD RESUME
             </MagneticButton>
          </a>

          </div>

      </div>

    </div>
  );
}
