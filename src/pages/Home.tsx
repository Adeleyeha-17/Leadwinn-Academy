import Faq from "../components/Faq";
import Goal from "../components/Goal";
import Growth from "../components/Growth";
import Hero from "../components/Hero";
import Learning from "../components/Learning";
import Testimonial from "../components/Testimonial";
import Whychoose from "../components/Whychoose";


export const Home: React.FC = () => {

   return (
      <div className="bg-mobile sm:bg-desktop bg-contain bg-no-repeat">
         
         <Hero words={
               []
            }
            colors={
               []
            }/>

             <Whychoose /> 

            <Learning /> 


            <Goal />

            <Growth />

            <Testimonial/>

            <Faq/> 


      </div>
   );
};
