
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
      <div className="flex flex-col md:flex-row justify-between lg:space-x-20 md:px-12 md:py-6 px-5 xl:px-28 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl">
        <div className="font-poppins text-head-black md:w-3/5">
          <h1 className="max-sm:text-[25px] sm:max-lg:text-[30px] lg:max-xl:text-[37px] xl:max-2xl:text-[40.5px] 2xl:text-[50px] font-bold mb-6 leading-normal max-w-md sm:mx-0 sm:max-w-[400px] lg:max-2xl:max-w-[545px] 2xl:max-w-[820px]">Engage in the Future of Learning with <span className={`${currentColorClass}`}>
  {currentWord}
</span>  Online Coding Classes</h1>
          <h1 className="hidden md:flex mb-6 text-xs lg:text-base sm:max-w-[26rem] lg:max-w-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>
          <Button path="" title="Discover Course" />
        </div>
    <div className="md:w-2/5">
        <img src="./homeIllustration.svg" alt="home illustration" className="max-lg:mx-auto w-3/4 md:w-full h-full"/>
    </div>
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-2/5 sm:max-lg:h-[160px] sm:max-lg:w-[650px] lg:h-[184] w-2/5 lg:w-[811px] rounded-[50px] font-poppins text-white font-semibold text-xs sm:text-[9px] lg:text-sm mx-auto max-sm:mt-16 py-3 sm:px-6 xl:mt-32">
        <div className="items-center justify-between sm:flex mt-5 sm:mt-3 lg:mt-5">

        <div className="flex flex-col mb-10 sm:mb-12 items-center justify-center mx-auto">
          <img src="./edu1.svg" alt="" className="mx-auto mb-4 w-16 lg:w-3/4" />
          <h1>Over 100+ Students</h1>
        </div>
        <div className="w-16 mb-8 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex flex-col mb-10 sm:mb-14 items-center justify-center mx-auto">
          <img src="./edu2.svg" alt="" className="mx-auto mb-4 w-16 lg:w-3/4" />
          <h1>Over 100+ Certified</h1>
        </div>

        <div className="w-16 mb-8 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex justify-center flex-col mb-8 sm:mb-12 items-center mx-auto">
          <img src="./edu3.svg" alt="" className="mx-auto mb-4 w-16 lg:w-3/4" />
          <h1>Over 10+ Countries</h1>
        </div>
        </div>

      </div>
    </div>
  )
}
