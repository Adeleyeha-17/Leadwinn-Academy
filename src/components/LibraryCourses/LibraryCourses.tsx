import { useState } from 'react';
import { scratchAdvanced, scratchIntermediate, scratchBasic, webAdvanced, webIntermediate, webBasic } from '../../assets/videos';

export const LibraryCourses = () => {

  type libraryNav = {link: string};

  const libraryNav: libraryNav[] = [{link: 'Scratch'},{link: 'MIT'},{link: 'Roblox'},{link: 'UI/UX Design'},{link: 'Web Development'},{link: 'Python Programming'}];

  const [toggle, setToggle] = useState(0)
  const toggleTab = (index: number) => {
    setToggle(index)
  }

  return (
    <div className='font-poppins text-center'>
      <h4 className="bg-nav-blue text-heading text-base sm:text-xl font-semibold pt-10 pb-5">Explore Different Learning Paths Within The Library</h4>
      <div className="bg-nav-blue pb-10 flex gap-7 flex-col items-center justify-center max-lg:overflow-x-auto">
        <div className="flex space-x-6">
          {libraryNav.map((nav, index) => (
            <h4 onClick={() => toggleTab(index)} key={index} className={`ml-[34rem] sm:ml-[13rem] md:ml-[20rem] lg:ml-0 w-max px-7 py-2 text-xs md:text-sm rounded-3xl font-semibold cursor-pointer ${toggle === index ? "bg-hero-blue text-white" : "bg-white text-heading"}`}>{nav.link}</h4>
          ))}
        </div>
      </div>

      <div>

        <div className={toggle === 0 ? "block" : "hidden"}>
          <div className='text-heading  flex gap-3 py-10 sm:py-20 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-[0.8rem] xl:text-base'>Delve into coding basics with Basic Scratch, tailored for beginners aged 6 and up. It instills block-based programming skills, fostering logical thinking and problem-solving.</p>
            <video src={scratchBasic} autoPlay loop muted className='mt-10 max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading flex py-10 sm:py-20 gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-[0.8rem] xl:text-base'>Level up your coding skills with Intermediate Scratch, tailored for ages 7 and above. Dive deeper into project-based learning, collaborative coding, and advanced challenges to enhance creativity and problem-solving.</p>
              <video src={scratchIntermediate} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-[0.8rem] xl:text-base'>Master advanced Scratch coding for ages 8+. Go beyond basics, explore advanced concepts, algorithmic design, and project development. Unleash your coding potential.</p>
              <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 1 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Geared towards beginners aged 6+, our Basic MIT App Inventor course introduces the fundamentals of mobile application interface design. Discover the basics of MIT App Inventor, unlocking the creativity to design simple and interactive mobile apps.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Take your mobile app design skills to the next level with our Intermediate course, designed for learners aged 7+. Engage in project-based learning and collaborative design experiences, gaining proficiency in creating more complex and feature-rich mobile applications.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Master the art of mobile app interface design with our Advanced MIT App Inventor course. Tailored for learners aged 8+, this program delves into advanced concepts, algorithmic design, and comprehensive project development. Unleash your creativity and become proficient in designing sophisticated and innovative mobile applications.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 2 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Perfect for beginners aged 8+, the Basic 3D Roblox Design course introduces the fundamentals of creating immersive 3D experiences within the Roblox universe. Dive into the basics of 3D game design, character modeling, and world building.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Level up your 3D Roblox design skills with our Intermediate course, designed for learners aged 9+. Engage in project-based learning, collaborative 3D design experiences, and explore advanced features to enhance your ability to create three-dimensional and engaging game environments.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Become a master of 3D Roblox design with our Advanced course, crafted for learners aged 10+. Delve into advanced 3D design concepts, scripting for immersive experiences, and comprehensive project development. Unleash your creativity and master the art of creating intricate and visually stunning 3D environments within the Roblox universe.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='max-sm:w-[21.1rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 3 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Ideal for beginners aged 9+, our Basic UI/UX Design course introduces the fundamentals of user interface and user experience design. Dive into the basics of creating visually appealing and user-friendly designs, laying the foundation for intuitive digital experiences.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Elevate your UI/UX design skills with our Intermediate course, designed for learners aged 10+. Engage in project-based learning, collaborative design experiences, and explore advanced techniques to enhance user interactions and overall design aesthetics.</p>
            <video src={scratchAdvanced} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>
              <p>Become a UI/UX design expert with our Advanced course, crafted for learners aged 11+.</p>
              Delve into advanced design concepts, user research methodologies, and comprehensive project development. Unleash your creativity and master the art of creating seamless and user-centric digital experiences.</p>
              <video src={scratchAdvanced} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 4 ? "block" : "hidden"}>
          <div className='text-heading h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Tailored for beginners aged 9+, the Basic Front-End Web Development course introduces the fundamentals of building a visually appealing website. Dive into HTML for structure, CSS for styling, and basic JavaScript for interactivity.</p>
              <video src={webBasic} autoPlay loop muted className='w-[21.1rem] sm:w-[55.6rem] h-max sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>

          <div className='bg-nav-blue text-heading h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Elevate your front-end web development skills with our Intermediate course, designed for learners aged 10+. Engage in project-based learning, collaborative coding experiences, and explore advanced techniques in HTML, CSS, and JavaScript to create dynamic and responsive user interfaces.</p>
              <video src={webIntermediate} autoPlay loop muted className='w-[21.1rem] sm:w-[55.6rem] h-auto sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>

          <div className='bg-head-black text-white h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[57rem]  text-[0.8rem] xl:text-base'>Become a front-end web development expert with our Advanced course, crafted for learners aged 11+.
              Delve into advanced concepts of HTML, CSS, and JavaScript, mastering the art of creating sophisticated and interactive web applications with a focus on front-end development.</p>
              <video src={webAdvanced} autoPlay loop muted className='w-[21.1rem] sm:w-[55.6rem] h-auto sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>
        </div>

        <div className={toggle === 5 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>Ideal for beginners aged 10+, our Basic Python Programming course introduces the fundamentals of coding with Python. Dive into basic syntax, data structures, and problem-solving, laying the foundation for understanding the power of Python.</p>
              <video src={scratchIntermediate} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>
              <p>Elevate your Python programming skills with our Intermediate course, designed for learners aged 11+.</p>
              Engage in project-based learning, collaborative coding experiences, and explore advanced topics such as algorithms and data manipulation to enhance your proficiency in Python programming.</p>
              <video src={scratchIntermediate} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(12+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem]  text-[0.8rem] xl:text-base'>
              <p>Become a Python programming expert with our Advanced course, crafted for learners aged 12+.</p>
              Delve into advanced concepts, object-oriented programming, and comprehensive project development. Unleash your creativity and master the art of leveraging Python for complex problem-solving and software development.</p>
              <video src={scratchIntermediate} autoPlay loop muted className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>
        </div>
      </div>
    </div>

  )
}
