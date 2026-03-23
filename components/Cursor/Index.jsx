"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const cursorWrapper = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // The Wrapper perfectly tracks raw screen coordinates independently of skew physics
    const xTo = gsap.quickTo(cursorWrapper.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorWrapper.current, "y", { duration: 0.1, ease: "power3" });

    // Scale tracking isolated strictly onto the background layer ONLY!
    // This perfectly prevents the text typography from being violently squished by transform matrices!
    const scaleXTo = gsap.quickTo(cursorRef.current, "scaleX", { duration: 0.3, ease: "elastic.out(1, 0.5)" });
    const scaleYTo = gsap.quickTo(cursorRef.current, "scaleY", { duration: 0.3, ease: "elastic.out(1, 0.5)" });
    const rotateTo = gsap.quickTo(cursorRef.current, "rotation", { duration: 0.2, ease: "power3.out" });

    let lastX = 0;
    let lastY = 0;
    let isHovering = false;
    let snapTimeout;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      xTo(x);
      yTo(y);

      const deltaX = x - lastX;
      const deltaY = y - lastY;

      lastX = x;
      lastY = y;

      // Execute continuous massive jelly bounds tracking
      if (isHovering) {
        const velocity = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 100);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        const MathClampLimit = Math.min(velocity / 100, 1);

        const targetScaleX = 1 + (MathClampLimit * 0.8);
        const targetScaleY = 1 - (MathClampLimit * 0.3);

        rotateTo(angle);
        scaleXTo(targetScaleX);
        scaleYTo(targetScaleY);

        if (snapTimeout) clearTimeout(snapTimeout);
        snapTimeout = setTimeout(() => {
          scaleXTo(1);
          scaleYTo(1);
        }, 60);
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      gsap.to(cursorRef.current, { width: 100, height: 100, duration: 0.5, ease: "back.out(1.5)" });
      gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      rotateTo(0);
      scaleXTo(1);
      scaleYTo(1);
      gsap.to(cursorRef.current, { width: 12, height: 12, duration: 0.4, ease: "power3.out" });
      gsap.to(textRef.current, { opacity: 0, scale: 0.5, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let interactables = document.querySelectorAll("a, button, .milestone-card, .hover-expand");

    const observer = new MutationObserver(() => {
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      interactables = document.querySelectorAll("a, button, .milestone-card, .hover-expand");
      interactables.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    // Structurally separating the Text from the GSAP physical wrapper guarantees zero typography distortion natively!
    // Using global static variables automatically mapping strictly against body nodes natively replacing math inversions!
    <div
      ref={cursorWrapper}
      className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[99999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <div ref={cursorRef} className="absolute w-3 h-3 rounded-full custom-cursor-bg shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-colors duration-500"></div>
      <span
        ref={textRef}
        className="absolute custom-cursor-text text-[10px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.2em] opacity-0 pointer-events-none whitespace-nowrap select-none transition-colors duration-500"
      >
        Explore
      </span>
    </div>
  );
}
