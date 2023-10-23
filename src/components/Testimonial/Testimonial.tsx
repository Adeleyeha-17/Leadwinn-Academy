import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: "linear"


   };

   return (
      <div className="bg-gradient-to-tl from-test-gra-2 to-test-gra h-[200px] md:h-[320px] lg:h-[440px] xl:h-[550px] font-poppins flex flex-col md:justify-center max-sm:px-10 max-sm:py-8 md:p-36 text-white overflow-hidden ">

         <div>
            <h1 className="text-xs md:text-base lg:text-2xl font-bold mb-3 md:mb-6 ">What are the parents saying?</h1>
         </div>

         <div className="grid grid-cols-2 items-center mb-10">
            <div>
               <img src="./sliderImg.svg" alt="slider Image" className="hidden md:flex md:w-4/5"/>
            </div>

            <div className='bg-white font-poppins bg-opacity-10 rounded-lg h-32 md:h-40 lg:h-52 xl:h-72 w-full flex items-center justify-center md:-ml-10 lg:-ml-24 xl:-ml-40'>
               <Slider {...sliderSettings} className='w-full lg:w-4/5'>
                  {
                  testimonials.map((testimonial, index) => (
                     <div key={index}
                        className='md:py-2 xl:py-5'>
                        <p className="text-xs lg:text-sm xl:text-base md:mb lg:mb-12 flex items-center justify-center">
                           {
                           `"${
                              testimonial.message
                           }"`
                        }</p>
                        <h3 className="text-xs lg:text-sm xl:text-base xl:pt-12 flex items-center justify-center">
                           {
                           testimonial.name
                        }</h3>
                     </div>
                  ))
               } </Slider>
            </div>
         </div>
      </div>

   )
}
