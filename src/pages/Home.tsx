import DownloadBrochure from "../components/DownloadBrochure";
import Faq from "../components/Faq";
import { Courses, Goal, Hero, Instructors, Testimonial, Whychoose } from "../sections"
import { motion } from "framer-motion";


export const Home: React.FC = () => {

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="bg-mobile sm:bg-desktop bg-contain bg-no-repeat">

         <Hero words={ [] }/>

         <DownloadBrochure />

         <Goal />

         <Courses />

         <Whychoose />

         <Instructors />

         <Testimonial />

         <Faq />


      </motion.div>
   );
};
