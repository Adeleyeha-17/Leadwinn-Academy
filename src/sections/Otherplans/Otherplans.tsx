import { otherPlans } from "../../assets/images"
export const Otherplans = () => {

  const plans: { otherplan: string[] } = {
    otherplan : [ "All Classes", "All Subjects", "Board Games", "Music Classes", "Art & Painting", "Computer", "Other Extra Curricular" ]
  }
  return (
<div className="bg-nav-blue h-full py-10 md:px-12 md:py-20 px-5 lg:px-28 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:gap-20">

         <div className="flex flex-col gap-4 lg:gap-6 text-heading md:w-2/5 max-sm:mb-10">
            <h4 className="sm:mb-2 xl:mb-4 text-lg sm:text-xl font-semibold text-footer-blue w-[20rem]"> Other Plans</h4>

            <h3 className="text-lg sm:text-2xl xl:text-3xl text-heading font-bold w-[16.5rem] sm:w-[23rem] xl:w-[27rem]">Get Professional  Home and Online <span className="text-[#0077FF]">Tutor For Your Child</span></h3>

            <h5 className="text-courses text-sm sm:w-[19rem] lg:w-[27rem] xl:w-[29rem] mb-5">Elevate your child's educational journey with the guidance of professional home and online tutors. Our personalized learning approach ensures tailored support, fostering a strong foundation for academic success and lifelong skills.</h5>
         
            <a href={`https://api.whatsapp.com/send?phone=+2348165906106&text=Hello%20admin,%20I%20want%20to%20get%20know%20more%20about%20Leadwinn's%20Academy%20Home%20Tutor%20Plan.%20Can%20we%20discuss%20further?`} className={ `flex justify-center items-center w-[7rem] sm:w-[8rem] py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} target="_blank" >Learn more</a>
            
         </div>

         <div className="flex justify-end"> 
            <img src={otherPlans} alt="" className="w-full h-full lg:w-4/5 rounded-3xl" loading="lazy"/>
         </div>
  </div>

<div className="grid xl:flex max-sm:grid-cols-2 sm:grid-cols-4 xl:justify-between max-lg:gap-5 lg:max-xl:gap-x-12 lg:max-xl:gap-y-5  mt-16">

{plans.otherplan.map((plan, index) => (
  
  <h1 key={index} className="bg-nav-blue text-heading xl:text-[0.8rem] font-medium h-10 w-max flex items-center rounded-2xl px-5 shadow-md drop-shadow-md">{plan}</h1>
  ))}
  </div>

</div>

  )
}
