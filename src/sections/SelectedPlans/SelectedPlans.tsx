import { experienceA, experienceB, pricing, replay, review, time, tips } from "../../assets/icons";
import { Link } from "react-router-dom"

export const SelectedPlans = () => {
   type PlanFeature = {
      experience?: string;
      experienceIcon: string;
      duration?: string;
      durationIcon: string;
      review?: string;
      reviewIcon: string;
      replay?: string;
      replayIcon: string;
      pricing?: string;
      pricingIcon: string;
      tipIcon: string;
   };

   type AdditionalFeature = {
      title: string;
      description: string;
   };

   type Plan = {
      title: string;
      description: string;
      feature: string;
      features: PlanFeature[];
      additionalFeature: string;
      additionalFeatures: AdditionalFeature[];
   };

   const plans: Plan[] = [
      {
         title: "Virtual Personal Tutoring",
         description: "Elevate Your Learning with Tutor-Led Live Classes, One-on-One Excellence Tailored to You.",
         feature: "Features",
         features: [
            {
               experience: "Personalized Learning Experience",
               experienceIcon: experienceA,
               duration: "Time Flexibility",
               durationIcon: time,
               review: "Project Review",
               reviewIcon: review,
               replay: "Replay",
               replayIcon: replay,
               pricing: "Premium Pricing",
               pricingIcon: pricing,
               tipIcon: tips,
            },
         ],
         additionalFeature: "Additional Features",
         additionalFeatures: [
            {
               title: "Progress Tracking",
               description: "Monitor and track individual progress through a dedicated dashboard.",
            },
            {
               title: "Priority Support",
               description: "Get priority access to customer support for a seamless learning journey.",
            },
         ],
      },
      {
         title: "Virtual Group Classes",
         description: "Maximize Learning in Virtual Group Classes with Expert Tutors, Limited to 4 Students per Class.",
         feature: "Features",
         features: [
            {
               experience: "Networking Opportunities",
               experienceIcon: experienceB,
               duration: "Agreed Time (Not Flexible)",
               durationIcon: time,
               review: "Project Review",
               reviewIcon: review,
               replay: "Replay",
               replayIcon: replay,
               pricing: "Standard Pricing",
               pricingIcon: pricing,
               tipIcon: tips,
            },
         ],
         additionalFeature: "Additional Features",
         additionalFeatures: [
            {
               title: "Cross-Cultural Learning",
               description: "Gain insights into different cultures through group discussions and projects.",
            },
            {
               title: "Collaborative Projects",
               description: "Work on team projects to enhance collaboration and communication skills.",
            },
         ],
      },
   ];

   return (
      <div className="bg-skill h-full font-poppins max-sm:px-5 py-20 sm:px-10 flex flex-col gap-10 justify-center sm:items-center">
         <div className="text-heading flex flex-col justify-center items-center gap-1 sm:mb-4">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold ">Select Your Preferred Plan</h3>
            <h5 className="max-sm:text-xs max-lg:text-sm text-center">Choose the Perfect Subscription for Personalized Growth with Leadwinn</h5>
         </div>

         <div className="flex max-sm:flex-col gap-8 mx-auto">
            {plans.map((data, index) => (
               <div key={index} className="bg-white mx-auto w-[20rem] lg:w-[27rem] xl:w-[33rem] h-[40rem] lg:h-[50rem] xl:h-[46rem] rounded-2xl text-heading p-5 lg:p-10">
                  <div className="mb-5">
                     <h1 className=" text-base lg:text-xl font-semibold mb-1">{data.title}</h1>
                     <h4 className="text-xs lg:text-sm w-[17rem] lg:w-[19.5rem] xl:w-[22rem]">{data.description}</h4>
                  </div>

                  <Link to="" className={ `inline-block justify-center items-center py-3 w-[16rem] lg:w-[19rem] xl:w-[21rem] bg-head-blue text-white text-xs text-center font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Get Started</Link>


                  <div className="mt-7">
                     <h4 className="text-sm lg:text-base font-semibold mb-3">{data.feature}</h4>

                     <div>
                        {data.features.map((item, index) => (
                           <div key={index} className="flex flex-col gap-5">
                              {item.experience && (
                                 <div className="flex justify-between items-center border-skill-hov border-b-2">
                                    <div className="flex gap-2 mb-2">
                                       <img src={item.experienceIcon} alt="Experience Icon" className=" w-4 sm:w-5 lg:w-6" />
                                       <span className="max-lg:text-xs" >{item.experience}</span>
                                    </div>
                                    <img src={item.tipIcon} className="mb-2 max-sm:w-4 sm:max-lg:w-5" />
                                 </div>
                              )}
                              {item.duration && (
                                 <div className="flex justify-between items-center border-skill-hov border-b-2">
                                    <div className="flex gap-2 mb-2">
                                       <img src={item.durationIcon} alt="Duration Icon" className="w-4 sm:w-5 lg:w-6" />
                                       <span className="max-lg:text-xs">{item.duration}</span>
                                    </div>
                                    <img src={item.tipIcon} className="mb-2 max-sm:w-4 max-lg:w-5" />
                                 </div>
                              )}
                              {item.review && (
                                 <div className="flex justify-between items-center border-skill-hov border-b-2">
                                    <div className="flex gap-2 mb-2">
                                       <img src={item.reviewIcon} alt="Review Icon" className="w-4 sm:w-5 lg:w-6" />
                                       <span className="max-lg:text-xs">{item.review}</span>
                                    </div>
                                    <img src={item.tipIcon} className="mb-2 max-sm:w-4 max-lg:w-5" />
                                 </div>
                              )}
                              {item.replay && (
                                 <div className="flex justify-between items-center border-skill-hov border-b-2">
                                    <div className="flex gap-2 mb-2">
                                       <img src={item.replayIcon} alt="Replay Icon" className="w-4 sm:w-5 lg:w-6" />
                                       <span className="max-lg:text-xs">{item.replay}</span>
                                    </div>
                                    <img src={item.tipIcon} className="mb-2 max-sm:w-4 max-lg:w-5" />
                                 </div>
                              )}
                              {item.pricing && (
                                 <div className="flex justify-between items-center border-skill-hov border-b-2">
                                    <div className="flex gap-2 mb-2">
                                       <img src={item.pricingIcon} alt="Pricing Icon" className="w-4 sm:w-5 lg:w-6" />
                                       <span className="max-lg:text-xs">{item.pricing}</span>
                                    </div>
                                    <img src={item.tipIcon} className="mb-2 max-sm:w-4 max-lg:w-5" />
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>

                     <div className="mt-7">
                        <h3 className="text-sm lg:text-base font-semibold mb-3">{data.additionalFeature}</h3>

                        {data.additionalFeatures.map((features, index) => (
                           <div key={index}>
                              <h3 className="text-xs lg:text-sm mb-2">
                                 <span className="mr-2 font-semibold">
                                    {features.title}:
                                 </span>
                                 {features.description}
                              </h3>
                           </div>
                        ))}
                     </div>

                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};