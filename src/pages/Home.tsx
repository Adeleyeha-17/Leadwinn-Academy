import Faq from "../components/Faq";
import Growth from "../components/Growth";
import Hero from "../components/Hero";
import Learning from "../components/Learning";
import Testimonial from "../components/Testimonial";


export const Home: React.FC = () => {

   return (
      <div className="bg-mobile sm:bg-desktop bg-contain bg-no-repeat">
         
         <Hero words={
               []
            }
            colors={
               []
            }/>

            <Learning />

            <Growth />

            <Testimonial/>

            <Faq/>


      </div>
   );
};
