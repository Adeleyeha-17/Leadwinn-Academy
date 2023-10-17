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

         <div className="flex flex-col-reverse md:flex-row mt-20 md:mt-24 justify-between lg:max-xl:px-10 lg:space-x-20  px-5 md:max-w-6xl lg:max-w-7xl mx-auto">
            <div className="font-poppins text-lead-black">

               <h1 className="text-3xl md:text-5xl font-bold md:leading-snug mb-2 md:mb-5">Engage in the Future of Learning with <span className={`animate-slide-top ${currentColorClass}`}>{currentWord}</span> Online Coding Classes</h1>
               <h1 className="mb-3 md:mb-5 text-sm md:text-base">Elevate Learning with Online Coding Classes Empowering Kids and  <br className="hidden md:flex"/> Teens Aged 6-17 to Shape the Future through Design and Innovation.</h1>

               <Button path="" title="Discover Course"/>

            </div>

            <img src="./homeIllustration.svg" alt="home illustration" className=" mx-auto w-4/5 md:w-2/5 mb-6 md:mb-0"/>
         </div>
      </div>
   )
}
