import DesktopPlans from "../DesktopPlans";
import MobilePlans  from "../MobilePlans";

export const SelectedPlans = () => {

   
   return (
      <div className="bg-skill h-full font-poppins max-sm:px-5 py-20 sm:px-10 flex flex-col gap-10 justify-center sm:items-center">
         <div className="text-heading flex flex-col justify-center items-center gap-1 sm:mb-4">
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold ">Select Your Preferred Plan</h3>
            <h5 className="max-sm:text-xs max-lg:text-sm text-center">Choose the Perfect Subscription for Personalized Growth with Leadwinn</h5>
         </div>

         <MobilePlans />
         
         <DesktopPlans />
      </div>
   );
}; 