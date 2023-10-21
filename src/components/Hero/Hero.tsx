
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
      <div className="flex flex-col sm:flex-row justify-between lg:space-x-20 py-10 sm:px-20 md:py-20 px-5 lg:px-0 xl:px-36 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
        <div className="font-poppins text-lead-black md:w-3/5 mx-auto">
          <h1 className="text-3xl md:text-head font-bold mb-6 leading-normal max-w-md mx-auto sm:mx-0 md:max-w-3xl">Engage in the Future of Learning with <span className={`animate-slide-top ${currentColorClass}`}>{currentWord}</span>  Online Coding Classes</h1>
          <h1 className="hidden md:flex mb-6 text-sm md:text-base md:max-w-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>
          <Button path="" title="Discover Course" />
        </div>
    <div className="md:w-2/5">
        <img src="./homeIllustration.svg" alt="home illustration" className="mx-auto w-3/4 md:w-full h-full"/>
    </div>
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-5/6 sm:h-3/5 md:h-64 w-1/2 sm:w-4/5 md:w-3/4 rounded-3xl font-poppins text-white font-semibold text-sm lg:text-lg items-center justify-between mt-14 mx-auto sm:flex mb-28 py-3 md:py-10 sm:py-0 sm:mb-36">
        <div className="flex flex-col mb-12 items-center mx-auto">
          <img src="./edu1.svg" alt="" className="mx-auto mb-4 w-28 sm:w-3/4" />
          <h1>Over 100+ Students</h1>
        </div>

        <div className="w-20 m-8 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex flex-col mb-14 items-center justify-center mx-auto">
          <img src="./edu2.svg" alt="" className="mx-auto mb-4 w-28 sm:w-3/4" />
          <h1>Over 100+ Certified</h1>
        </div>

        <div className="w-20 m-12 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex flex-col mb-12 items-center mx-auto">
          <img src="./edu3.svg" alt="" className="mx-auto mb-4 w-28 sm:w-3/4" />
          <h1>Over 10+ Countries</h1>
        </div>
      </div>
    </div>
  )
}
