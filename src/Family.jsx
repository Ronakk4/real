import React from "react";
import fam from './fam.png';

const Family =()=>{

    return(
        <div className="place-content-center p-24">
        <div className="place-content-center">
            <div className="flex p-24 place-content-center">
                <div>
                    <img src={fam} alt="" className="w-[1000px]h-[600px] "/>
                </div>
                <div>
                    <div classNameName="h-[472px] w-[447px];">
                        <h1 className="font-sans font-bold text-3xl p-6 pl-12">Are you Looking for Best Property near you?
                            Contact Us</h1>
                        <h2 className="text-blue-600 font-medium text-2xl pl-12">Who we are</h2>
                        <h3 className="pl-12 p-3">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has normal distribution.</h3>
                        <h3 className="pl-12 p-3">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.</h3>

                    </div>
                </div>

            </div>
            <div className="flex p-24 place-content-center h-[138px]w-[1108px]" >
                <div className="flex">
                    <div>
                        <svg width="3" height="2" viewBox="0 0 3 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54092 0.130859H0.893921V1.83277L2.54092 1.02228V0.130859Z" fill="#0984E3" />
                        </svg>

                    </div>
                    <div  classNameName="w-[288px]">
                        <h1>Buy & Sell Properties</h1>
                        <h2>There are many variations of passages of Lorem Ipsum available but the majority suffered.
                        </h2>
                    </div>
                </div>
                <div className="flex pl-3">
                    <div>
                        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 0C5.00908 0 0.135132 4.87394 0.135132 10.8648C0.135132 18.2996 9.85812 29.2144 10.2721 29.6754C10.6609 30.1085 11.3398 30.1078 11.7279 29.6754C12.1419 29.2144 21.8649 18.2996 21.8649 10.8648C21.8647 4.87394 16.9909 0 11 0ZM11 16.3312C7.98582 16.3312 5.53367 13.879 5.53367 10.8648C5.53367 7.85062 7.98587 5.39848 11 5.39848C14.0141 5.39848 16.4663 7.85068 16.4663 10.8649C16.4663 13.879 14.0141 16.3312 11 16.3312Z"
                                fill="#0984E3" />
                        </svg>

                    </div>
                    <div  className="pl-1 w-[288px]">
                        <h1>Perfect Location</h1>
                        <h2>There are many variations of passages of Lorem Ipsum available but the majority suffered.
                        </h2>
                    </div>
                </div>
                <div className="flex pl-3">
                    <div>
                        <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.281 1.51371C23.5602 0.986365 22.5583 1.09183 21.9607 1.74222L17.156 7.64846C16.822 8.00003 16.1892 8.21096 15.8552 8.21096H11.7595C11.2672 8.21096 10.8806 7.8243 10.8806 7.33206C10.8806 6.83981 11.2672 6.45315 11.7595 6.45315C12.9366 6.45315 14.2399 6.45315 15.2751 6.45315C16.2419 6.45315 17.0329 5.66214 17.0329 4.69534C17.0329 3.72855 16.2419 2.93753 15.2751 2.93753C11.1474 2.93753 15.0847 2.93753 10.6696 2.93753C10.2316 2.93753 10.0132 2.65974 9.66769 2.3574C8.30779 1.13367 6.27225 0.544101 4.21151 1.02176C3.06729 1.28695 2.29567 1.7492 1.5131 2.369L1.48702 2.34785L0.215775 3.46663L5.2117 13.4844H6.69108H15.2751C16.9274 13.4844 18.5095 12.6934 19.4939 11.375L24.6501 3.99222C25.2302 3.21873 25.072 2.09384 24.281 1.51371Z"
                                fill="#0984E3" />
                        </svg>

                    </div>
                    <div  className="pl-1 w-[288px]">
                        <h1>Faster Services</h1>
                        <h2>There are many variations of passages of Lorem Ipsum available but the majority suffered.
                        </h2>
                    </div>
                </div>

            </div>
        </div>
        </div>

    




    )
} 
export default Family;

