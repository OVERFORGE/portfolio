"use client";
import React, { useRef, useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Terminal from "./Terminal/Index";
import Preloader from "./Preloader";

gsap.registerPlugin(ScrollTrigger);

export default function MobileLayout() {
  const container = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const lineRef = useRef(null);
  const footerGlowRef = useRef(null);
  const heroRef = useRef(null);
  const craftRef = useRef(null);
  const craftCurtainRef = useRef(null);  // black curtain slides up revealing cyan
  const realCurtainRef = useRef(null);   // cyan curtain slides up revealing salmon
  const timelineCurtainRef = useRef(null); // dark curtain slides up revealing peach
  const footerCurtainRef = useRef(null); // peach curtain slides up revealing dark
  const terminalRef = useRef(null);
  const timelineRef = useRef(null);
  const realRef = useRef(null);
  const footerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [copied, setCopied] = useState(false);

  const craftItems = [
    {
      title: "Life OS",
      description: "A comprehensive life management system built with Next.js and mongoDB. Users can track their goals, habits, finances, and notes.",
      image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><circle cx="50" cy="50" r="40" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="25"/><path d="M50 10v15M50 75v15M10 50h15M75 50h15M22 22l10 10M68 78l10 10M22 78l10-10M68 22l10 10"/><circle cx="50" cy="50" r="10" fill="currentColor"/></svg>`,
      link: "https://life-os-gamma-ten.vercel.app/"
    },
    {
      title: "Token Staking",
      description: "A fully functional token staking application built with Next.js and Solidity. Stake custom tokens to earn rewards and view transaction history.",
      image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M50 10L20 50l30 40 30-40z"/><path d="M50 10v80M20 50l30 15 30-15M20 50l30-15 30 15"/></svg>`,
      link: "https://stoken-dapp.netlify.app/"
    },
    {
      title: "Decentralized Den",
      description: "A Web3 onchain pop-up stay for crypto enthusiasts across the globe around every major web3 conference.",
      image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M15 60L50 20l35 40v30H15z"/><path d="M50 20v70M15 60h70M35 50l15-20 15 20v40H35z"/><circle cx="50" cy="30" r="4" fill="currentColor"/><circle cx="35" cy="50" r="3" fill="currentColor"/><circle cx="65" cy="50" r="3" fill="currentColor"/><circle cx="35" cy="90" r="3" fill="currentColor"/><circle cx="65" cy="90" r="3" fill="currentColor"/></svg>`,
      link: "https://deden.space"
    },
    {
      title: "The Executioners",
      description: "A Web3 growth marketing firm that helps crypto projects scale their user base and engagement through strategic community building.",
      image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M10 90l80-80M90 10v40M90 10H50M20 80l15-15 15 15 35-35"/><circle cx="20" cy="80" r="4" fill="currentColor"/><circle cx="35" cy="65" r="4" fill="currentColor"/><circle cx="50" cy="80" r="4" fill="currentColor"/><circle cx="85" cy="45" r="4" fill="currentColor"/></svg>`,
      link: "https://the-executioners.onrender.com/"
    }
  ];

  const milestones = [
    { year: "Oct 2020 – Jan 2022", title: "Established a Esports Organization", desc: "Founded and scaled a competitive esports organization, managing operations, teams, and community engagement from the ground up." },
    { year: "Mar 2022", title: "Completed 12th Grade", desc: "Completed high school education with a strong focus on mathematics and science, laying the foundation for a technical future." },
    { year: "Feb 2022 – Oct 2024", title: "Transitioned to Web3 Gaming Guild", desc: "Pivoted from a traditional esports org to a full-fledged Web3 Gaming Guild, expanding reach into the decentralized gaming community." },
    { year: "Aug 2022 – Current", title: "Pursuing B.Tech in CS with AI & ML", desc: "Currently pursuing a Bachelor of Technology in Computer Science at Lovely Professional University." },
    { year: "Jan 2025 – Current", title: "Established ExE as Web3 Growth Firm", desc: "Leading the charge in Web3 growth marketing. ExE has evolved into a premier firm specializing in community building and user acquisition." }
  ];

  // --- GSAP Animations ---
  useGSAP(() => {
    // Hamburger menu
    if (menuOpen) {
      gsap.to(menuRef.current, { y: "0%", duration: 0.6, ease: "power4.out" });
      gsap.fromTo(linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.25, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, { y: "-100%", duration: 0.5, ease: "power4.in" });
    }


    // === CURTAIN REVEAL TRANSITIONS ===
    // Pattern: full-height panel inside section, previous section's color,
    // GSAP slides it up (yPercent: 0 -> -100) revealing content beneath.
    // GPU-accelerated transform, zero flicker.

    // 1. Hero → Craft: black curtain slides up revealing cyan
    gsap.to(craftCurtainRef.current, {
      yPercent: -100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: craftRef.current,
        start: "top 75%",
        end: "top 15%",
        scrub: 1.5,
      }
    });

    // 2. Craft → Real Talk: cyan curtain slides up revealing salmon
    gsap.to(realCurtainRef.current, {
      yPercent: -100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: realRef.current,
        start: "top 75%",
        end: "top 15%",
        scrub: 1.5,
      }
    });

    // 3. Terminal → Timeline: dark curtain slides up revealing peach
    gsap.to(timelineCurtainRef.current, {
      yPercent: -100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 75%",
        end: "top 15%",
        scrub: 1.5,
      }
    });

    // 4. Timeline → Footer: peach curtain slides up revealing dark
    gsap.to(footerCurtainRef.current, {
      yPercent: -100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 75%",
        end: "top 15%",
        scrub: 1.5,
      }
    });

    // Timeline draw line
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".mobile-timeline-container",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );

    // Timeline dot pops
    gsap.utils.toArray(".mobile-milestone").forEach((node) => {
      gsap.from(node.querySelector(".mobile-timeline-dot"), {
        scrollTrigger: { trigger: node, start: "top 75%", toggleActions: "play none none reverse" },
        scale: 0, duration: 0.6, ease: "back.out(2)"
      });
      gsap.from(node.querySelector(".mobile-timeline-card"), {
        scrollTrigger: { trigger: node, start: "top 80%", toggleActions: "play none none reverse" },
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out"
      });
    });

    // Footer ambient glow pulse
    if (footerGlowRef.current) {
      gsap.to(footerGlowRef.current, {
        scale: 1.3, opacity: 0.9, duration: 2.5,
        repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }

  }, { scope: container, dependencies: [menuOpen] });

  // Intersection observer for craft card color inversion
  useEffect(() => {
    const scroller = document.querySelector(".craft-scroller");
    if (!scroller) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.getAttribute("data-index") || "0");
          setActiveCard(idx);
        }
      });
    }, { root: scroller, threshold: 0.55 });

    const cards = document.querySelectorAll(".craft-card-snap");
    cards.forEach(c => observer.observe(c));
    return () => cards.forEach(c => observer.unobserve(c));
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText("dakshkaushal@theexecutioners.in");
      } else {
        const ta = document.createElement("textarea");
        ta.value = "dakshkaushal@theexecutioners.in";
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) { console.error(err); }
  };

  // Card inversion — ONLY affects card interior, section bg is always cyan
  const isCraftInverted = activeCard % 2 === 1;
  const cardBg = isCraftInverted ? "rgba(10,10,10,0.85)" : "rgba(255,255,255,0.35)";
  const cardText = isCraftInverted ? "#ededed" : "var(--dcyan)";
  const cardBorder = isCraftInverted ? "rgba(255,255,255,0.2)" : "rgba(10,10,10,0.2)";
  const exploreStyle = {
    border: `1.5px solid ${isCraftInverted ? "#ededed" : "#0a0a0a"}`,
    color: isCraftInverted ? "#ededed" : "#0a0a0a",
    background: "transparent",
  };

  return (
    <div ref={container} className="w-full flex flex-col overflow-x-hidden">
      {/* Preloader */}
      <Preloader />

      {/* GSAP Hamburger Overlay */}
      <div ref={menuRef} className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center" style={{ transform: "translateY(-100%)" }}>
        <div className="absolute top-8 right-6">
          <BiX className="text-5xl text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <div className="flex flex-col items-center gap-10 font-[SansitaBold] text-4xl text-white tracking-wider">
          {["Home", "About", "Projects", "Resume"].map((item, i) => (
            <a key={i} ref={el => linksRef.current[i] = el}
              href={item === "Resume" ? "/assets/resume.pdf" : `/#${item.toLowerCase()}`}
              download={item === "Resume" ? "Resume.pdf" : undefined}
              target={item === "Resume" ? "_blank" : undefined}
              onClick={() => setMenuOpen(false)}
              className="opacity-0"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <div ref={heroRef} className="relative w-full h-[100svh] flex flex-col py-8 px-6 bg-black overflow-hidden" style={{ zIndex: 10 }}>
        <div className="flex justify-end items-center z-20 w-full">
          <BiMenu className="text-4xl text-white z-20 cursor-pointer mix-blend-difference" onClick={() => setMenuOpen(true)} />
        </div>
        <div className="absolute inset-0 w-full h-full z-0">
          <video className="w-full h-full object-cover opacity-75" autoPlay loop muted playsInline src="/assets/video.mp4" />
        </div>
        {/* Gradient fade at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10" style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }} />
        <div className="absolute bottom-10 left-6 z-10 pointer-events-none mix-blend-difference w-3/4">
          <p className="text-xs font-[Sansita] tracking-widest text-white uppercase mb-2 opacity-70">seamless · immersive · built to scale</p>
          <h1 className="text-3xl font-[SansitaBold] text-white tracking-wide uppercase leading-tight">
            I Architect <br /> <span style={{ color: "var(--salmon)" }}>Digital Experiences</span>
          </h1>
        </div>
      </div>

      {/* ═══════════════ CRAFT ═══════════════ */}
      <div
        ref={craftRef}
        className="w-full pt-12 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--cyan)", color: "var(--dcyan)" }}
      >
        {/* Black curtain slides up revealing cyan — GSAP drives yPercent 0→-100 */}
        <div ref={craftCurtainRef} className="absolute inset-0 z-30 pointer-events-none will-change-transform" style={{ backgroundColor: "#0a0a0a" }} />
        <div className="mb-10 px-6">
          <h1 className="font-[SansitaReg] text-5xl leading-tight mb-6">Curated Digital <br /> Web Projects</h1>
          <p className="font-[Sansita] text-base font-medium leading-relaxed opacity-80">
            I specialize in building high-performance web3 fullstack applications using Next.js, Rust, Solidity, and GSAP.
          </p>
        </div>

        {/* Horizontal snap slider */}
        <div className="craft-scroller w-full flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-10" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {craftItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="craft-card-snap flex-shrink-0 snap-center rounded-[2rem] p-7 flex flex-col items-center gap-5 transition-all duration-500"
              style={{
                width: "75vw",
                minWidth: "75vw",
                maxWidth: "75vw",
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                color: cardText,
              }}
            >
              <div className="w-[14vh] h-[14vh]" dangerouslySetInnerHTML={{ __html: item.image }} />
              <div className="font-[Sansita] w-full text-center flex-1">
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm font-medium opacity-75 leading-relaxed">{item.description}</p>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                className="px-8 py-2.5 rounded-full font-bold tracking-widest text-xs uppercase"
                style={exploreStyle}
              >
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ REAL TALK ═══════════════ */}
      <div ref={realRef} className="w-full py-24 px-6 text-[#0a0a0a] flex flex-col gap-0 relative overflow-hidden" style={{ backgroundColor: "var(--salmon)" }}>
        {/* Cyan curtain slides up revealing salmon */}
        <div ref={realCurtainRef} className="absolute inset-0 z-30 pointer-events-none will-change-transform" style={{ backgroundColor: "var(--cyan)" }} />
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-[Sansita] text-xs tracking-[0.4em] uppercase opacity-60 mb-4">Impact & Presence</p>
          <h1 className="font-[SansitaReg] text-6xl leading-[1.05] font-semibold">Real Talk,<br />Real Impact</h1>
          <div className="w-24 h-[2px] bg-[#0a0a0a]/30 mx-auto mt-6" />
        </div>

        {/* Stat cards */}
        {[
          {
            stat: "10+",
            heading: "Global Web3 Conferences",
            sub: "Attended",
            desc: "Connecting with industry leaders across Abu Dhabi, Dubai, Bangalore, and Delhi — building a limitless worldwide network.",
            media: <img src="/assets/img1.png" className="w-full h-full object-cover" alt="conference" />
          },
          {
            stat: "Millions",
            heading: "Social Media Impressions",
            sub: "Generated",
            desc: "Scaling 10+ Web3 brands through high-converting content strategies at The Executioners — reaching millions across platforms.",
            media: <video src="/assets/vid1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          },
          {
            stat: "20+",
            heading: "Full-Stack MVPs Shipped",
            sub: "& DApps Engineered",
            desc: "From 5+ robust freelance contracts to acting as a core founding team member for multiple emerging Web3 brands.",
            media: <img src="/assets/img7.png" className="w-full h-full object-cover" alt="projects" />
          }
        ].map((item, i) => (
          <div key={i} className="mb-10 rounded-[2rem] overflow-hidden" style={{ background: "rgba(10,10,10,0.07)", border: "1px solid rgba(10,10,10,0.12)" }}>
            <div className="h-48 w-full overflow-hidden rounded-t-[2rem]">
              {item.media}
            </div>
            <div className="p-8">
              <h2 className="font-[SansitaBold] text-6xl leading-none mb-1">{item.stat}</h2>
              <h3 className="font-[SansitaReg] text-xl font-bold mb-1">{item.heading}</h3>
              <p className="text-sm font-semibold opacity-60 mb-4 tracking-wide uppercase">{item.sub}</p>
              <p className="font-[Sansita] text-sm leading-relaxed opacity-80">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════ ARSENAL ═══════════════ */}
      <div className="w-full py-24 px-6 bg-black text-white flex flex-col items-start">
        <h1 className="font-[SansitaReg] text-3xl tracking-[0.3em] text-[#aedee0] uppercase opacity-80 drop-shadow-[0_0_20px_rgba(174,222,224,0.3)] mb-16">
          The Arsenal
        </h1>
        <div className="flex flex-col gap-5 w-full border-t border-white/10">
          {["NEXT.JS", "RUST", "SOLIDITY", "C++", "POSTGRES"].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-5 border-b border-white/10">
              <h2 className="font-[SansitaBold] text-5xl text-white/90 leading-none tracking-tight">{item}</h2>
              <span className="text-white/30 font-mono text-xs">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ TERMINAL ═══════════════ */}
      <div ref={terminalRef} className="w-full">
        <Terminal />
      </div>

      {/* ═══════════════ TIMELINE ═══════════════ */}
      <div
        ref={timelineRef}
        className="mobile-timeline-container w-full py-24 px-6 text-[#0a0a0a] relative overflow-hidden"
        style={{ backgroundColor: "#FFC3B0" }}
      >
        {/* Dark curtain slides up revealing peach */}
        <div ref={timelineCurtainRef} className="absolute inset-0 z-30 pointer-events-none will-change-transform" style={{ backgroundColor: "#0a0a0a" }} />
        <p className="font-[Sansita] text-xs tracking-[0.4em] uppercase opacity-60 text-center mb-4">Milestones</p>
        <h1 className="font-[SansitaReg] text-[13vw] text-center font-semibold tracking-tight mb-20 leading-none">
          The Journey
        </h1>

        <div className="relative ml-5 flex flex-col gap-16 pb-10">
          {/* GSAP-drawn tracking line */}
          <div className="absolute top-0 left-[-9px] w-[2px] h-full bg-[#0a0a0a]/10">
            <div ref={lineRef} className="w-full h-full bg-[#0a0a0a] origin-top shadow-[0_0_12px_rgba(0,0,0,0.15)]" style={{ scaleY: 0 }} />
          </div>

          {milestones.map((m, i) => (
            <div key={i} className="mobile-milestone relative pl-8 w-full z-10">
              <div className="mobile-timeline-dot absolute left-[-17px] top-5 w-[14px] h-[14px] rounded-full z-20"
                style={{ background: "#FFC3B0", border: "4px solid #0a0a0a" }}
              />
              <div className="mobile-timeline-card bg-white/40 backdrop-blur-xl rounded-[2rem] p-7 border border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
                <span className="text-[10px] font-bold tracking-[0.25em] opacity-60 block mb-3 uppercase">{m.year}</span>
                <h3 className="font-[SansitaReg] text-xl font-bold tracking-tight mb-3 text-[#0a0a0a]">{m.title}</h3>
                <p className="text-sm font-[Sansita] font-medium leading-relaxed opacity-75">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <div ref={footerRef} className="w-full min-h-[65vh] relative bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-pointer gap-8 py-20" onClick={handleCopy}>
        {/* Peach curtain slides up revealing dark footer */}
        <div ref={footerCurtainRef} className="absolute inset-0 z-30 pointer-events-none will-change-transform" style={{ backgroundColor: "#FFC3B0" }} />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:8vw_8vw] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
        {/* Ambient Glow */}
        <div ref={footerGlowRef} className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,116,108,0.18), transparent 60%)" }}
        />
        {/* Status badge */}
        <div className="z-20 px-5 py-3 rounded-full flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className={`w-2 h-2 rounded-full ${copied ? "bg-green-400" : "bg-[--salmon] animate-pulse"}`}
            style={{ boxShadow: copied ? "0 0 10px rgba(74,222,128,1)" : "0 0 10px rgba(255,116,108,0.8)" }} />
          <span className={`tracking-[0.2em] text-[10px] font-mono uppercase ${copied ? "text-green-400 font-bold" : "text-white/70"}`}>
            {copied ? "Address Copied!" : "Tap anywhere to copy email"}
          </span>
        </div>
        {/* CTA */}
        <div className="z-10 text-center pointer-events-none">
          <h1 className="font-[SansitaBold] text-7xl leading-[0.85] text-white tracking-widest"
            style={{ textShadow: "0 0 80px rgba(255,116,108,0.25)" }}>
            LET'S<br /><span style={{ color: "var(--salmon)" }}>BUILD</span>
          </h1>
        </div>
        {/* Email */}
        <div className="z-20 text-white/40 font-mono tracking-[0.18em] uppercase text-[10px] pointer-events-none">
          dakshkaushal@theexecutioners.in
        </div>
        {/* Links */}
        <div className="absolute bottom-6 flex gap-8 text-white/30 text-[10px] font-sans uppercase tracking-[0.2em] z-20">
          <a href="https://x.com/Dakshkaushaleth" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="hover:text-white transition-colors">X</a>
          <a href="https://www.linkedin.com/in/daksh-kaushal/" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/OVERFORGE" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="hover:text-white transition-colors">Github</a>
        </div>
      </div>
    </div>
  );
}
