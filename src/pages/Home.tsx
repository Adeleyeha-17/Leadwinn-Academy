import Button from "../components/Button"
import { useEffect, useState } from "react"

export const Home = () => {
  const words = ["Interactive", "Educative", "Informative"]
  const colors = ["text-blue-500", "text-yellow-600" ,"text-green-500"]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
     const interval = setInterval(() => {
        setCurrentIndex((index) => (index + 1) % words.length)
     }, 2000)

     return () => {
        clearInterval(interval)
     }
  }, [])

  const currentWord = words[currentIndex]
  const currentColorClass = colors[currentIndex]

   return (
      <div>
         <svg xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-0 left-0 right-0 bottom-0 -z-10" viewBox="0 0 1440 843" fill="none">
            <path d="M0 0H1440V813.284C1229.5 658.095 148 1058 0 658.095V197V0Z" fill="#ECF5FF"/>
         </svg>

         <div className="flex flex-col md:flex-row mt-14 md:mt-24 justify-between lg:max-xl:px-10 lg:space-x-20 sm:p-20 px-5 md:max-w-6xl lg:max-w-7xl mx-auto">
            <div className="font-poppins text-lead-black">

               <h1 className="text-3xl sm:px-2.5 sm:text-4xl md:text-myXL xl:text-6xl font-bold md:leading-snug mb-2 md:mb-5">Engage in the Future of Learning with <span className={`animate-slide-top ${currentColorClass}`}>{currentWord}</span> Online Coding Classes</h1>
               <h1 className="mb-3 md:mb-5 text-sm md:text-base sm:px-2.5">Elevate Learning with Online Coding Classes Empowering Kids and  <br className="hidden sm:flex"/> Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>

               <Button path="" title="Discover Course"/>

            </div>

            <img src="./homeIllustration.svg" alt="home illustration" className="mx-auto sm:w-3/4 md:w-2/5"/>
         </div>

         <div className=" bg-gradient-to-tr from-home-gra-2 to-home-gra h-20 md:h-48 w-3/5 rounded-3xl font-poppins text-white md:font-bold text-xs lg:text-base items-center justify-between px-10 -mt-10 mx-auto hidden md:flex">
            <div className="flex flex-col items-center mx-auto ">
              <img src="./edu1.svg" alt="" className="mx-auto "/>
              <h1>Over 100+ Students</h1>
            </div>

            <div className="w-20 border-gray-200 border-2 transform rotate-90 rounded-lg"></div>

            <div className="flex flex-col items-center justify-center mx-auto">
              <img src="./edu2.svg" alt="" className="mx-auto"/>
              <h1>Over 100+ Certified</h1>
            </div>

            <div className="w-20 border-gray-200 border-2 transform rotate-90 rounded-lg"></div>


            <div className="flex flex-col items-center mx-auto">
              <img src="./edu3.svg" alt="" className="mx-auto"/>
              <h1>Over 10+ Countries</h1>
            </div>
         </div>
      </div>
   )
}