export const Team = () => {

  interface TeamMember {
    name: string;
    img: string;
    position: string;
  }

  const teamMember: TeamMember[] = [
    {
      name: "Adetokunbo Adeyemi",
      img: "./Tokunbo.png",
      position: "Business Manager"
    },
    {
      name: "Adesubomi Fetuga",
      img: "./Subomi.png",
      position: "International Facilitator"
    },
    {
      name: "Adedamola Adeleye",
      img: "./Adeleye.png",
      position: "International Facilitator"
    },
    {
      name: "Abdulbasit Oyesiji",
      img: "./Basit.png",
      position: "International Facilitator"
    },
    {
      name: "Joshua Owonla",
      img: "./Joshua.png",
      position: "Brand & Communication"
    },
  ];

  return (
    <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="text-center text-courses mb-10">
        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">Our Team</h1>
        <h4 className="text-xs sm:text-sm lg:text-base">Introducing the Dedicated Minds Powering Our Vision and Innovation"</h4>
      </div>

      <div className="flex max-sm:flex-col gap-5 lg:gap-10 sm:px-16 justify-center items-center">
            <div>
            <img src='./Tokunbo.png' className="w-[18.5rem] sm:w-[20rem] lg:w-[27.875rem]" />
            </div>
            
            <div className="text-head-black lg:mt-6">
              {teamMember.map((data, index) => (
              <div key={index} className="flex items-center gap-10 xl:gap-20 border-b-2 mb-3 sm:mb-1 lg:mb-5">
                <h1 className="w-20 sm:w-18 lg:w-28 text-center text-sm lg:text-base xl:text-lg font-semibold mb-3">{data.name}</h1>
                <h4 className="mb-3 w-28 sm:w-24 lg:w-40 xl:w-48 text-xs lg:text-sm xl:text-base text-center">{data.position}</h4>

                <svg className="mb-3" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="1" width="39" height="39" rx="4.5" fill="white" />
                  <rect x="0.5" y="1" width="39" height="39" rx="4.5" stroke="#E5E7EB" />
                  <g clip-path="url(#clip0_725_4202)">
                    <path d="M23.9993 15.166H15.9993C15.263 15.166 14.666 15.763 14.666 16.4993V24.4993C14.666 25.2357 15.263 25.8327 15.9993 25.8327H23.9993C24.7357 25.8327 25.3327 25.2357 25.3327 24.4993V16.4993C25.3327 15.763 24.7357 15.166 23.9993 15.166Z" stroke="#0E2A4C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.334 19.834V23.1673" stroke="#0E2A4C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.334 17.834V17.8407" stroke="#0E2A4C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 23.1673V19.834" stroke="#0E2A4C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.6667 23.1673V21.1673C22.6667 20.8137 22.5262 20.4746 22.2761 20.2245C22.0261 19.9745 21.687 19.834 21.3333 19.834C20.9797 19.834 20.6406 19.9745 20.3905 20.2245C20.1405 20.4746 20 20.8137 20 21.1673" stroke="#0E2A4C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_725_4202">
                      <rect width="16" height="16" fill="white" transform="translate(12 12.5)" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              ))}
            </div>
          </div>
      </div>
  );
};
