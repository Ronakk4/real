import React from "react";
import build from"./build.png";


const Subscribe=()=>{
    return(
        <div className="w-screen h-[200px] " style={{background:`url(${build})`}} >
            <div className="w-screen h-[200px] bg-black opacity-80">
                <div className="px-10 py-10  ">
                    <ul className="flex justify-center text-white text-2xl ">
                        <li>
                            <p>
                                Subscribe Our Email Address

                            </p>
                            <p>
                                For Future Lettest News & Updates
                            </p>
                        </li>

                        <li className="flex justify-center mx-4">
                          <form><label>
    Email:
    <input type="text" name="name" className="mx-4" />
  </label>


                          </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Subscribe;