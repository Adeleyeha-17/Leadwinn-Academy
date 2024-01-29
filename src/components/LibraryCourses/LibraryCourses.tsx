import { useEffect, useState } from 'react';
import { scratchAdvanced, scratchIntermediate, scratchBasic, webAdvanced, webAdvancedVideo, webIntermediate, webBasic, webBasicVideo, pythongif, drawStar, mitAdvanced, mitIntermediate, mitBasic, robloxBasic, robloxIntermediate, robloxAdvanced } from '../../assets/videos';
 
export const LibraryCourses = () => {

  type libraryNav = {link: string};

  const libraryNav: libraryNav[] = [{link: 'Scratch'},{link: 'MIT'},{link: 'Roblox'},{link: 'UI/UX Design'},{link: 'Web Development'},{link: 'Python Programming'}];

  const [toggle, setToggle] = useState(0)
  const toggleTab = (index: number) => {
    setToggle(index)
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='font-poppins text-center'>
      <h4 className="bg-nav-blue text-heading text-base sm:text-xl font-semibold max-sm:px-5 pt-10 pb-5">Explore Different Learning Paths Within The Library</h4>
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
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-xs xl:text-base'>Delve into coding basics with Basic Scratch, tailored for beginners aged 6 and up. It instills block-based programming skills, fostering logical thinking and problem-solving.</p>
            <video src={scratchBasic} autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading flex py-10 sm:py-20 gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-xs xl:text-base'>Level up your coding skills with Intermediate Scratch, tailored for ages 7 and above. Dive deeper into project-based learning, collaborative coding, and advanced challenges to enhance creativity and problem-solving.</p>
              <video src={scratchIntermediate} autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[23rem] sm:w-[46rem] xl:w-[58rem] text-xs xl:text-base'>Master advanced Scratch coding for ages 8+. Go beyond basics, explore advanced concepts, algorithmic design, and project development. Unleash your coding potential.</p>
              <video src={scratchAdvanced} autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 1 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem]text-xs xl:text-base'>Ideal for beginners (ages 6+), our Basic MIT App Inventor course introduces mobile app interface design fundamentals. Explore MIT App Inventor basics, unlocking creativity for simple and interactive app design.</p>
            <img
          src={mitBasic}
          alt="MIT Basic"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Elevate your mobile app design skills with our Intermediate course (ages 7+). Engage in projects, collaborative design, and create feature-rich mobile applications.</p>
            <img
          src={mitIntermediate}
          alt="MIT Intermediate"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div> 

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Become a mobile app design expert with our Advanced MIT App Inventor course (ages 8+). Delve into advanced concepts, algorithmic design, and project development. Unleash your creativity, mastering innovative mobile app interfaces.</p>
            <img
          src={mitAdvanced}
          alt="MIT Advanced"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div>
        </div>

        <div className={toggle === 2 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Ideal for beginners (ages 8+), our Basic 3D Roblox Design course covers immersive 3D experiences in the Roblox universe. Learn basics of 3D game design, character modeling, and world building.</p>
             <img
          src={robloxBasic}
          alt="Roblox Basic"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Enhance your 3D Roblox design skills with our Intermediate course (ages 9+). Explore projects, collaborate on 3D designs, and master advanced features for creating engaging game environments.</p>
             <img
          src={robloxIntermediate}
          alt="Roblox Intermediate"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Master 3D Roblox design with our Advanced course (ages 10+). Explore advanced 3D concepts, immersive scripting, and project development, unleashing creativity for stunning environments in the Roblox universe.</p>
             <img
          src={robloxAdvanced}
          alt="Roblox Advanced"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
          </div>
        </div>

        <div className={toggle === 3 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Perfect for beginners aged 9+, our Basic UI/UX Design course covers fundamental principles. Learn to create visually appealing, user-friendly designs, building the foundation for intuitive digital experiences.</p>
            <video src="" autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>Enhance UI/UX skills with our Intermediate course for learners aged 10+. Engage in project-based learning, collaborative design, and explore advanced techniques for improved user interactions and design aesthetics.</p>
            <video src="" autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>
              Master UI/UX design with our Advanced course for learners aged 11+. Delve into advanced design concepts, user research, and project development to create seamless and user-centric digital experiences.</p>
              <video src="" autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900'></video>
          </div>
        </div>

        <div className={toggle === 4 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[58rem]  text-xs xl:text-base'>Tailored for beginners aged 9+, the Basic Front-End Web Development course introduces the fundamentals of building a visually appealing website. Dive into HTML for structure, CSS for styling, and basic JavaScript for interactivity.</p>
            {isMobile ? (
        <img
          src={webBasic}
          alt="Web Basic"
          className="w-[21.1rem] h-max mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
      ) : (
        <video
          src={webBasicVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="sm:w-[40rem] lg:w-[55.6rem] h-auto mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        ></video>
      )}
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem] xl:w-[58rem]  text-xs xl:text-base'>Enhance front-end web development skills with our Intermediate course for learners aged 10+. Engage in project-based learning, collaborative coding, and explore advanced techniques in HTML, CSS, and JavaScript for dynamic and responsive interfaces.</p>
              <video src={webIntermediate} autoPlay loop muted playsInline preload="auto" className='w-[21.1rem] sm:w-[40rem] lg:w-[55.6rem] h-auto sm:h-auto mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></video>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem]  text-xs xl:text-base'>Master front-end web development with our Advanced course for learners aged 11+. Dive into advanced HTML, CSS, and JavaScript concepts, creating interactive web applications with a focus on front-end development.</p>
              {isMobile ? (
        <img
          src={webAdvanced}
          alt="Web Advanced"
          className="w-[21.1rem] h-auto mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        />
      ) : (
        <video
          src={webAdvancedVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="sm:w-[40rem] lg:w-[55.6rem] h-auto mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden"
        ></video>
      )}
          </div>
        </div>

        <div className={toggle === 5 ? "block" : "hidden"}>
          <div className='text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>For beginners aged 10+, our Basic Python Programming course introduces Python fundamentals, covering syntax, data structures, and problem-solving. Build a strong foundation in Python.</p>
              <img src={pythongif} className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></img>
          </div>

          <div className='bg-nav-blue text-heading py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>
              Elevate your Python skills with our Intermediate course for ages 11+
              Explore projects, collaborative coding, and advanced topics like algorithms to enhance Python proficiency.</p>
              <img src={drawStar} className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden' ></img>
          </div>

          <div className='bg-head-black text-white py-10 sm:py-20 flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(12+ Years)</span></h4>
            <p className='w-[22rem] sm:w-[38rem] lg:w-[43rem]  xl:w-[57rem] text-xs xl:text-base'>
              Become a Python expert with our Advanced course for ages 12+.
              Delve into advanced concepts, object-oriented programming, and project development. Unleash your creativity, mastering Python for complex problem-solving and software development.</p>
              <img src="" className='w-[21.1rem] sm:w-[39.75rem] h-[16rem] sm:h-[30rem] mx-10 mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden'></img>

          </div>
        </div>
      </div>
    </div>

  )
}
