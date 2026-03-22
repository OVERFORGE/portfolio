import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {
    const items = [
        { text: "Founder", image: "/assets/founder.png" },
        { text: "Developer", image: "/assets/developer.png" },
        { text: "Freelancer", image: "/assets/freelancer.png" },
        { text: "Entrepreneur", image: "/assets/entrepreneur.png" },
        { text: "Product Designer", image: "/assets/product_designer.png" },
        { text: "Founder", image: "img7" },
        { text: "Developer", image: "img7" },
        { text: "Freelancer", image: "img7" },
        { text: "Entrepreneur", image: "img7" },
        { text: "Product Designer", image: "img7" },
        { text: "Founder", image: "img7" },
        { text: "Developer", image: "img7" },
        { text: "Freelancer", image: "img7" },
        { text: "Entrepreneur", image: "img7" },
        { text: "Product Designer", image: "img7" },



    ]

    return (
        <div className={`${translateClass} ${direction} row w-full flex items-center gap-8 whitespace-nowrap mb-2 `}>
            {items.map((items, index) => {
                return (
                    <div key={index} className='elem flex items-center gap-8 '>
                        <h1 className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] leading-[6vh] sm:leading-[9vh]'  >
                            {items.text}
                        </h1>
                        <div className='imgdiv w-[5vh] h-[5vh] rounded-full overflow-hidden'>
                            <img src={items.image} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Row.PropTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
}

export default Row;