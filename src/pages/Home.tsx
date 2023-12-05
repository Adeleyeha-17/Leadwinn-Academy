import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Goal from "../components/Goal";
import Growth from "../components/Growth";
import Hero from "../components/Hero";
import Learning from "../components/Learning";
import Testimonial from "../components/Testimonial";
import Whychoose from "../components/Whychoose";
import { motion } from "framer-motion";


export const Home: React.FC = () => {

   return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="bg-mobile sm:bg-desktop bg-contain bg-no-repeat">
         
         <Hero words={
               []
            }
            />

             <Whychoose /> 

            <Learning /> 


            <Goal />

            <Courses />

            <Growth />

            <Testimonial/>

            <Faq/> 


      </motion.div>
   );
};
