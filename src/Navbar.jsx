import React, { useState } from "react";



const Navbar =()=>{
    const[nav,setNav]=useState(false)
    const handleclick=()=>setNav(!nav)
    return( <div className="w-screen h-[90px] z-10 bg-[#ffff]-200  drop-shadlow-outline">

    <div className="px-2 flex justify-between items-center w-full h-full">
        <div className=" flex items-center">
            <h1 className="text-3xl font-bold mr-4  sm:texl-4xl mx-4 inline-flex"><svg width="22" height="40"
                    viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.6414 29.5766V11.2269L15.2602 12.443V4.51683L6.73975 0V13.7025L8.49795 13.0727V3.01846L13.4795 5.71118V13.0727L11.8791 13.6591V6.7101L10.1209 5.7329V14.2671L3.38115 16.6992V24.1042L0 22.8882V39.9783H11.8791V30.7709L10.1209 30.1412V38.1759H1.7582V25.342L6.73975 27.1227V34.5494H5.13934V28.3605L3.38115 27.7307V36.3735H8.52049V27.7742L20.2418 31.987V38.1976H15.2602V33.8328L16.8607 34.4191V36.3952H18.6189V33.2248L13.4795 31.3789V33.203V40.0217H22V30.8143L18.6414 29.5766ZM16.8607 28.9468L11.8791 27.1661V19.088L13.4795 18.5016V25.9718L15.2377 26.6015V16.0695L10.0984 17.9153V26.5364L5.1168 24.7557V17.8719L6.71721 17.2856V23.5396L8.47541 24.1694V16.6775L16.8607 13.6808V28.9468Z"
                        fill="#0984E3" />
                </svg>
                <h2 className="mx-4 font-Roboto">DreamHome</h2>
            </h1>
        </div>
        <div className="text-right">
            <div className="inline-flex text-right pr-4">
                <ul className="inline-flex pr-4 text-right">
                    <li className="pr-4 text-right">Home</li>
                    <li className="pr-4 text-right">Property</li>
                    <li className="pr-4 text-right"> Blogs</li>
                    <li className="pr-4 text-right">Agents</li>
                    <li className="pr-4 text-right">FAQS</li>
                    <li className="pr-4 text-right">Contact Us</li>
                </ul>
            </div>
        </div>
    </div>

    
</div>
        
    )
}
export default Navbar;
