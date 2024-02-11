"use client";
import Slider from "./slider";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Carousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://businessofhome.com/system/images/12011/small169/Tonic_ChromesthesiaAscend_3.jpg?1675188578",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
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
          style={{ height: 260 }}
          itemOne={<Slider gray={false} images={images} />}
          itemTwo={<Slider gray={true} images={images} />}
        />
      </div>
    </div>
  );
};

export default Carousel;
