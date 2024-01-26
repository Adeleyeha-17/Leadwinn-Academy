import { careerBottom, careerTop } from "../../assets/images"

export const Careers = () => {
  return (
   <div className="font-poppins max-sm:pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
   <div className="flex max-sm:flex-col justify-center items-center gap-10 sm:px-16">
     <div className="text-heading sm:w-[22rem] xl:w-[24rem]">
       <h1 className="text-xl lg:text-3xl font-semibold mb-5 max-lg:w-[14rem]">Careers at Leadwinn</h1>
       <h4 className="text-xs xl:text-sm max-sm:pr-9 ">Join a dynamic team at Leadwinn, where we believe in fostering innovation and shaping the future of education. As a facilitator, you have the opportunity to play a crucial role in guiding the next generation of tech enthusiasts. We value your expertise, passion, and commitment to education.</h4>
     </div>
     <div>
       <img src={careerTop} className="h-[15.5rem] w-[18.5rem] sm:h-[23rem] sm:w-[27rem]" />
     </div>
   </div>
   <div className="flex max-sm:flex-col-reverse justify-center items-center gap-10 sm:px-16 mt-10 sm:mt-20">
   <div>
       <img src={careerBottom} className="h-[15.5rem] w-[18.5rem] sm:h-[23rem] sm:w-[27rem]" />
     </div>
     
     <div className="text-heading sm:w-[22rem] xl:w-[24rem]">
       <h1 className="text-xl lg:text-3xl font-semibold mb-5 max-lg:w-[14rem]">Organisation Values</h1>
       <h4 className="text-xs xl:text-sm max-sm:pr-9 ">At our core, we embrace Excellence, Innovation, Empathy, Leadership, and Integrity. These values guide our actions, driving us to deliver quality, foster creativity, demonstrate understanding, exhibit leadership, and uphold integrity. Together, they form the foundation of our organization, defining our commitment to excellence in all endeavors.</h4>
     </div>
    
   </div>
   </div>
  )
}
