
import { useEffect, useState } from "react";
import Button from "../Button";

type HomeProps = {
   words: string[];
   colors: string[];
 };

export const Hero: React.FC<HomeProps> = () => {

   const words: string[] = ["Interactive", "Educative", "Informative"];
   const colors: string[] = ["text-hero-blue"];
 
   const [currentIndex, setCurrentIndex] = useState<number>(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentIndex((index) => (index + 1) % words.length);
     }, 2000);
 
     return () => {
       clearInterval(interval);
     };
   }, []);
 
   const currentWord: string = words[currentIndex];
   const currentColorClass = colors;
 
 

  return (
    <div>
      <div className="flex flex-col md:flex-row mt-14 md:mt-0 justify-between lg:max-xl:px-10 lg:space-x-20 sm:p-20 px-5 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
        <div className="font-poppins text-lead-black">

          <h1 className="text-3xl sm:text-4xl md:text-myXL xl:text-5xl font-semibold md:max-xl:leading-snug xl:leading-heading mb-2 md:mb-5 xl:pr-5">Engage in the Future of Learning with <span className={`animate-slide-top ${currentColorClass}`}>{currentWord}</span>  Online Coding Classes</h1>
          <h1 className="mb-3 md:mb-5 lg:pr-20 text-sm md:max-lg:text-base lg:text-base xl:text-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>

          <Button path="" title="Discover Course" />

        </div>

        <img src="./homeIllustration.svg" alt="home illustration" className="mx-auto sm:w-3/4 md:w-2/5 xl:w-4/5" />
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-20 md:h-48 xl:h-72 w-4/5 xl:w-3/4 rounded-3xl font-poppins text-white md:font-bold text-xs md:text-sm lg:text-base xl:text-xl items-center justify-between px-10 -mt-10 xl:mt-16 mx-auto hidden md:flex">
        <div className="flex flex-col items-center mx-auto">
          <img src="./edu1.svg" alt="" className="mx-auto xl:mb-6" />
          <h1>Over 100+ Students</h1>
        </div>

        <div className="w-20 border-gray-200 border-2 transform rotate-90 rounded-lg"></div>

        <div className="flex flex-col items-center justify-center mx-auto">
          <img src="./edu2.svg" alt="" className="mx-auto xl:mb-6" />
          <h1>Over 100+ Certified</h1>
        </div>

        <div className="w-20 border-gray-200 border-2 transform rotate-90 rounded-lg"></div>

        <div className="flex flex-col items-center mx-auto">
          <img src="./edu3.svg" alt="" className="mx-auto xl:mb-6" />
          <h1>Over 10+ Countries</h1>
        </div>
      </div>
    </div>
  )
}
