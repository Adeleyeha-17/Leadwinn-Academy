
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
      <div className="flex flex-col sm:flex-row justify-between lg:space-x-20 py-10 sm:max-md:px-20 md:py-20 px-5 lg:px-0 xl:px-36 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
        <div className="font-poppins text-lead-black w-full">

          <h1 className="text-3xl sm:text-head font-semibold md:leading-snug mb-6 md:mb-5 sm:max-md:w-[420px] lg:max-xl:w-[400px] xl:w-[689px]">Engage in the Future of Learning with <span className={`animate-slide-top ${currentColorClass}`}>{currentWord}</span>  Online Coding Classes</h1>
          <h1 className="xl:w-[500px] md:max-lg:w-[420px] sm:max-md:w-[350px] mb-6 md:mb-5 text-sm md:text-base lg:text-lg xl:text-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>

          <Button path="" title="Discover Course" />

        </div>
    <div className="w-full">

        <img src="./homeIllustration.svg" alt="home illustration" className="xl:mx-auto sm:w-full md:w-4/5 xl:w-full"/>
    </div>
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-5/6 sm:h-20 md:h-56 w-1.5 sm:w-4/5 rounded-3xl font-poppins text-white md:font-bold text-xs md:text-sm lg:text-base xl:text-xl items-center justify-between p-32 sm:px-10 mt-14 sm:mt-3 md:-mt-8 lg:-mt-7 xl:mt-6 mx-auto sm:flex mb-28 sm:mb-36">
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
