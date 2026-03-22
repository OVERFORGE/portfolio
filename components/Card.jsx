function Card() {
    const items = [
        {
            title: "asdfasdf",
            description: "asdgadgadfgadfgadfg",
            image: "ddsfsdfs",
            link: "sdfsdf"
        },
        {
            title: "asdfasdf",
            description: "asdgadgadfgadfgadfg",
            image: "ddsfsdfs",
            link: "sdfsdf"
        },
        {
            title: "asdfasdf",
            description: "asdgadgadfgadfgadfg",
            image: "ddsfsdfs",
            link: "sdfsdf"
        },
        {
            title: "asdfasdf",
            description: "asdgadgadfgadfgadfg",
            image: "ddsfsdfs",
            link: "sdfsdf"
        }
    ]
    return (
        <div className="card-container flex sm:flex-col items-center gap-10 mt-20">
            {items.map((item, index) => {
                return (
                    <div key={index} className="card-wrapper w-full relative">
                        <div className="card mx-auto min-w-[40vh] sm:w-[30vw] sm:flex items-center gap-6 border-[1px] border-[--black] py-8 px-8"
                        >
                            <div className="rightdata w-[10vh] sm:w-[28vh] sm:h-[10vh]" dangerouslySetInnerHTML={{ __html: item.image }}></div>
                            <div className="font-[Sansita] leftdata">
                                <h1 key={index} className="text-[3vh] font-bold whitespace-nowrap sm:text-[2.8vh] sm:font-bold mb-2 ">{item.title}</h1>
                                <p className="text-[2.2vh] sm:text-[2vh] font-medium ">{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Card