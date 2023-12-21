import mitImage from "../../assets/mit-img.png"
import pythonImage from "../../assets/python-img.png"
import robloxImage from "../../assets/roblox-img.png"
import scratchImage from "../../assets/scratch-img.png"
import uiImage from "../../assets/ui-img.png"
import webImage from "../../assets/web-img.png"


export const PlanCourses = () => {

   type PlanCourses = {
      heading: string;
      overlayImg: string;
   }

   const courses: PlanCourses[] = [
      {
         heading: "Scratch",
         overlayImg: scratchImage
      },
      {
         heading: "MIT",
         overlayImg: mitImage
      }, {
         heading: "Roblox Design",
         overlayImg: robloxImage
      }, {
         heading: "UI/UX Design",
         overlayImg: uiImage
      }, {
         heading: "Web Development",
         overlayImg: webImage
      },
      {
         heading: "Python Programming",
         overlayImg: pythonImage

      }
   ]



   return (
      <div className="bg-home-gra flex flex-col justify-center items-center w-full h-full py-[4rem] text-white font-poppins relative overflow-hidden">
         <h4 className="text-xl xl:text-3xl font-semibold mb-7">Courses We Teach</h4>

         <div className="grid grid-cols-3 sm:flex">
            {courses.map((plans, index) => (
               <div key={index} className="p-4 xl:p-9">
                  <div className="bg-plans-gra flex items-center justify-center h-[5rem] lg:h-[7rem] lg w-[5rem] lg:w-[7rem] rounded-3xl mx-auto">
                     <img src={plans.overlayImg} alt={plans.heading} className="w-[4rem] xl:w-[5rem] rounded-xl" />
                  </div>
                  <h4 className="max-lg:w-[4rem] text-center text-xs xl:text-sm font-semibold mt-3 mx-auto">{plans.heading}</h4>
               </div>
            ))}
         </div>

      </div>
   )
}
