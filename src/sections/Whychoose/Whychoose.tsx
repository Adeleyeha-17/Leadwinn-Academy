import React from "react";
import CarouselItem from "./CarouselItem";


export const Whychoose: React.FC = () => {
 

  return (
    <div className="my-10 flex flex-col justify-center overflow-hidden font-poppins md:mb-20">

<div className="py-10 md:px-12 px-5 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl">
        <h2 className="text-head-black font-bold sm:text-2xl lg:text-3xl sm:mb-3">
          Why Choose <span className="text-hero-blue">Leadwinn?</span>
        </h2>
        <h3 className="max-sm:text-xs text-base text-head-black max-w-[20rem] sm:max-w-[30rem]">
          At Leadwinn, we're dedicated to providing the best online coding education for kids and teens. Here are the compelling reasons why you should choose us
        </h3>
      </div>


      <div className="transform ease-in-out duration-700 whitespace-nowrap shadow-md" >
       
          <CarouselItem  />
      </div>
    </div>
  );
};
