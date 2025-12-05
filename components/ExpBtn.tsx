'use client';

import Image from "next/image";



const ExpBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => {
            console.log("CLICK");
        }}> <a href="#events">Explore Events</a> <Image src={"/icons/arrow-down.svg"} width={24} height={24} alt="arrow" /> </button>
    )
}

export default ExpBtn
