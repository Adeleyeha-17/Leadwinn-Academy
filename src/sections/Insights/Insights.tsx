import { checked } from "../../assets/icons"
export const Insights = () => {

   const insights = [
         "Get professional home and online tutor for your child",
         "Fuel your child's curiosity with courses that encompasses vital skills",
         "Unlock the power of creativity to realize both personal and professional aspirations through skillful learning",
         "Cultivate a well-rounded education with courses covering school subjects, board games, music, art, and essential computer skills"
      
   ]
  return (
   <div className=" h-full py-10 md:px-12 md:py-20 px-5 lg:px-28 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-20">

         <div className="flex flex-col gap-4 lg:gap-6 text-heading max-sm:mb-10">
            <h3 className="text-4xl font-semibold w-[20rem]">More Insights To These Courses</h3>
         </div>

         <div className="flex flex-col gap-6"> 
            {insights.map((data, index) => (
               <div className="flex">

               <img src={checked} alt="checked icon" className="w-6 mr-5"/>

               <div key={index}>
                  <h4 className="text-[#013168] font-semibold">{data}</h4>
               </div>
               </div>
            ))}
         </div>
  </div>



</div>
  )
}
