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

  const [toggle, setToggle] = useState(1)

  const toggleTab = (index: number) => {
    setToggle(index)
  }

  return (
    <div>

    <div className="bg-nav-blue py-10 flex gap-7 flex-col items-center justify-center font-poppins">
      <h4 className="text-heading text-xl font-semibold">Explore Different Learning Paths Within The Library</h4>

      <div className="flex space-x-6">
        {libraryNav.map((nav, index) => (
          <h4 onClick={() => toggleTab(index)} key={index} className={`px-7 py-2 text-sm rounded-3xl font-semibold cursor-pointer ${toggle === index ? "bg-hero-blue text-white" : "bg-white text-heading"}`}> {nav.link} </h4>
        ))}
      </div>
      </div>

      <div>

      <div className={toggle === 0 ? "block" : "hidden"}>

        SCRATCH

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
