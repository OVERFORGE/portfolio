"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Timeline() {
  const container = useRef(null);
  const pathRef = useRef(null);
  const bgRef = useRef(null);

  const milestones = [
    { year: "Oct 2020 - Jan 2022", title: "Established a Esports Organization", desc: "Founded and scaled a competitive esports organization, managing operations, teams, and community engagement.", side: "left" },
    { year: "Mar 2022", title: "Completed 12th Grade", desc: "Completed my high school education with a strong focus on mathematics and science.", side: "right" },
    { year: "Feb 2022 - Oct 2024", title: "Transitioned ExE to Web3 Gaming Guild", desc: "Transitioned from a traditional esports organization to a full-fledged Web3 Gaming Guild, expanding our reach and services to the decentralized gaming community.", side: "left" },
    { year: "Aug 2022 - Current", title: "Persuing B.Tech in Computer Science with AI&ML", desc: "Currently pursuing a Bachelor of Technology in Computer Science at Lovely Professional University, further enhancing my technical expertise and knowledge in the field of computer science.", side: "right" },
    { year: "Jan 2025 - Current", title: "Established ExE as a Web3 Growth Marketing Firm", desc: "Leading the charge in Web3 growth marketing, ExE has evolved into a premier firm specializing in community building, user acquisition, and strategic growth for blockchain projects.", side: "left" },

  ];

  useGSAP(() => {
    // 1. Prominent Section Transition IN: The Ink Drop Wipe!
    gsap.fromTo(bgRef.current, {
      clipPath: "circle(0% at 50% 0%)" // Hidden at the exact center top
    }, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Fire just inside the viewport
        end: "top 0%",    // Complete instantly on reaching standard bounds
        scrub: 1,
      },
      clipPath: "circle(150% at 50% 0%)", // Massive Awwwards radius overflow covering perfectly
      ease: "power2.inOut"
    });

    // 2. Section Transition OUT: Content Fade followed by Background Shrink!
    // Rapidly dissolve all inner timeline content right before the background compresses perfectly
    gsap.to(".timeline-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "bottom 100%", // As soon as the bottom hits the screen
        end: "bottom 30%",    // Fade out extremely fast before the background finishes!
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      ease: "power2.inOut"
    });

    // The entire block organically scales down natively revealing darkness behind it
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "bottom 100%",
        end: "bottom top",
        scrub: 1,
      },
      scale: 0.9,
      borderRadius: "4rem",
      opacity: 0,
      ease: "power2.out"
    });

    // 3. Draw central tracking line
    gsap.fromTo(pathRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );

    // 4. Milestone pops
    gsap.utils.toArray('.milestone').forEach((node) => {
      gsap.from(node.querySelector('.milestone-card'), {
        scrollTrigger: {
          trigger: node,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
      });

      const dot = node.querySelector('.timeline-dot');
      gsap.from(dot, {
        scrollTrigger: {
          trigger: node,
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        backgroundColor: "#0a0a0a",
        duration: 0.6,
        ease: "back.out(2)"
      });
    });

  }, { scope: container });

  return (
    // Replaced the flat bg-gradient fade layer entirely.
    <div ref={container} data-color="black" className="timeline section w-full relative z-20 flex flex-col items-center pt-32 pb-48 bg-transparent">

      {/* High-End GSAP Prominent Pastel Animated Background Module */}
      {/* This DOM node operates completely independently of CSS fades! */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full bg-[#FFC3B0] z-0 transform origin-top will-change-transform"></div>

      {/* Internal Content Wrapper mapped securely to out-fade independently of the structural container */}
      <div className="timeline-content relative z-10 w-full flex flex-col items-center">
        <div className="z-10 relative mb-24 sm:mb-40 text-center pointer-events-none w-full">
          <h1 className="font-[SansitaReg] text-[8vh] sm:text-[15vh] leading-[8vh] sm:leading-[15vh] text-[#0A0A0A] font-semibold tracking-tight">
            The Journey
          </h1>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 z-10">

          {/* The Tracking Matrix Line */}
          <div className="absolute top-0 left-10 sm:left-1/2 sm:-translate-x-1/2 w-[2px] sm:w-[3px] h-full bg-[#0a0a0a]/5 z-0">
            <div
              ref={pathRef}
              className="w-full h-full rounded-full origin-top bg-[#0a0a0a] shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            ></div>
          </div>

          {/* Dynamic Nodes Mapping */}
          <div className="relative w-full flex flex-col gap-[12vh] sm:gap-[18vh]">
            {milestones.map((m, i) => (
              <div key={i} className={`milestone relative w-full flex ${m.side === 'left' ? 'sm:justify-start' : 'sm:justify-end'} justify-start items-center group z-10`}>

                {/* Center Dark Dot tracking the Prominent background natively */}
                <div className="timeline-dot absolute sm:left-1/2 sm:-translate-x-1/2 left-4 -translate-x-[50%] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FFC3B0] border-[4px] border-[#0a0a0a] group-hover:border-[--salmon] shadow-[0_0_20px_rgba(0,0,0,0.2)] z-10 transition-colors duration-500"></div>

                {/* Pure High-End Structural Card */}
                <div className={`milestone-card w-full sm:w-[45%] pl-12 ${m.side === 'left' ? 'sm:pl-0 sm:pr-20' : 'sm:pl-20'}`}>

                  {/* Pearlescent Core Glass framework overlaying pastel hue */}
                  <div className="relative p-8 sm:p-12 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.03)] group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:bg-white/70 overflow-hidden text-[#0a0a0a]">

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#0a0a0a] font-sans text-xs sm:text-sm tracking-[0.2em] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                        {m.year}
                      </span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#0a0a0a]/20 to-transparent"></div>
                    </div>

                    <h3 className="font-[SansitaReg] text-[3vh] sm:text-[4vh] leading-tight mb-3 text-[#0a0a0a] font-bold tracking-tight">
                      {m.title}
                    </h3>

                    <p className="text-[#222] font-sans text-sm sm:text-base leading-relaxed tracking-wide transition-colors duration-500 font-medium opacity-80">
                      {m.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
