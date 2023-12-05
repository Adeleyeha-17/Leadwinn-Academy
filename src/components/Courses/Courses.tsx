import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import  mitImage from "../../assets/mit-img.png"
import  mit from "../../assets/mit.png"
import  pythonImage from "../../assets/python-img.png"
import  python from "../../assets/python.png"
import  robloxImage from "../../assets/roblox-img.png"
import  roblox from "../../assets/roblox.png"
import  scratchImage from "../../assets/scratch-img.png"
import  scratch from "../../assets/scratch.png"
import  uiImage from "../../assets/ui-img.png"
import  ui from "../../assets/uiux.png"
import  webImage from "../../assets/web-img.png"
import  web from "../../assets/web.png"

export const Courses = () => {


   type course = {
      img: string;
      heading: string;
      overlayImg: string;
   }

   const courses: course[] = [
      {
         img: mit,
         heading: "MIT",
         overlayImg: mitImage
      },
      {
         img: python,
         heading: "Python Programming",
         overlayImg: pythonImage
      }, {
         img: roblox,
         heading: "Roblox Design",
         overlayImg: robloxImage
      }, {
         img: scratch,
         heading: "Scratch",
         overlayImg: scratchImage
      }, {
         img: ui,
         heading: "UI/UX Design",
         overlayImg: uiImage
      }, {
         img: web,
         heading: "Web Development",
         overlayImg: webImage
      }
   ]

   return (
      <div className="bg-footer-blue">

      <div className="h-[30rem] sm:h-[65rem] lg:h-[50rem] xl:h-[55rem]  font-poppins py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto overflow-hidden">
         <div className="text-center text-white mb-16">
            <h1 className="font-bold text-xl xl:text-3xl mb-3">Explore Our Courses</h1>
            <h4 className="max-sm:text-xs text-base max-w-xs sm:max-w-2xl mx-auto">Our Microdegrees are specialized programs which upon completion will set you firmly on your chosen IT career path</h4>
         </div>

         <div className="hidden sm:grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-3 gap-72 sm:gap-10">
            {courses.map((data, index) => (
               <div key={index} className="w-[17rem] sm:w-[17rem] xl:w-[21rem] relative rounded-3xl overflow-hidden mx-auto">
                  <img src={data.img} alt={data.heading} className="w-full rounded-xl" />
                  <motion.div   whileHover={{ translateY: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
              animate={{ translateY: window.innerWidth >= 1400 ? 195 : 160, transition: { duration: 0.3, ease: "easeInOut" } }} className="absolute flex flex-col justify-center items-center gap-10 bg-courses bg-opacity-70 backdrop-blur-sm inset-0 text-white rounded-3xl rounded-t-none transform translate-y-40">
                     <h1 className="font-bold text-xs sm:text-base xl:text-xl">{data.heading}</h1>
                     <img src={data.overlayImg} alt={data.heading} className="max-sm:w-[2rem] max-xl:w-[3rem]" />

                     <Link to="" className={`inline-block justify-center items-center py-2 md:px-6 px-4 bg-head-blue text-white text-xs md:text-sm md:font-semibold rounded-3xl transition hover:bg-blue-800 ease-in-out duration-300`}>Enroll Now</Link>
                  </motion.div>
               </div>
            ))}
         </div>


         {/*Mobile*/}
         <div className="grid sm:hidden grid-cols-6 gap-72">
            {courses.map((data, index) => (
               <div key={index} className="w-[17rem] relative rounded-3xl overflow-hidden mx-auto">
                  <img src={data.img} alt={data.heading} className="w-full rounded-xl" />
                  <motion.div   whileHover={{ translateY: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
              animate={{ translateY: 200, transition: { duration: 0.3, ease: "easeInOut" } }} className="absolute flex flex-col justify-center items-center gap-10 bg-courses bg-opacity-70 backdrop-blur-sm inset-0 text-white rounded-3xl rounded-t-none transform translate-y-40">
                     <h1 className="font-bold text-xs sm:text-base xl:text-xl">{data.heading}</h1>
                     <img src={data.overlayImg} alt={data.heading} className="max-sm:w-[2rem] max-xl:w-[3rem]" />

                     <Link to="" className={`inline-block justify-center items-center py-2 px-4 bg-head-blue text-white text-xs rounded-3xl transition hover:bg-blue-800 ease-in-out duration-300`}>Enroll Now</Link>
                  </motion.div>
               </div>
            ))}
         </div>
      </div>
      </div>
   )
}