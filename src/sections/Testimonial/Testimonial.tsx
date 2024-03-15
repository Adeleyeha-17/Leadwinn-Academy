import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImage } from "../../assets/images"
import "./testimonial.css"

export const Testimonial = () => {

   const testimonials = [
      {
         name: 'Mrs Enaworu',
         message: 'I like the idea that my son is interested in the course and looks forward to the weekly sessions. The Tutor is also very patient with the kids and ensure that the kids are not distracted but stayed focused on the session'
      },
      {
         name: 'Mrs Agbetosin',
         message: 'My child has learnt a lot of things in a very short period. The patient and dedication of the organization and tutor are amazing'
      },
      {
         name: 'Mrs Suzanne O.',
         message: 'My daughter enjoyed each session and was always looking forward to the next class'
      },
      {
         name: 'Mrs Adelopo E.',
         message: 'The classes are highly engaging. Teacher is very patient and loves to carry the students along. My son is always looking forward to the next class. It is great to see him channel his skills in a productive way'
      }, {
         name: 'Mrs Obaro',
         message: 'It taught my son how to be independent and create game by himself which made him really happy'
      }, {
         name: 'Mrs Abimbola 0.',
         message: 'Great Academy where kids can learn to make games independently'
      },
   ];

   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: "linear"


   };

   return (
      <div className="bg-gradient-to-tl from-test-gra-2 to-test-gra md:h-4/5 font-poppins text-white overflow-hidden relative">
         <div className='rounded-full w-12 h-12 md:bg-white md:bg-opacity-5 absolute top-6'></div>
         <div className='rounded-full w-14 h-14 md:bg-white md:bg-opacity-5 absolute right-9 bottom-28'></div>
         <div className='rounded-full w-40 h-40 md:bg-white md:bg-opacity-5 absolute top-20 xl:top-40 left-[25rem] xl:left-[37.5rem]'></div>
         <div className='rounded-full w-32 h-32 md:bg-white md:bg-opacity-5 absolute bottom-10 xl:bottom-20 left-10 xl:left-18'></div>
         <div className='rounded-full w-28 h-28 md:bg-white md:bg-opacity-5 absolute top-12 xl:top-32 right-40'></div>
         <div className='rounded-full w-32 h-32 md:bg-white md:bg-opacity-5 absolute right-40 bottom-4'></div>
         <div className='rounded-full w-20 h-20 md:bg-white md:bg-opacity-5 absolute top-62 left-96 right-96'></div>
         <div className='rounded-full w-20 h-20 md:bg-white md:bg-opacity-5 absolute left-52 top-40'></div>
         <div className='rounded-full w-10 h-10 md:bg-white md:bg-opacity-5 absolute top-6 right-12'></div>

         <div className="py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
            <div>
               <h1 className="text-xl lg:text-3xl font-semibold mb-3 lg:mb-12 text-center sm:text-left z-10">What Parent's Are Raving About!</h1>
            </div>

            <div className="grid sm:grid-cols-2 items-center mb-10">
               <div className='max-sm:mb-5'>
                  <img src={sliderImage} alt="slider Image" className="h-full max-sm:w-4/5 xl:w-11/12 max-sm:mx-auto" loading='lazy'/>
               </div>

               <div className='md:bg-white font-poppins md:bg-opacity-30 rounded-lg h-32 sm:h-40 lg:h-48 xl:h-60 max-sm:w-72 max-lg:px-5 flex items-center justify-center max-sm:mx-auto sm:-ml-12 md:-ml-10 xl:-ml-20 '>
                  <Slider {...sliderSettings} className='w-full sm:w-4/5 lg:w-10/12'>
                     {
                        testimonials.map((testimonial, index) => (
                           <div key={index}
                              className='py-2 xl:py-5'>
                              <p className="text-xs lg:text-sm max-sm:mb-3 sm:mb-2 lg:mb-4 max-sm:pt-3 xl:pt-10 text-center">
                                 {
                                    `"${testimonial.message
                                    }"`
                                 }</p>
                              <h3 className="text-xs lg:text-base xl:text-xl sm:max-xl:pt-6 xl:pt-12 font-semibold flex items-center justify-center">
                                 {
                                    testimonial.name
                                 }</h3>
                           </div>
                        ))
                     } </Slider>
               </div>
            </div>
         </div>
      </div>
   )
}
