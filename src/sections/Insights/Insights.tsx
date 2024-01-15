import { checked } from "../../assets/icons"
export const Insights = () => {

   const insights = [
      "Get Professional Home And Online Tutor For Your Child",
      "Fuel Your Child's Curiosity With Courses That Encompasses Vital Skills",
      "Unlock The Power Of Creativity To Realize Both Personal And Professional Aspirations Through Skillful Learning",
      "Cultivate A Well-Rounded Education With Courses Covering School Subjects, Board Games, Music, Art, And Essential Computer Skills"

   ]

   const plans: { otherplan: string[] } = {
      otherplan: ["All Classes", "All Subjects", "Board Games", "Music Classes", "Art & Painting", "Computer", "Other Extra Curricular"]
   }
   return (

      <div className="h-full md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mx-auto">
         <div className="bg-gradient-to-br from-[#0965CE] to-[#01152C] h-full sm:h-[17.5rem] flex flex-col gap-10 sm:gap-8 justify-center items-center px-5 py-16 md:py-20 sm:px-20 lg:px-28">
            <h3 className="text-[#DCEDFF] text-bas sm:text-3xl font-semibold">More Courses To Learn</h3>

            <div className="grid xl:flex max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto xl:justify-between gap-6 lg:max-xl:gap-x-2 lg:max-xl:gap-y-4">

               {plans.otherplan.map((plan, index) => (

                  <h1 key={index} className="bg-skill-hov text-heading text-[0.8rem] font-semibold h-10 w-max flex items-center rounded-2xl px-5 shadow-md sm:shadow-lg">{plan}</h1>
               ))}
            </div>
         </div>

         <div className="py-10 px-5 md:py-20 sm:px-20 lg:px-28 xl:px-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-20">

               <div className="flex flex-col gap-4 lg:gap-6 text-heading max-sm:mb-10 justify-center items-center">
                  <h3 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl max-sm:text-center  font-semibold w-[15rem] lg:w-[20rem]">More Insights To These Courses</h3>
               </div>

               <div className="flex flex-col gap-6">
                  {insights.map((data, index) => (
                     <div className="flex">

                        <img src={checked} alt="checked icon" className="w-6 mr-5" />

                        <div key={index}>
                           <h4 className="text-[#013168] max-lg:text-xs font-semibold sm:w-[14rem] lg:w-[20rem] xl:w-[26.5rem]">{data}</h4>
                        </div>
                     </div>
                  ))}
               </div>
            </div>



         </div>
      </div>
   )
}
