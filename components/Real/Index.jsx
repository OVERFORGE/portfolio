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
                            <h1 className="font-semibold text-[10vh] sm:text-[20vh] leading-none text-white">
                                20.4M
                            </h1>
                            <h3 className="text-[2vh] sm:text-[5vh] font-semibold sm:leading-[7vh]  ">
                                Real people - real lives - we have built products
                            </h3>
                        </div>
                        <div className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh] -translate-x-1/2 sm:top-2/3 sm:left-1/4 -translate-x-1/2 ">
                            <img src="img1" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] first-letter: sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2 translate-y-[20vh] ">
                            <img src="img1" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-1/2 sm:right-0 ">
                            <img src="img1" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                    </div>
                    {/* 3rd slide */}
                    <div className="slide w-full h-screen sm:flex items-center justify-center flex-shrink-0 relative">
                        <div className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-20 sm:-translate-x-1/5 bottom-[20vh] right-[20vh] sm:-translate-y-1/2 sm:right-1/6">
                            <img src="icon2" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">
                            <h3 className="font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight text-[2vh] sm:text-[2.5vh] sm:absoute sm:top-0 sm:left-0 z-[3] -translate-x-1/2 -translate-y-[30vh] sm:-translate-y-1/2 sm:-translate-x-1/3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nemo consectetur numquam eaque, quis quisquam dolore maxime illo esse voluptate inventore repudiandae. Obcaecati laboriosam ipsam sed eum hic facere! Earum.
                            </h3>
                            <h1 className="font-semibold text-[10vh] sm:text-[20vh] leading-none text-white">
                                20.4M
                            </h1>
                            <h3 className="text-[3.5vh] whtiespace-nowrap sm:text-[6vh] font-semibold sm:leading-[6vh]  ">
                                Real people - real lives - we have built products
                            </h3>
                        </div>
                        <div className="image absolute w-[30vh]  sm:w-[60vh] sm:h-[60vh]  translate-y-1/3 bottom-10 right-2/4 sm:-translate-x-1/5 ">
                            <img src="icon1" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="hidden sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3 right-0">
                            <img src="icon3" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                    </div>
                    {/* 4th slide */}
                    <div className="slide w-full h-screen flex sm:flex items-center justify-center relative flex-shrink-0">
                        <div className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2 -translate-y-1/2 right-2/3">
                            <img src="img6" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">

                            <h1 className="font-semibold text-[10vh] sm:text-[20vh] leading-none text-white">
                                20.4M
                            </h1>
                            <h3 className="text-[3.1vh] leading-[3.4vh] sm:text-[6vh] font-semibold sm:leading-[8vh]  ">
                                Real people - real lives - we have built products
                            </h3>
                        </div>
                        <div className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 translate-y-1/2 -translate-x-1/2">
                            <img src="img7" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5 sm:translate-x-2/3 sm:right-0">
                            <img src="img9" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5 -translate-x-1/3 righ-1/4">
                            <img src="img8" alt="" className="w-full h-full object-contain rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Real