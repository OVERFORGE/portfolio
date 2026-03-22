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

        // Use ease: "none" for perfectly smooth, native-feeling horizontal scrubs
        tl.to(".slide", {
            xPercent: -300,
            ease: "none",
        }, "start");

        // Dramatically increased the parallax velocity offsets using GSAP relative modifiers for heavily visible floating!
        tl.to(".plx-fast", {
            x: "-=120vw",
            ease: "none",
        }, "start");

        tl.to(".plx-slow", {
            x: "+=90vw",
            ease: "none",
        }, "start");
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
                        <div className="image plx-fast absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5 top-1/2 sm:-translate-y-1/2 translate-x-1/2 right-0">
                            <img src="/assets/img1.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    {/* 2nd slide */}

                    <div className="slide w-full flex sm:flex items-center justify-center h-screen flex-shrink-0 relative">

                        <div className="image plx-slow absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-16  -translate-y-1/2 right-1/6 top-1/2 sm:-translate-y-1/2 translate-x-1/12 right-0">
                            <img src="/assets/img2.jpeg" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">
                            <h3 className="font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight text-[2.2vh] sm:absolute sm:top-0 sm:left-0 z-[3] -translate-y-2/3 sm:-translate-y-1/2 sm:-translate-x-1/3">Connecting with industry leaders across Abu Dhabi, Dubai, Bangalore, and Delhi. Building a limitless worldwide network.</h3>
                            <h1 className="font-semibold text-[10vh] sm:text-[20vh] leading-none text-white">
                                10+
                            </h1>
                            <h3 className="text-[2vh] sm:text-[4.5vh] font-semibold sm:leading-[6.5vh] mt-4">
                                Global Web3 Conferences Attended
                            </h3>
                        </div>
                        <div className="image plx-fast absolute w-[12vh] sm:w-[20vh] sm:h-[20vh] -translate-x-1/2 sm:top-2/3 sm:left-1/4 -translate-x-1/2 ">
                            <img src="/assets/bitcoin-btc-logo.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="image plx-slow absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] first-letter: sm:bottom-10 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2 translate-y-[20vh] ">
                            <img src="/assets/img4.JPG" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="image plx-fast absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-2/12 sm:right-0 ">
                            <img src="/assets/img3.jpeg" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    {/* 3rd slide */}
                    <div className="slide w-full h-screen sm:flex items-center justify-center flex-shrink-0 relative">
                        <div className="image plx-fast absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-20 sm:-translate-x-1/5 bottom-[20vh] right-[20vh] sm:-translate-y-1/2 sm:right-1/6">
                            <img src="/assets/img5.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">
                            <h3 className="font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight text-[2vh] sm:text-[2.5vh] sm:absolute sm:top-0 sm:left-0 z-[3] -translate-x-1/2 -translate-y-[30vh] sm:-translate-y-1/2 sm:-translate-x-1/3">
                                Generating millions of impressions and scaling 10+ Web3 brands through high-converting content strategies at The Executioners.
                            </h3>
                            <h1 className="font-semibold text-[10vh] sm:text-[16vh] leading-none text-white tracking-tighter">
                                Millions
                            </h1>
                            <h3 className="text-[2.5vh] sm:text-[4.5vh] font-semibold sm:leading-[6vh] mt-4">
                                Of Social Media Impressions Generated
                            </h3>
                        </div>
                        <div className="image plx-slow absolute w-[30vh]  sm:w-[60vh] sm:h-[60vh]  translate-y-1/3 bottom-10 right-2/4 sm:-translate-x-1/5 ">
                            <video src="/assets/vid1.mp4" autoPlay loop muted className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="hidden plx-fast sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3 right-0">
                            <img src="/assets/img6.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    {/* 4th slide */}
                    <div className="slide w-full h-screen flex sm:flex items-center justify-center relative flex-shrink-0">
                        <div className="hidden plx-slow sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] top-24 translate-x-12/12 -translate-y-1/2 right-2/3">
                            <video src="/assets/vid5.mp4" autoPlay loop muted className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="w-[60%] text-center font-[SansitaReg] relative">
                            <h3 className="font-[Sansita] sm:w-1/3 text-left font-semibold tracking-tight text-[2vh] sm:text-[2.5vh] sm:absolute sm:top-1/4 sm:left-0 z-[3] -translate-x-1/2 -translate-y-[35vh] sm:-translate-y-full sm:-translate-x-1/3">
                                From executing 5+ robust freelance contracts to acting as a core founding team member for 5+ emerging brands.
                            </h3>
                            <h1 className="font-semibold text-[10vh] sm:text-[20vh] leading-none text-white">
                                20+
                            </h1>
                            <h3 className="text-[3.1vh] leading-[3.4vh] sm:text-[4.5vh] font-semibold sm:leading-[5.5vh] mt-4">
                                Full-Stack MVPs Shipped & Real-World Dapps Engineered
                            </h3>
                        </div>
                        <div className="image7 plx-fast absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 translate-y-1/2 -translate-x-1/2">
                            <img src="/assets/img2.jpeg" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="image plx-slow absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5 sm:translate-x-2/3 sm:right-50">
                            <img src="/assets/img7.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="image plx-fast absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5 -translate-x-1/3 righ-1/4">
                            <img src="/assets/ethereum-eth-logo.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Real