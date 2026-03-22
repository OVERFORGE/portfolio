import { useRef } from "react"
import { gsap } from "gsap"
import { Power2 } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger);


const Real = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".real",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
        tl.to(".slide", {
            xPercent: -300,
            ease: Power2,
        });
        tl.to(".image7", {
            opacity: 0,

        });
    }, container)

    return (
        <div ref={container} data-color="salmon" className="real section sm:w-full px-8 sm:px-8 mt-32">
            <div className="cont h-[400vh] relative">
                <div className="slides w-full h-[130vh] overflow-hidden sticky top-0 left-0 flex">
                    <div className="slide w-full flex sm:flex items-center justify-center h-screen flex-shrink-0">
                        <div className="text1 font-[SansitaReg] text-[7vh] leading-[8vh] sm:text-[15vh] sm:leading-[18vh] ">
                            <h1 className="">
                                Real Talk,
                            </h1>
                            <h1 className="">
                                Real Impact
                            </h1>
                        </div>
                        <div className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5 top-1/2 sm:-translate-y-1/2 translate-x-1/2 right-0">
                            <img src="img1" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                    </div>
                    {/* 2nd slide */}

                    <div className="slide w-full flex sm:flex items-center justify-center h-screen flex-shrink-0 relative">

                        <div className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10  -translate-y-1/2 right-1/6 top-1/2 sm:-translate-y-1/2 translate-x-1/2 right-0">
                            <img src="img2" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">
                            <h3 className="font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight text-[2.2vh] sm:absoute top-0 left-0 z-[3] -translate-y-2/3 sm:-translate-y-1/2 -translate-x-1/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nemo consectetur numquam eaque, quis quisquam dolore maxime illo esse voluptate inventore repudiandae. Obcaecati laboriosam ipsam sed eum hic facere! Earum.</h3>
                        </div>
                    </div>

                </div>
            </div>
            <h1>Real</h1>
        </div>
    )
}

export default Real