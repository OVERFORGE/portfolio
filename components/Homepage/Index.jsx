"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useGSAP } from '@gsap/react';
import { Power2, Power4 } from "gsap";

import { BiMenu } from "react-icons/bi";
import Row from '../Row';
import styles from "./Style.module.css";


gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const container = useRef(null);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    gsap.set(".slidesm", { scale: 5 });
    var clutter = '';
    const para = document.querySelector(".toptext");
    const characters = para.textContent.split("");
    characters.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    para.innerHTML = clutter;
    gsap.set(".toptext span", { opacity: 1 });
    gsap.to('.toptext span', {
      scrollTrigger: {
        trigger: ".home",
        start: "top 50%",
        end: "bottom 90%",
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.03,
    })
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
    tl.fromTo(".vdodiv", {
      clipPath: "circle(100% at 50% 50%)",
    }, {
      clipPath: "circle(0% at 50% 50%)",
      ease: Power4,

    }, "start");

    tl.to(".slidesm", {
      scale: 1,
      ease: Power2,

    }, "start");
    tl.to(".lft", {
      xPercent: -10,
      stagger: 0.3,
      ease: Power4,
      duration: 1,
    }, "start");
    tl.to(".rgt", {
      xPercent: 10,
      stagger: 0.3,
      ease: Power4,
      duration: 1,
    }, "start");
  }, container)

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    console.log(previous, latest);
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  })
  return (
    <div ref={container} data-color="black" className='home section w-full h-[200vh] relative'>
      <div className='w-full sticky top-0 left-0'>
        <motion.div variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]">
          <div className='w-full flex sm:flex items-center justify-end'>
            <div className='hidden md:flex gap-2 items-center z-[9] cursor-pointer'>
              {["Home", "About", "Projects", "Resume"].map((e, i) => (
                <div key={i} className="group relative px-[2.2vh] py-[2.4vh] cursor-pointer">
                  <a 
                    href={e === "Resume" ? "/assets/resume.pdf" : `/#${e.toLowerCase()}`}
                    download={e === "Resume" ? "Resume.pdf" : undefined}
                    target={e === "Resume" ? "_blank" : undefined}
                    className="h-[2.5vh] relative flex font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]"
                  >
                    {e.split("").map((char, index) => (
                      <span key={index} className="relative inline-block transition-transform duration-[0.6s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full" style={{ transitionDelay: `${index * 0.03}s` }}>
                        <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
                        <span className="inline-block absolute top-full left-0">{char === " " ? "\u00A0" : char}</span>
                      </span>
                    ))}
                  </a>
                </div>
              ))}
            </div>
            <BiMenu style={{
              fontSize: "5.5vw"
            }}
              className='inline-block sm:hidden z-[9] cursor-pointer' />
          </div>
        </motion.div>
        <div className='btmtext absolute z-[4]  bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48'>
          <h1 className='sm:text-[2vh] font-semibold tracking-wide'>
            I Architect Digital Experiences
          </h1>
        </div>

        <div className={`vdodiv w-full h-screen absolute z-[3] top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}>
          <video className='absolute w-full h-screen object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' autoPlay loop muted src="/assets/video.mp4" ></video>
        </div>

        <div className='marqueecontainer w-full h-screen relative overflow-hidden'>
          <div className='heading absolute top-[12%] sm:top-[7%] left-1/2 '>
            <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center whitespace-nowrap -translate-x-1/2'>
              seamless, immersive, and built to scale
            </h2>
          </div>
          <div className='slidesm absolute scale-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]'>
            <div className="row">
              <Row translateClass="-translate-x-1/2" direction="lft" />
              <Row translateClass="-translate-x-2/3" direction="rgt" />
              <Row translateClass="-translate-x-1/4" direction="lft" />
              <Row translateClass="-translate-x-1/3" direction="rgt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage