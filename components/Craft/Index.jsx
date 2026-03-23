import Card from "../Card";
import Button from "../Button";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);


const Craft = () => {
    const container = useRef(null);
    const textRef = useRef();

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".texthead")
        const characters = para.textContent.split("");
        characters.forEach(function (elem) {
            if (elem == " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${elem}</span>`
        })
        para.innerHTML = clutter;
        gsap.set('.texthead span', { display: 'inline-block' });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.ltext',
                start: 'top 100%',
                end: 'bottom 50%',
                scrub: 0.5,
            }
        });
        tl.from('.texthead span', {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        })
    }, []);

    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {


            gsap.fromTo('.card', {
                y: 900,
            }, {
                y: 0,
                scrollTrigger: {
                    trigger: '.card-container',
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            });


            gsap.utils.toArray('.card-wrapper').forEach((wrapper) => {
                const card = wrapper.querySelector('.card');
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: 'top 40%',
                        toggleActions: 'play none none reverse',
                    }
                });

                tl.fromTo(card, {
                    width: "25vw",
                }, {
                    width: "35vw",
                    duration: 0.5,
                    ease: Power4,
                    transformOrigin: "bottom 50%",
                }, 0);
                tl.fromTo(card, {
                    backgroundColor: "var(--cyan)",
                    color: "black",
                }, {
                    backgroundColor: "var(--black)",
                    color: "var(--cyan)",
                    duration: 0.05,
                    ease: "none",
                }, 0.2);
            });


            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1000);

        });
    }, container)

    return (
        <div data-color="cyan" className="craft section w-full sm:flex gap-x-40 justify-between items-start py-8 sm:px-10 relative ">
            <div className="ltext sm:sticky sm:top-[25vh] self-start left-0 sm:w-1/2">
                <p className="ptag font-[Sansita] text-[2.6vh] sm:text-[2.9vh] font-medium leading-[4.4vh] sm:leading-[4.2vh]">
                    I specialize in building high-performance web3 fullstack applications using modern technologies like Next.js, Rust, Solidity, and GSAP. My focus is on creating smooth, interactive user experiences that perfectly balance stunning aesthetics with robust engineering.
                </p>
                <h1 className="texthead font-[SansitaReg] text-[5vh] leading-[6vh] sm:text-[9.8vh] sm:leading-[12vh] mt-10 mb-10">
                    Curated Digital
                    Web Projects
                </h1>
                <Button bgColor="bg-none" text="ALL PROJECTS" />
            </div>
            <div ref={container} className="right-cards sm:w-1/2 flex items-center justify-center">
                <Card />
            </div>
        </div>
    )
}

export default Craft