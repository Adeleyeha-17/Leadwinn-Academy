import DownloadBrochure from "../components/DownloadBrochure";
import Faq from "../components/Faq";
import { Courses, Goal, Growth, Hero, Testimonial, Whychoose } from "../sections"
import { motion } from "framer-motion";


export const Home: React.FC = () => {

   return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="bg-mobile sm:bg-desktop bg-contain bg-no-repeat">
         
         <Hero words={
               []
            }
            />

             <Whychoose /> 

            <DownloadBrochure />

            <Goal />

            <Courses />

            <Growth />

            <Testimonial/>

            <Faq/> 


      </motion.div>
   );
};
