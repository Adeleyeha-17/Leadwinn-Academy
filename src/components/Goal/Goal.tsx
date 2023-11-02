
export const Goal = () => {

   type goaltype = {
      text: string;
      boldedText: string;
      img: string;
   }

   const goalData:goaltype[] = [
      {
         text: "I wish to enhance my skills and",
         boldedText: "expand my understanding",
         img: "./Clip path group.svg"
      }, {
         text: "I aim to investigate and",
         boldedText: "chart my career trajectory",
         img: "./signpost.svg.svg"
      }, {
         text: "I want to explore my",
         boldedText: "hobbies and interests",
         img: "./jigsaw.svg.svg"
      }
   ]
  return (
    <div className="flex flex-col justify-between py-10 sm:px-12 md:py-20 px-5 xl:px-28 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto font-poppins overflow-hidden">
      <h1 className="text-sm sm:text-xl font-semibold text-head-black text-center capitalize">Not sure where to begin? What is your main goal on Leadwinn?</h1>

      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between mt-5 sm:mt-10">

   {goalData.map((data, index) => (
      <div key={index} className="w-[345px] lg:w-[350px] h-[94px] rounded-xl shadow-lg shadow-outline bg-white flex items-center relative">
         <h1 className="w-[227px] ml-5 text-sm flex flex-col">{data.text}<span className="text-head-black font-semibold"> {data.boldedText}</span></h1>
         <img src={data.img} alt="sign post" className="w-[63px] h-[63px] absolute right-0 bottom-0" />
         </div>
   ))}
   </div>
      
    </div>
  )
}
