"use client";

import React from "react";

function Slider({ gray, images }: any) {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
      <div className="flex w-full items-center justify-center">
        <ul className="relative flex animate-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {images.map((src: string, index: number) => (
            <div key={index} className="relative">
              {gray && (
                <h4 className="h4  text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  3D
                </h4>
              )}
              <li key={index}>
                <img
                  id={`beforeImage${index}`}
                  className={`rounded-3xl ${gray && "grayscale mt-10"}`}
                  src={src}
                  alt="pic"
                />
              </li>
            </div>
          ))}
        </ul>
        <ul className="relative flex animate-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {images.map((src: string, index: number) => (
            <div key={index} className="relative">
              {!gray && (
                <h4 className="h4  text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                  3D
                </h4>
              )}
              <li key={index}>
                <img
                  id={`beforeImage${index}`}
                  className={`rounded-3xl ${gray && "grayscale"}`}
                  src={src}
                  alt="pic"
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
