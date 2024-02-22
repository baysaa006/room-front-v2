"use client";

import React from "react";

function Slider({ images }: any) {
  return (
    <div className="flex w-full items-center justify-center">
      <ul className="relative flex  animate-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {images.map((src: any, index: number) => (
          <div key={index} className="relative ">
            <h4 className="h4   text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
              {src.title}
            </h4>
            <li key={index}>
              <img
                id={`beforeImage${index}`}
                className={`rounded-3xl  h-[260px]`}
                src={src.image}
                alt="pic"
              />
            </li>
          </div>
        ))}
      </ul>
      <ul className="relative flex items-center animate-scroll  justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {images.map((src: any, index: number) => (
          <div key={index} className="relative ">
            <h4 className="h4  text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
              {src.title}
            </h4>
            <li key={index}>
              <img
                id={`beforeImage${index}`}
                className={`rounded-3xl  h-[260px]`}
                src={src.image}
                alt="pic"
              />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
