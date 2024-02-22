"use client";
import Slider from "./slider";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Carousel = () => {
  const before = [
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/4e5cfa4e-8aeb-40cc-a060-3358088c523e.jpg",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/102160463-interior-design-living-room-drawing-3d-illustration.jpg",
      title: "Sketch",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/4e5cfa4e-8aeb-40cc-a060-3358088c523e.jpg",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/interior-design-living-room-custom-drawing-MXPKXK.jpg",
      title: "Sketch",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/4e5cfa4e-8aeb-40cc-a060-3358088c523e.jpg",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/102160463-interior-design-living-room-drawing-3d-illustration.jpg",
      title: "Sketch",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/4e5cfa4e-8aeb-40cc-a060-3358088c523e.jpg",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/102160463-interior-design-living-room-drawing-3d-illustration.jpg",
      title: "Sketch",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/4e5cfa4e-8aeb-40cc-a060-3358088c523e.jpg",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/102160463-interior-design-living-room-drawing-3d-illustration.jpg",
      title: "Sketch",
    },
  ];

  const after = [
    {
      image:
        "https://s3.ap-southeast-1.amazonaws.com/dev-room-images/images/1700667540958.png",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/replicate-prediction-g4hmmrrbeu2ir2ae252lnpe7lm.png",
      title: "Sketch",
    },
    {
      image:
        "https://s3.ap-southeast-1.amazonaws.com/dev-room-images/images/1700667540958.png",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/replicate-prediction-3nzbt2jblgitawhl3q4delr6hy.png",
      title: "Sketch",
    },
    {
      image:
        "https://s3.ap-southeast-1.amazonaws.com/dev-room-images/images/1700667540958.png",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/replicate-prediction-g4hmmrrbeu2ir2ae252lnpe7lm.png",
      title: "Sketch",
    },
    {
      image:
        "https://s3.ap-southeast-1.amazonaws.com/dev-room-images/images/1700667540958.png",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/replicate-prediction-g4hmmrrbeu2ir2ae252lnpe7lm.png",
      title: "Sketch",
    },
    {
      image:
        "https://s3.ap-southeast-1.amazonaws.com/dev-room-images/images/1700667540958.png",
      title: "Real photo",
    },
    {
      image:
        "https://dev-room-images.s3.ap-southeast-1.amazonaws.com/replicate-prediction-g4hmmrrbeu2ir2ae252lnpe7lm.png",
      title: "Sketch",
    },
  ];

  return (
    <div className="mb-16 mt-10 flex w-full gap-4 justify-center flex-col">
      <h3 className="h3  text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
        Үр дүн
      </h3>
      <div className=" inline-flex w-full flex-col items-center">
        <ReactCompareSlider
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                display: "none",
              }}
              linesStyle={{
                width: 4,
              }}
            />
          }
          style={{ height: 300 }}
          itemOne={<Slider images={after} />}
          itemTwo={<Slider images={before} />}
        />
      </div>
    </div>
  );
};

export default Carousel;
