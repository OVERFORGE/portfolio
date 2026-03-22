function Card() {
    const items = [
        {
            title: "Life OS",
            description: "A comprehensive life management system built with Next.js and mongoDB. Users can track their goals, habits, finances, and notes, all in one secure and intuitive interface.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><circle cx="50" cy="50" r="40" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="25"/><path d="M50 10v15M50 75v15M10 50h15M75 50h15M22 22l10 10M68 78l10 10M22 78l10-10M68 22l10 10"/><circle cx="50" cy="50" r="10" fill="currentColor"/></svg>`,
            link: "https://life-os-gamma-ten.vercel.app/"
        },
        {
            title: "Token Staking App",
            description: "A fully functional token staking application built with Next.js and Solidity. Users can stake their custom tokens to earn rewards, manage their stakes, and view transaction history.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M50 10L20 50l30 40 30-40z"/><path d="M50 10v80M20 50l30 15 30-15M20 50l30-15 30 15"/></svg>`,
            link: "https://stoken-dapp.netlify.app/"
        },
        {
            title: "Decentralized Den",
            description: "A Web3 onchain pop-up stay for crypto enthusiasts across the globe around every major web3 conferences.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M15 60L50 20l35 40v30H15z"/><path d="M50 20v70M15 60h70M35 50l15-20 15 20v40H35z"/><circle cx="50" cy="30" r="4" fill="currentColor"/><circle cx="35" cy="50" r="3" fill="currentColor"/><circle cx="65" cy="50" r="3" fill="currentColor"/><circle cx="35" cy="90" r="3" fill="currentColor"/><circle cx="65" cy="90" r="3" fill="currentColor"/></svg>`,
            link: "https://deden.space"
        },
        {
            title: "The Executioners ",
            description: "A Web3 growth marketing firm that helps crypto projects scale their user base and engagement.",
            image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full opacity-90"><path d="M10 90l80-80M90 10v40M90 10H50M20 80l15-15 15 15 35-35"/><circle cx="20" cy="80" r="4" fill="currentColor"/><circle cx="35" cy="65" r="4" fill="currentColor"/><circle cx="50" cy="80" r="4" fill="currentColor"/><circle cx="85" cy="45" r="4" fill="currentColor"/></svg>`,
            link: "https://theexecutioners.in"
        }
    ]
    return (
        <div className="card-container flex sm:flex-col items-center gap-10 mt-20">
            {items.map((item, index) => {
                return (
                    <div key={index} className="card-wrapper w-full relative" >
                        <a href={item.link} target="_blank">
                            <div className="card mx-auto min-w-[40vh] sm:w-[30vw] sm:flex items-center gap-6 border-[1px] border-[--black] py-8 px-8"
                            >

                                <div className="rightdata w-[10vh] sm:w-[28vh] sm:h-[10vh]" dangerouslySetInnerHTML={{ __html: item.image }}></div>
                                <div className="font-[Sansita] leftdata">
                                    <h1 key={index} className="text-[3vh] font-bold whitespace-nowrap sm:text-[2.8vh] sm:font-bold mb-2 ">{item.title}</h1>
                                    <p className="text-[2.2vh] sm:text-[2vh] font-medium ">{item.description}</p>
                                </div>

                            </div></a>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Card