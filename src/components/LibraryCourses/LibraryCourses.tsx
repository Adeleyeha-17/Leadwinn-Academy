import { useState } from 'react';

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
       <div className='h-[45.5rem] flex gap-3 flex-col items-center justify-center'>
            <h4 className='text-heading text-base sm:text-2xl font-semibold'>Basic Scratch <span className='text-sm sm:text-xl text-[#999999] font-medium'>(6+ Years)</span></h4>

            <p className='w-[22rem] sm:w-[46rem] xl:w-[57rem] text-center text-heading text-[0.8rem] xl:text-base'>Embark on a coding adventure with Leadwinn's MIT classes, specially crafted for young minds aged 6 to 8. Our program is designed to ignite curiosity and provide a solid foundation in computer science principles. Through engaging activities and hands-on learning, we inspire creativity and set the stage for a future filled with technological innovation.</p>
       
       <div className='w-[22rem] sm:w-[40rem] lg:w-[50rem] xl:w-[58rem] h-[23rem] mt-10 rounded-3xl border-4 border-blue-900'>

       </div>
       </div>

          {/* Intermediate Scratch */}


           {/* Advanced Scratch */}
       
      </div>

      <div className={toggle === 1 ? "block" : "hidden"}>

        MIT

      </div>


      <div className={toggle === 2 ? "block" : "hidden"}>

        ROBLOX

      </div>

      <div className={toggle === 3 ? "block" : "hidden"}>

        UI/UX DESIGN

      </div>

      <div className={toggle === 4 ? "block" : "hidden"}>

        WEB DEVELOPMENT

      </div>

      <div className={toggle === 5 ? "block" : "hidden"}>

        PYTHON PROGRAMMING

      </div>
    </div>
    </div>

  )
}
