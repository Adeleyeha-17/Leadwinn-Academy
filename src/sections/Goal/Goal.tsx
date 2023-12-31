import { flag, signPost, clipPath } from "../../assets/images"

export const Goal = () => {

   type goaltype = {
      text: string;
      boldedText: string;
      img: string;
   }

   const goalData: goaltype[] = [
      {
         text: "I wish to enhance my skills and",
         boldedText: "expand my understanding",
         img: flag
      }, {
         text: "I aim to investigate and",
         boldedText: "chart my career trajectory",
         img: signPost
      }, {
         text: "I want to explore my",
         boldedText: "hobbies and interests",
         img: clipPath
      }
   ]
   return (
      <div className="flex flex-col justify-between py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto font-poppins md:my-4">
         <h1 className="text-sm sm:text-xl font-semibold text-heading text-center capitalize">Not sure where to begin? What is your main goal on Leadwinn?</h1>

         <div className="sm:max-lg:grid sm:max-lg:grid-cols-2 flex flex-col lg:flex-row gap-10 lg:justify-between mt-5 sm:mt-10 cursor-pointer ">

            {goalData.map((data, index) => (
               <div key={index} className="w-full  mx-auto sm:mx-0 h-[6rem] rounded-xl shadow-md shadow-outline bg-white flex items-center relative">
                  <h1 className="w-[14rem] ml-5 text-sm flex flex-col">{data.text}<span className="text-head-black font-semibold"> {data.boldedText}</span></h1>
                  <img src={data.img} alt="sign post" className="w-1/5 absolute right-0 bottom-0" />
               </div>
            ))}
         </div>

      </div>
   )
}
