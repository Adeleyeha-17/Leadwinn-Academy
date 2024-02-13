
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { edu1, edu2, edu3, homeIllustration, homeIllus } from "../../assets/images"
import { MdAirplay } from "react-icons/md";


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
  }, [words.length]);

  const currentWord: string = words[currentIndex];



  return (
    <div>
      <div className="flex flex-col md:flex-row items-center lg:space-x-5 md:px-12 pt-20 sm:pb-10 lg:pb-20 xl:pb-0 px-5 xl:px-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto font-poppins">
        <div className="font-poppins text-heading md:w-1/2">
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
          <h1 className="hidden md:flex mb-6 text-xs lg:text-sm xl:text-lg sm:max-w-[23rem] lg:max-w-[30rem] xl:max-w-[34rem]">Online learning and teaching marketplace with courses & over 100 students. Taught by experts to help you acquire new skills.</h1>

              <div className="flex max-sm:flex-col gap-5 items-center sm:gap-10 mb-10">

          <Link to="/courses" className={ `flex justify-center items-center max-sm:w-40 py-4 px-8 bg-head-blue text-white  text-xs font-semibold rounded-xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Get Started</Link>

          <Link to="/library" className={ `flex gap-3 justify-center items-center text-sm font-semibold cursor-pointer`}> <MdAirplay className="w-8 h-8"/> Visit Library</Link>
          </div>
        
        </div>
        <div className="md:w-1/2">
          <motion.img
            src={onloadAfter10Sec ? homeIllus : homeIllustration}
            alt="home illustration"
            className="max-lg:mx-auto "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
          loading="eager"/>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex max-sm:flex-col justify-center items-center gap-5">
          <div className="flex items-center gap-4 bg-heading text-white border rounded-lg py-5 px-16 sm:px-6 lg:px-12 shadow-sm">
            <img src={edu1} alt="students" className="w-16 lg:w-20" loading="eager"/>
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">100+</span> Students</h1>
          </div>
          <div className="flex items-center gap-4 bg-white text-heading border rounded-lg py-5 px-16 sm:px-6 lg:px-12 shadwo-sm">
            <img src={edu2} alt="certified" className="w-16 lg:w-20" loading="eager"/>
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">100+</span> Certified</h1>
          </div>

          <div className="flex items-center gap-4 bg-heading text-white border rounded-lg py-5 px-16 sm:px-6 lg:px-12 shadow-sm">
            <img src={edu3} alt="countries" className="w-16 lg:w-20" loading="eager"/>
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">10+</span> Countries</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
