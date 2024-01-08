import { enroll, empowering } from "../../assets/images"

export const IgnitingMind = () => {
  return (
    <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="flex max-sm:flex-col justify-center items-center gap-10 sm:px-16">
        <div className="text-heading sm:w-[22rem] xl:w-[24rem]">
          <h1 className="text-xl lg:text-3xl font-semibold mb-5 sm:mb-10 max-lg:w-[14rem]">Igniting Minds and Fostering <span className="text-hero-blue">Innovators</span></h1>
          <h4 className="text-xs xl:text-sm max-sm:pr-9 ">Leadwinn Academy passionately embraces a mission to kindle the sparks of curiosity and creativity in young minds through the realms of computer programming and software development. Our dedicated efforts are aimed at nurturing critical thinking and problem-solving skills, with the ultimate goal of transforming children, aged 6 to 17, into budding tech innovators and confident problem-solvers of the future</h4>
        </div>

        <div>
          <img src={enroll} className="w-[18.5rem] sm:w-[27rem]" />
        </div>
      </div>


      <div className="py-5 sm:py-20">
        <div className="bg-gradient-to-br from-[#0965CE] to-[#01152C] text-white sm:h-[10rem] w-1/2 sm:w-full rounded-[3.125rem] font-poppin mx-auto max-sm:mt-16 max-sm:py-10 flex justify-center items-center">
          <div className="items-center justify-evenly sm:flex sm:mt-3 w-full px-10 xl:px-20">

            <div className="flex flex-col mb-10 sm:mb-0 items-center justify-cennter gap-5 sm:mt-4">
              <h1 className="sm:max-lg:text-3xl text-4xl font-medium">100+</h1>
              <h4 className="w-[13rem] text-xs sm:max-lg:text-[0.65rem] text-center">Trained students across 10 countries</h4>
            </div>
            <div className="w-16 lg:w-40 mb-8 sm:mb-0 border-white border transform rotate-90 mx-auto rounded-lg"></div>

            <div className="flex flex-col mb-10 sm:mb-0 items-center justify-center gap-5">
              <h1 className="sm:max-lg:text-3xl text-4xl font-medium">50+</h1>
              <h4 className="w-[10rem] text-xs sm:max-lg:text-[0.65rem] text-center">projects submitted</h4>
            </div>

            <div className="w-16 lg:w-40 mb-8 sm:mb-0 border-white border transform rotate-90 mx-auto rounded-lg"></div>

            <div className="flex justify-center flex-col mb-8 sm:mb-0 items-center gap-5">
              <h1 className="sm:max-lg:text-3xl text-4xl font-medium">100+</h1>
              <h4 className="w-[10rem] text-xs sm:max-lg:text-[0.65rem] text-center">certificates earned</h4>
            </div>

            <div className="w-16 lg:w-40 mb-8 sm:mb-0 border-white border transform rotate-90 mx-auto rounded-lg"></div>

            <div className="flex justify-center flex-col mb-8 sm:mb-0 items-center gap-5">
              <h1 className="sm:max-lg:text-3xl text-4xl font-medium">99%</h1>
              <h4 className="w-[13rem] text-xs sm:max-lg:text-[0.65rem] text-center">of graduates recorded</h4>
            </div>
          </div>

        </div>
      </div>


      <div className="flex max-sm:flex-col-reverse sm:justify-center sm:items-center gap-10 sm:px-16 max-sm:mt-5">
        <div>
          <img src={empowering} className="w-[18.5rem] sm:w-[27rem] mx-auto" />
        </div>

        <div className="text-heading sm:w-[22rem]">
          <h1 className="text-xl lg:text-3xl font-bold mb-5 sm:mb-10 max-lg:w-[14rem]">Empowering the  <span className="text-hero-blue">Future of Technology</span></h1>
          <div className="text-xs xl:text-sm max-sm:pr-10">
            <h4 className="mb-5">Our Vision is to be the Premier Global Academy in Information Technology, Pioneering Excellence in Education, Innovation, and Leadership Worldwide.</h4>

            <h4>Our mission is to provide world-class education in information technology, foster innovation, cultivate ethical leadership, empower individuals to shape the future of technology, and promote global impact through excellence in education, research, and leadership development.
            </h4>
          </div>
        </div>

      </div>
    </div>
  )
}