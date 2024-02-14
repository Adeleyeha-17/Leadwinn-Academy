import { Link } from "react-router-dom"
import { enroll, empowering } from "../../assets/images"

export const IgnitingMind = () => {
  return (
    <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">

      <div className="text-heading text-sm lg:text-base">
        <h4 className="max-sm:w-[18rem] text-xl sm:text-2xl font-semibold">What You Need To Know About Leadwinn</h4>
        <p className="pt-5">At Leadwinn Academy, we pride ourselves on our commitment to excellence in education. With a track record spanning over 3 years, we have successfully trained over 100 students hailing from 10 countries worldwide. 
        </p>
        <p className="pt-3">
        Our dedication to quality education is reflected in the 50+ projects submitted by our students, showcasing their innovative thinking and practical skills. Moreover, our rigorous curriculum ensures that our students graduate with flying colors, earning over 100 certificates to date.
        </p>
        <p className="pt-3">
         With a remarkable 99% graduation rate, we're proud to say that our graduates consistently excel in their chosen fields, equipped with the knowledge and skills to thrive in today's competitive landscape.
        </p>
        <p className="pt-3">
          <Link to="/register" className="text-hero-blue">Join us</Link> at Leadwinn Academy and embark on a journey of learning and growth, where excellence is not just a goal but a reality for every student.
        </p>
      </div>

      <div className="flex max-sm:flex-col justify-center items-center gap-10 sm:px-16 py-10">
        <div className="text-heading sm:w-[22rem] xl:w-[24rem]">
          <h1 className="text-xl lg:text-3xl font-semibold mb-5 sm:mb-10 max-lg:w-[14rem]">Igniting Minds and Fostering <span className="text-hero-blue">Innovators</span></h1>
          <h4 className="text-sm xl:text-base">Leadwinn Academy passionately embraces a mission to kindle the sparks of curiosity and creativity in young minds through the realms of computer programming and software development. Our dedicated efforts are aimed at nurturing critical thinking and problem-solving skills, with the ultimate goal of transforming children, aged 6 to 17, into budding tech innovators and confident problem-solvers of the future</h4>
        </div>

        <div>
          <img src={enroll} className="w-[18.5rem] h-full lg:h-[35rem] lg:w-[27rem]" loading="eager" />
        </div>
      </div>

      <div className="flex max-sm:flex-col-reverse sm:justify-center sm:items-center gap-10 sm:px-16 max-sm:mt-5">
        <div>
          <img src={empowering} className="w-[18.5rem] h-full lg:w-[27rem] lg:h-[35rem] mx-auto" loading="eager" />
        </div>

        <div className="text-heading sm:w-[22rem]">
          <h1 className="text-xl lg:text-3xl font-bold mb-5 sm:mb-10 max-lg:w-[14rem]">Empowering the  <span className="text-hero-blue">Future of Technology</span></h1>
          <div className="text-sm xl:text-base">
            <h4 className="mb-5">Our Vision is to be the Premier Global Academy in Information Technology, Pioneering Excellence in Education, Innovation, and Leadership Worldwide.</h4>

            <h4>Our mission is to provide world-class education in information technology, foster innovation, cultivate ethical leadership, empower individuals to shape the future of technology, and promote global impact through excellence in education, research, and leadership development.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}