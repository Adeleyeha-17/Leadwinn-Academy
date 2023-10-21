import Faq from "../components/Faq";
import Hero from "../components/Hero";
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

         <Testimonial/>

         <Faq/>


      </div>
   );
};
