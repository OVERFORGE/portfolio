"use client";
import Image from "next/image";
import Homepage from "@/components/Homepage/Index";
import Craft from "@/components/Craft/Index";
import Real from "@/components/Real/Index";
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
  }, []);

  return (
    <div className="section main w-full">
      <Homepage />
      <Craft />
      <Real />
    </div>
  );
}
