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
      autoplaySpeed: 2500,
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: "linear"


   };

   return (
      <div className="relative bg-gradient-to-tl from-test-gra-2 to-test-gra md:h-[340px] lg:h-[440px] xl:h-4/5 font-poppins md:flex flex-col md:justify-center max-sm:px-10 max-sm:py-8 md:p-28 text-white overflow-hidden ">
         <div className='rounded-full w-12 h-12 md:bg-white md:bg-opacity-5 absolute top-6'></div>
         <div className='rounded-full w-14 h-14 md:bg-white md:bg-opacity-5 absolute right-9 bottom-28'></div>
         <div className='rounded-full w-40 h-40 md:bg-white md:bg-opacity-5 absolute top-20 xl:top-40 left-[400px] xl:left-[600px]'></div>
         <div className='rounded-full w-32 h-32 md:bg-white md:bg-opacity-5 absolute bottom-10 xl:bottom-20 left-10 xl:left-18'></div>
         <div className='rounded-full w-28 h-28 md:bg-white md:bg-opacity-5 absolute top-12 xl:top-32 right-40'></div>
         <div className='rounded-full w-32 h-32 md:bg-white md:bg-opacity-5 absolute right-40 bottom-4'></div>
         <div className='rounded-full w-20 h-20 md:bg-white md:bg-opacity-5 absolute top-62 left-96 right-96'></div>
         <div className='rounded-full w-20 h-20 md:bg-white md:bg-opacity-5 absolute left-52 top-40'></div>
         <div className='rounded-full w-10 h-10 md:bg-white md:bg-opacity-5 absolute top-6 right-12'></div>

         <div>
            <h1 className="text-sm md:text-base lg:text-2xl font-bold mb-3 md:mb-6 max-md:text-center z-10">What are the parents saying?</h1>
         </div>

         <div className="grid md:grid-cols-2 items-center mb-10">
            <div className='flex items-center justify-center max-sm:mb-5'>
               <img src="./sliderImg.svg" alt="slider Image" className="w-4/5"/>
            </div>

            <div className='md:bg-white font-poppins md:bg-opacity-30 rounded-lg h-32 md:h-40 lg:max-xl:h-52 xl:h-96 max-sm:w-72 max-lg:px-5 flex items-center justify-center md:-ml-12 lg:-ml-28'>
               <Slider {...sliderSettings} className='w-full lg:w-4/5'>
                  {
                  testimonials.map((testimonial, index) => (
                     <div key={index}
                        className='py-2 xl:py-5'>
                        <p className="text-xs lg:text-base xl:text-xl max-sm:mb-3 sm:mb-2 lg:mb-4 max-sm:pt-3 xl:pt-10 text-center">
                          {
                           `"${
                              testimonial.message
                           }"`
                        }</p>
                        <h3 className="text-xs lg:text-base xl:text-xl sm:max-xl:pt-6 xl:pt-12 font-bold flex items-center justify-center">
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
