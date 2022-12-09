import React from "react";
import ll from "./ll.png"

const Recomend=()=>{
    return(
        <div className="w-screen h-[850px] ">
        <div className="justify-center mx-8 py-8">
            <h1 className="font-medium text-4xl">Recomended For You</h1>
        </div>
        <div className="">
            <ul className="justify-center flex">

                <li>
                    <p>
                        There are many variations of passages of Lorem Ipsum available
                    </p>
<p>
                    but the this in majority have suffered alteration in some
                    </p>
                </li>
                <li><button className="mx-12  bg-[#0984E3]  text-white w-[151px] h-[31px]">See More Property </button>
                </li>
            </ul>
        </div>

        <div className=" my-12">
            <ul className="inline-flex items-center">
                <ul className="mx-12 px-12 mr-5">
                    <li>
                        <h1 className=" text-2xl ">Bravo Apollo Apartments</h1>
                    </li>
                    <li>
                        <h2 className="text-2xl">$3200</h2>
                    </li>
                    <li>
                        <p>There are many variations of passages of Lorem Ipsum available, </p>
                    </li>
                    <li>
                        <p>
                            but the majority have suffered alteration in.</p>
                    </li>

                    <li>
                        <p> some form by injected humour</p>
                    </li>
                </ul>
                <ul className="items-center">
                    <li><img src={ll} alt="Avatar"  className="w-[80]" /></li>
                    <li className="my-4 mx-8  flex justify-center"><svg width="40" height="28" viewBox="0 0 40 28"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.608855 15.5984L0.610724 15.6005L11.4571 27.3425C12.2697 28.2221 13.584 28.2188 14.3928 27.3348C15.2015 26.4509 15.1984 25.0212 14.3858 24.1414L7.10357 16.2581L37.9242 16.2581C39.0707 16.2581 40 15.2471 40 14C40 12.7529 39.0707 11.7419 37.9242 11.7419L7.10367 11.7419L14.3857 3.85858C15.1983 2.97883 15.2014 1.54914 14.3927 0.665221C13.5839 -0.218925 12.2695 -0.221975 11.457 0.657542L0.610617 12.3995L0.608748 12.4016C-0.204233 13.2843 -0.201635 14.7186 0.608855 15.5984Z"
                                fill="#435261" />
                        </svg><svg className="mx-2" width="4" height="30" viewBox="0 0 4 30" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="4" height="30" rx="2" className="mx-4" fill="#435261" />

                        </svg>
                        <svg className="mx-2" width="40" height="28" viewBox="0 0 40 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M39.3911 12.4016L39.3893 12.3995L28.5429 0.657541C27.7303 -0.222088 26.416 -0.218815 25.6072 0.665218C24.7985 1.54914 24.8016 2.97883 25.6142 3.85857L32.8964 11.7419H2.07578C0.929328 11.7419 0 12.7529 0 14C0 15.2471 0.929328 16.2581 2.07578 16.2581H32.8963L25.6143 24.1414C24.8017 25.0212 24.7986 26.4509 25.6073 27.3348C26.4161 28.2189 27.7305 28.222 28.543 27.3425L39.3894 15.6005L39.3913 15.5984C40.2042 14.7157 40.2016 13.2814 39.3911 12.4016Z"
                                fill="#435261" />
                        </svg>


                    </li>
                </ul>
            </ul>
        </div>


    </div>
    

        
    )




} 
export default Recomend;