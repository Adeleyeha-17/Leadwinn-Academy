
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";



export const Home: React.FC = () => {
 
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-[400px] md:w-full absolute top-0 left-0 right-0 bottom-0 -z-10" viewBox="0 0 1440 843" fill="none">
        <path d="M0 0H1440V813.284C1229.5 658.095 148 1058 0 658.095V197V0Z" fill="#ECF5FF" />
      </svg>

      <Hero words={[]} colors={[]}/>

      <Testimonial />

      <Faq />
    </div>
  );
};

