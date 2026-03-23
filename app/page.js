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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }

  }, []);

  useEffect(() => {

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    const list = document.querySelectorAll("[data-color]");
    list.forEach(function (e) {
      ScrollTrigger.create({
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
    });

    // 2. Extra safety fallbacks for heavy asynchronous media resolution over sluggish client pipes
    const tc1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const tc2 = setTimeout(() => ScrollTrigger.refresh(), 2000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(tc1);
      clearTimeout(tc2);
    };
  }, []);

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
