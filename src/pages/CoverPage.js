import React from "react";
import { Link } from "react-router-dom";

export default function CoverPage() {
  return (
   <>
    <div className="top-0 coverimg"></div> 
     <div class="content">
      <div className="marceline">
        <p align="center">
         <img
            src="https://user-images.githubusercontent.com/80174214/147950792-fbd3df37-5ea9-454b-81c9-2cc82f7e00f1.gif"
            width="75%"
            alt="Floating Marceline is my persona"
         />
        </p>
      </div>
       <div align="center">
       <div className="introdiv flex flex-wrap items-center justify-center rounded">
        <p align="center" className="mb-8 ml-8 mr-8 w-full leading-relaxed lg:text-2xl" id="desc">
          Hello, thanks for visiting Abhilipsa's portfolio website. Click below to enter.
       </p>
       <div
          className="inline-flex bg-black border-0 py-2 px-6 focus:outline-none !hover:bg-pink-600 rounded text-lg" 
       > 
       <p className="text-white text-1xl font-extrabold inline-block" id="workwithme">
        <Link to="/Home/About"> Welcome </Link> 
       </p>
       </div>
       <br />
      </div>
      </div>
      <br />
      <br />
     </div>
   </>
  );
}
