import React from "react";
import { Link } from "react-router-dom";

export default function CoverPage() {
  return (
    <div class="top-0">
      <div className="marceline">
        <p align="center">
         <img
            src="https://user-images.githubusercontent.com/80174214/147950792-fbd3df37-5ea9-454b-81c9-2cc82f7e00f1.gif"
            width="75%"
            alt="Floating Marceline is my persona"
         />
        </p>
      </div>
      <br />
        <p align="center" className="mb-8 ml-8 mr-8 w-full leading-relaxed lg:text-2xl" id="desc">
          Hello, welcome to Abhilipsa's portfolio website. Click <Link to="/Home/About">here</Link> to enter.
        </p>
    </div>
  );
}
