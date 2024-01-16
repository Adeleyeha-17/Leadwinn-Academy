import { useState } from 'react';

export const LibraryCourses = () => {

  type libraryNav = {
    link: string;
  };

  const libraryNav: libraryNav[] = [
    {
      link: '',
    },
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

  const [toggle, setToggle] = useState(1)

  const toggleTab = (index: number) => {
    setToggle(index)
  }

  return (
    <div>


      <h4 className="bg-nav-blue text-heading text-center text-base sm:text-xl font-semibold pt-10 pb-5">Explore Different Learning Paths Within The Library</h4>
    <div className="bg-nav-blue pb-10 flex gap-7 flex-col items-center justify-center font-poppins max-lg:overflow-x-auto">

      <div className="flex space-x-6">
        {libraryNav.map((nav, index) => (
          <h4 onClick={() => toggleTab(index)} key={index} className={`max-sm:mr-[28rem] w-max px-7 py-2 text-xs md:text-sm rounded-3xl font-semibold cursor-pointer ${toggle === index ? "bg-hero-blue text-white" : "bg-white text-heading"}`}> {nav.link} </h4>
          ))}
          </div>
      </div>

      <div>

      <div className={toggle === 1 ? "block" : "hidden"}>

        SCRATCH

      </div>

      <div className={toggle === 2 ? "block" : "hidden"}>

        MIT

      </div>


      <div className={toggle === 3 ? "block" : "hidden"}>

        ROBLOX

      </div>

      <div className={toggle === 4 ? "block" : "hidden"}>

        UI/UX DESIGN

      </div>

      <div className={toggle === 5 ? "block" : "hidden"}>

        WEB DEVELOPMENT

      </div>

      <div className={toggle === 6 ? "block" : "hidden"}>

        PYTHON PROGRAMMING

      </div>
    </div>
    </div>

  )
}
