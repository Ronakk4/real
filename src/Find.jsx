import React from "react";
import los from'./los.png'
import ny from './ny.png';
import sa from './sa.png';
import sf from './sf.png';
import lv from "./lv.png";
import manh from './manh.png';

const Find=()=>{
    return(
        <div className="w-scren h-[700px]">
            <div className="">
                <ul className="flex-inline text-center">
                    <h1 className="text-3xl font-bold">Find Properties In These Cities</h1>
                    <p className="my-2">There are many variations of passages of Lorem Ipsum available </p>
                    <p className> but the this in majority have suffered alteration in some</p>

                </ul>

                <div className="my-8">

                    <ul className="flex items-center text-center   ">
                        <li className="object-cover w-[300px] h-[200px]">
                            <div style={{background:`url(${los})`}}  className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2"> Los Angeles</p>
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className="object-cover w-[300px] h-[200px] px-4">
                            <div style={{background:`url(${ny})`}} className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2"> New York</p>
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className="object-cover w-[300px] h-[200px] px-4">
                            <div style={{background:`url(${sa})`}} className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2"> San Antonio</p>
                                    </h1>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="my-8">

                    <ul className="flex items-center">
                        <li className="object-cover w-[300px] h-[200px]">
                            <div style={{background:`url(${sf})`}} className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2"> San Francisco</p>
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className="object-cover w-[300px] h-[200px] px-4">
                            <div style={{background:`url(${lv})`}} className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2">Las Vegas</p>
                                    </h1>

                                </div>
                            </div>
                        </li>
                        <li className="object-cover w-[300px] h-[200px] px-4">
                            <div style={{background:`url(${manh})`}} className="object-fit w-full h-full">
                                <div className="bg-black opacity-80 w-full h-full">
                                    <h1 className="text-center py-24 px-4 flex items-center text-white"><svg width="19"
                                            height="24" viewBox="0 0 19 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.5 0C4.25303 0 0 4.08784 0 9.12969C0 12.1226 3.34721 17.8046 6.06775 21.9285C7.88986 24.6905 11.1101 24.6905 12.9323 21.9285C15.6528 17.804 19 12.1226 19 9.12969C19 4.08725 14.747 0 9.5 0ZM9.5 13.423C6.891 13.423 4.77557 11.3901 4.77557 8.88275C4.77557 6.37544 6.891 4.34248 9.5 4.34248C12.109 4.34248 14.2244 6.37544 14.2244 8.88275C14.2244 11.3901 12.109 13.423 9.5 13.423Z"
                                                fill="white" className=" px-2" />
                                        </svg>
                                        <p className="px-2"> San Bernardino</p>
                                    </h1>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center ">
                    <button className="w-[202px] h-[62px] bg-[#0984E3] text-white">See more cities</button>
                </div>
            </div>


        </div>
    )

}
export default Find;