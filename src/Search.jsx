import React from "react";
import art from "./art.png";


const Search =()=>{
    return(
        <div class="w-screen h-screen bg-no-repeat bg-cover" style={{background:`url(${art})`}}>
        <h1 class="text-5xl text-white font-bold text-center top-96 py-8 ">Find Your Dream Properties </h1>

        <div class="bg-white my-8  w-[920px] mx-20">
            <ul class="mx-4">
                <li>
                    <h3 class="text-2xl  mx-4 py-4">Search Your Properties</h3>
                </li>
                {/* <li class="mx-4"><svg width="43" height="4" viewBox="0 0 43 4" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="43" height="4" fill="#0984E3" />
                    </svg>
                </li> */}
            </ul>
            <div class="py-6 mx-8">
                <ul class="flex justify-between">
                    <li>Looking For</li>
                    <li>property size</li>
                    <li>Property Location</li>
                </ul>
            </div>
            <div class="py-2 mx-4">
                <form>
                    <ul class="flex justify-between">

                        <li>
                            <select>
                                <option selected="selected" disabled="true">Property Type</option>
                            </select>


                        </li>
                        <li><select>
                                <option selected="selected" disabled="true">Type Location</option>
                            </select></li>
                        <li><select>
                                <option selected="selected" disabled="true">Type Location</option>
                            </select></li>



                    </ul>
                </form>
            </div>
            <div class="flex justify-center py-4 ">
                <button type="submit"
                    class="bg-[#0984E3] text-white border-radius-[2px] w-[142px] h-[42px]">Search</button>
            </div>


        </div>

    </div>
        
    )
}
export default Search;
