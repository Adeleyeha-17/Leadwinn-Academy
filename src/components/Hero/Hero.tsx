
import { useEffect, useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";

type HomeProps = {
  words: string[];
};

export const Hero: React.FC<HomeProps> = () => {

  const words: string[] = ["Interactive", "Educative", "Informative"];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onloadAfter10Sec, setOnloadAfter10Sec] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % words.length);
    }, 2000);

    setTimeout(() => {
      setOnloadAfter10Sec(true);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentWord: string = words[currentIndex];



  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between lg:space-x-20 md:px-12 md:py-6 px-5 xl:px-40 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
        <div className="font-poppins text-head-black md:w-3/5">
          <motion.h1 initial={{ y: -50, opacity: 0.2 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, type: "spring", damping: 10, stiffness: 100, ease: "easeInOut" }
            }}
            className="max-sm:text-[1.625rem] sm:max-lg:text-[1.875rem] lg:max-xl:text-[2.3125rem] xl:max-2xl:text-[2.53125rem] 2xl:text-[3.125rem] font-bold mb-6 leading-normal sm:mx-0 max-w-[25rem] lg:max-2xl:max-w-[34.0625rem] 2xl:max-w-[43.75rem]">Engage in the Future of Learning with
            <motion.span className="text-hero-blue ml-2" key={currentWord} initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              exit={{
                y: -100,
                opacity: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}>
              {currentWord}
            </motion.span>  Online Coding Classes</motion.h1>
          <h1 className="hidden md:flex mb-6 text-xs lg:text-base sm:max-w-[26rem] lg:max-w-xl">Elevate Learning with Online Coding Classes Empowering Kids and Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>
          <Button path="" title="Discover Course" />
        </div>
        <div className="md:w-2/5">
          <motion.img
            src={onloadAfter10Sec ? "./homeillus.png" : "./homeIllustration.png"}
            alt="home illustration"
            className="max-w-full max-lg:mx-auto w-3/4 md:w-11/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
          />
        </div>
      </div>

      <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-2/5 sm:max-lg:h-[10rem] sm:max-lg:w-[40.625rem] lg:h-[10.3125rem] xl:h-[13.125rem] w-1/2 lg:w-3/4 rounded-[3.125rem] font-poppins text-white font-semibold text-sm xl:text-lg mx-auto max-sm:mt-16 py-3 sm:px-6 xl:mt-32">
        <div className="items-center justify-between sm:flex mt-5 sm:mt-3 lg:mt-0">

          <div className="flex flex-col mb-10 sm:mb-12 items-center justify-center mx-auto">
            <img src="./edu1.png" alt="" className="max-w-full mx-auto mb-4 w-16 lg:w-20 xl:w-3/4" />
            <h1>Over 100+ Students</h1>
          </div>
          <div className="w-16 mb-8 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

          <div className="flex flex-col mb-10 sm:mb-14 items-center justify-center mx-auto mt-2">
            <img src="./edu2.png" alt="" className="max-w-full mx-auto mb-4 w-16 lg:w-20 xl:w-3/4" />
            <h1>Over 100+ Certified</h1>
          </div>

          <div className="w-16 mb-8 border-gray-200 border-2 transform rotate-90 mx-auto rounded-lg"></div>

          <div className="flex justify-center flex-col mb-8 sm:mb-12 items-center mx-auto">
            <img src="./edu3.png" alt="" className="max-w-full mx-auto mb-4 w-16 lg:w-20 xl:w-3/4" />
            <h1>Over 10+ Countries</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
