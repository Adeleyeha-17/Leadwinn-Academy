import { useState } from 'react';
import { scratchAdvanced, scratchIntermediate, scratchBasic, webAdvanced, webIntermediate, webBasic } from '../../assets/videos';

export const LibraryCourses = () => {

  type libraryNav = {
    link: string;
  };

  const libraryNav: libraryNav[] = [
    {
      link: 'Scratch',
    },
    {
      link: 'MIT',
    },
    {
      link: 'Roblox',
    },
    {
      link: 'UI/UX Design',
    },
    {
      link: 'Web Development',
    },
    {
      link: 'Python Programming',
    },
  ];

  const [toggle, setToggle] = useState(0)

  const toggleTab = (index: number) => {
    setToggle(index)
  }



  return (
    <div className='font-poppins'>


      <h4 className="bg-nav-blue text-heading text-center text-base sm:text-xl font-semibold pt-10 pb-5">Explore Different Learning Paths Within The Library</h4>
      <div className="bg-nav-blue pb-10 flex gap-7 flex-col items-center justify-center max-lg:overflow-x-auto">

        <div className="flex space-x-6">
          {libraryNav.map((nav, index) => (
            <h4 onClick={() => toggleTab(index)} key={index} className={`ml-[34rem] sm:ml-[13rem] md:ml-[20rem] lg:ml-0 w-max px-7 py-2 text-xs md:text-sm rounded-3xl font-semibold cursor-pointer ${toggle === index ? "bg-hero-blue text-white" : "bg-white text-heading"}`}> {nav.link} </h4>
          ))}
        </div>
      </div>

      <div>

        <div className={toggle === 0 ? "block" : "hidden"}>

          {/*Beginners Scratch*/}
          <div className='text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Discover the fundamentals of coding with Basic Scratch. Ideal for beginners aged 6+, this course introduces young minds to the basics of block-based programming, fostering a solid foundation in logical thinking and problem-solving.</p>

            <div className='h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchBasic} autoPlay loop muted className='h-[16rem] sm:h-[30rem]'></video>
            </div>

          </div>

          {/* Intermediate Scratch */}
          <div className='bg-nav-blue text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Elevate your coding skills with Intermediate Scratch. Geared towards learners aged 7+, this course delves deeper into Scratch programming, emphasizing project-based learning and collaborative coding experiences. Enhance your creativity and problem-solving abilities as you embark on more advanced coding challenges</p>

            <div className='h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem]'></video>
            </div>

          </div>

          {/* Advanced Scratch */}
          <div className='bg-head-black text-white h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Master the art of Scratch coding with our Advanced Scratch course. Tailored for learners aged 8+, this program goes beyond the basics, focusing on advanced coding concepts, algorithmic design, and comprehensive project development. Unleash your potential and become a proficient Scratch coder ready to take on complex coding endeavors.</p>

            <div className='h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchAdvanced} autoPlay loop muted className='h-[16rem] sm:h-[30rem]'></video>
            </div>

          </div>
        </div>

        <div className={toggle === 1 ? "block" : "hidden"}>

          {/*Beginners MIT*/}
          <div className='text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Geared towards beginners aged 6+, our Basic MIT App Inventor course introduces the fundamentals of mobile application interface design. Discover the basics of MIT App Inventor, unlocking the creativity to design simple and interactive mobile apps.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Intermediate MIT */}
          <div className='bg-nav-blue text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(7+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Take your mobile app design skills to the next level with our Intermediate course, designed for learners aged 7+. Engage in project-based learning and collaborative design experiences, gaining proficiency in creating more complex and feature-rich mobile applications.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Advanced MIT */}
          <div className='bg-head-black text-white h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced MIT <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Master the art of mobile app interface design with our Advanced MIT App Inventor course. Tailored for learners aged 8+, this program delves into advanced concepts, algorithmic design, and comprehensive project development. Unleash your creativity and become proficient in designing sophisticated and innovative mobile applications.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

        </div>


        <div className={toggle === 2 ? "block" : "hidden"}>

          {/*Beginners Roblox*/}
          <div className='text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(8+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Perfect for beginners aged 8+, the Basic 3D Roblox Design course introduces the fundamentals of creating immersive 3D experiences within the Roblox universe. Dive into the basics of 3D game design, character modeling, and world building.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Intermediate Roblox */}
          <div className='bg-nav-blue text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Level up your 3D Roblox design skills with our Intermediate course, designed for learners aged 9+. Engage in project-based learning, collaborative 3D design experiences, and explore advanced features to enhance your ability to create three-dimensional and engaging game environments.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Advanced Roblox */}
          <div className='bg-head-black text-white h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Roblox <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Become a master of 3D Roblox design with our Advanced course, crafted for learners aged 10+. Delve into advanced 3D design concepts, scripting for immersive experiences, and comprehensive project development. Unleash your creativity and master the art of creating intricate and visually stunning 3D environments within the Roblox universe.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>


        </div>

        <div className={toggle === 3 ? "block" : "hidden"}>

          {/*Beginners UI/UX Design*/}
          <div className='text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Ideal for beginners aged 9+, our Basic UI/UX Design course introduces the fundamentals of user interface and user experience design. Dive into the basics of creating visually appealing and user-friendly designs, laying the foundation for intuitive digital experiences.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Intermediate UI/UX Design */}
          <div className='bg-nav-blue text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Elevate your UI/UX design skills with our Intermediate course, designed for learners aged 10+. Engage in project-based learning, collaborative design experiences, and explore advanced techniques to enhance user interactions and overall design aesthetics.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Advanced UI/UX Design */}
          <div className='bg-head-black text-white h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced UI/UX Design <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>
              <p>
                Become a UI/UX design expert with our Advanced course, crafted for learners aged 11+.
              </p>
              Delve into advanced design concepts, user research methodologies, and comprehensive project development. Unleash your creativity and master the art of creating seamless and user-centric digital experiences.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>


        </div>

        <div className={toggle === 4 ? "block" : "hidden"}>

          {/*Beginners Web*/}
          <div className='text-heading h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(9+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Tailored for beginners aged 9+, the Basic Front-End Web Development course introduces the fundamentals of building a visually appealing website. Dive into HTML for structure, CSS for styling, and basic JavaScript for interactivity.</p>

            <div className='mx-10  h-auto sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={webBasic} autoPlay loop muted className='h-max sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Intermediate Web */}
          <div className='bg-nav-blue text-heading h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Elevate your front-end web development skills with our Intermediate course, designed for learners aged 10+. Engage in project-based learning, collaborative coding experiences, and explore advanced techniques in HTML, CSS, and JavaScript to create dynamic and responsive user interfaces.</p>

            <div className='mx-10  h-auto sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={webIntermediate} autoPlay loop muted className='h-auto sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Advanced Web */}
          <div className='bg-head-black text-white h-[30rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Web Development <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[57rem] text-center text-[0.8rem] xl:text-base'>Become a front-end web development expert with our Advanced course, crafted for learners aged 11+.
              Delve into advanced concepts of HTML, CSS, and JavaScript, mastering the art of creating sophisticated and interactive web applications with a focus on front-end development.</p>

            <div className='mx-10  h-auto sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={webAdvanced} autoPlay loop muted className='h-auto sm:h-[30rem] '></video>
            </div>

          </div>

        </div>

        <div className={toggle === 5 ? "block" : "hidden"}>

          {/*Beginners Python*/}
          <div className='text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(10+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>Ideal for beginners aged 10+, our Basic Python Programming course introduces the fundamentals of coding with Python. Dive into basic syntax, data structures, and problem-solving, laying the foundation for understanding the power of Python.</p>

            <div className='h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem]'></video>
            </div>

          </div>

          {/* Intermediate Python */}
          <div className='bg-nav-blue text-heading h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Intermediate Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(11+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>
              <p>
                Elevate your Python programming skills with our Intermediate course, designed for learners aged 11+.
              </p>
              Engage in project-based learning, collaborative coding experiences, and explore advanced topics such as algorithms and data manipulation to enhance your proficiency in Python programming.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>

          {/* Advanced Python */}
          <div className='bg-head-black text-white h-[35rem] sm:h-[50rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-base sm:text-2xl font-semibold'>Advanced Python Programming <span className='text-sm sm:text-xl text-[#999999] font-medium'>(12+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[58rem] text-center text-[0.8rem] xl:text-base'>
              <p>
                Become a Python programming expert with our Advanced course, crafted for learners aged 12+.
              </p>
              Delve into advanced concepts, object-oriented programming, and comprehensive project development. Unleash your creativity and master the art of leveraging Python for complex problem-solving and software development.</p>

            <div className=' h-[16rem] sm:h-[30rem] mt-10 rounded-3xl border-4 border-blue-900 overflow-hidden '>
              <video src={scratchIntermediate} autoPlay loop muted className='h-[16rem] sm:h-[30rem] '></video>
            </div>

          </div>


        </div>
      </div>
    </div>

  )
}
