
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
          <h1 className="max-sm:text-[25px] sm:max-lg:text-[30px] lg:max-xl:text-[37px] xl:max-2xl:text-[40.5px] 2xl:text-[50px] font-bold mb-6 leading-normal max-w-md mx-auto sm:mx-0 md:max-w-[400px] lg:max-w-[650px] xl:max-w-[580px]">Engage in the Future of Learning with <span className={`${currentColorClass}`}>
  {currentWord}
</span>  Online Coding Classes</h1>
          <h1 className="hidden md:flex mb-6 text-xs lg:text-base md:max-w-md lg:max-w-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>
          <Button path="" title="Discover Course" />
        </div>
    <div className="md:w-2/5">
        <img src="./homeIllustration.svg" alt="home illustration" className="max-lg:mx-auto w-3/4 md:w-full h-full"/>
    </div>
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-2/5 sm:h-52 w-5/12 sm:w-3/4 rounded-[50px] font-poppins text-white font-semibold max-sm:text-sm sm:text-xs xl:text-base mt-2 sm:mt-34 mx-auto mb-28 sm:max-md:px-10 md:max-xl:px-6 xl:px-10 py-3 md:max-xl:py-9 xl:py-3 sm:mb-36">
        <div className="items-center justify-between sm:flex sm:mt-0">

        <div className="flex flex-col mb-10 sm:mb-12 items-center justify-center mx-auto">
          <img src="./edu1.svg" alt="" className="mx-auto mb-4 w-20 sm:w-3/4" />
          <h1>Over 100+ Students</h1>
        </div>
        <div className="w-16 sm:w-20 mb-8 sm:m-12 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex flex-col mb-10 sm:mb-14 items-center justify-center mx-auto">
          <img src="./edu2.svg" alt="" className="mx-auto mb-4 w-20 sm:w-3/4" />
          <h1>Over 100+ Certified</h1>
        </div>

        <div className="w-16 sm:w-20 mb-8 sm:m-12 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

        <div className="flex justify-center flex-col mb-8 sm:mb-12 items-center mx-auto">
          <img src="./edu3.svg" alt="" className="mx-auto mb-4 w-20 sm:w-3/4" />
          <h1>Over 10+ Countries</h1>
        </div>
        </div>

      </div>
    </div>
  )
}
