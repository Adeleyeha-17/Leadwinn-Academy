import { useState } from "react";

interface TeamMember {
  name: string;
  img: string;
  position: string;
}

export const Team = () => {
  const teamMember: TeamMember[] = [
    {
      name: "Adetokunbo Adeyemi",
      img: "./Tokunbo.png",
      position: "Business Manager",
    },
    {
      name: "Adesubomi Fetuga",
      img: "./Subomi.png",
      position: "International Facilitator",
    },
    {
      name: "Adedamola Adeleye",
      img: "./Adeleye.png",
      position: "International Facilitator",
    },
    {
      name: "Abdulbasit Oyesiji",
      img: "./Basit.png",
      position: "International Facilitator",
    },
    {
      name: "Joshua Owonla",
      img: "./Joshua.png",
      position: "Brand & Communication",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(teamMember[0].img);

  return (
    <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="text-center text-courses hover:text-hero-blue mb-10">
        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">Our Team</h1>
        <h4 className="text-xs sm:text-sm lg:text-base">Introducing the Dedicated Minds Powering Our Vision and Innovation"</h4>
      </div>

      <div className="flex max-sm:flex-col gap-5 lg:gap-10 sm:px-16 justify-center items-center">
        <div>
          {selectedImage && (
            <img src={selectedImage} className="w-[18.5rem] sm:w-[20rem] lg:w-[27.875rem]" alt="Selected Team Member" />
          )}
        </div>

        <div className="text-head-black  lg:mt-6">
          {teamMember.map((data, index) => (
            <div key={index} className="flex items-center gap-10 xl:gap-20 border-b-2 mb-3 sm:mb-1 lg:mb-5 cursor-pointer hover:text-hero-blue transition ease-in-out duration-300" onClick={() => setSelectedImage(data.img)}>
              <h1
                className="w-20 sm:w-18 lg:w-28 text-center text-sm lg:text-base xl:text-lg font-semibold mb-3"
              >
                {data.name}
              </h1>
              <h4 className="mb-3 w-28 lg:w-40 xl:w-48 text-xs lg:text-sm xl:text-base text-center">{data.position}</h4>

              <img src={selectedImage ? "LinkedIn.svg" : "LinkedInA.svg"}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
