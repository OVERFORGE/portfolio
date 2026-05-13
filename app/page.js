"use client";
import Image from "next/image";
import Homepage from "@/components/Homepage/Index";
import Craft from "@/components/Craft/Index";
import Real from "@/components/Real/Index";
import Arsenal from "@/components/Arsenal/Index";
import Terminal from "@/components/Terminal/Index";
import Timeline from "@/components/Timeline/Index";
import Footer from "@/components/Footer/Index";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor/Index";
import MobileLayout from "@/components/MobileLayout";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const scrollRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Lenis && !isMobile) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    // Ensure the DOM is fully hydrated and not in mobile mode before binding GSAP color triggers natively
    if (!mounted || isMobile) return;

    const list = document.querySelectorAll("[data-color]");
    const triggers = [];

    list.forEach(function (e) {
      const trigger = ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function () {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function () {
          document.body.setAttribute("theme", e.dataset.color);
        },
      });
      triggers.push(trigger);
    });

    // 2. Extra safety fallbacks for heavy asynchronous media resolution over sluggish client pipes
    const tc1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const tc2 = setTimeout(() => ScrollTrigger.refresh(), 2000);

    return () => {
      triggers.forEach(t => t.kill());
      clearTimeout(tc1);
      clearTimeout(tc2);
    };
  }, [mounted, isMobile]);

  if (!mounted) return <Preloader />;

  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <>
      <Preloader />
      <Cursor />
      <div className="section main w-full">
        <Homepage />
        <Craft />
        <Real />
        <Arsenal />
        <Terminal />
        <Timeline />
        <Footer />
      </div>
    </>
  );
}
