import { useState } from "react";
import tokunboImage from "../../assets/Tokunbo.png"
import subomiImage from "../../assets/Subomi.png"
import adeleyeImage from "../../assets/Adeleye.png"
import basitImage from "../../assets/Basit.png"
import joshuaImage from "../../assets/Joshua.png"
import LinkedIn from "../../assets/LinkedIn.svg"
import LinkedInActive from "../../assets/LinkedInA.svg"
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  img: string;
  position: string;
  linkedin: string;
}

export const Team = () => {
  const teamMember: TeamMember[] = [
    {
      name: "Adetokunbo Adeyemi",
      img: tokunboImage,
      position: "Business Manager",
      linkedin: "https://www.linkedin.com/in/ade-ha17/"
    },
    {
      name: "Adesubomi Fetuga",
      img: subomiImage,
      position: "International Facilitator",
      linkedin: "https://www.linkedin.com/in/ade-ha17/"
    },
    {
      name: "Adedamola Adeleye",
      img: adeleyeImage,
      position: "International Facilitator",
      linkedin: "https://www.linkedin.com/in/ade-ha17/"
    },
    {
      name: "Abdulbasit Oyesiji",
      img: basitImage,
      position: "International Facilitator",
      linkedin: "https://www.linkedin.com/in/ade-ha17/"
    },
    {
      name: "Joshua Owonla",
      img: joshuaImage,
      position: "Brand & Communication",
      linkedin: "https://www.linkedin.com/in/ade-ha17/"
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(teamMember[0].img);

  return (
    <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="text-center text-courses mb-10">
        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">Our Team</h1>
        <h4 className="text-xs sm:text-sm lg:text-base">Introducing the Dedicated Minds Powering Our Vision and Innovation"</h4>
      </div>

      <div className="flex max-sm:flex-col gap-5 lg:gap-10 sm:px-16 justify-center items-center">
        <div>
          {selectedImage && (
            <img src={selectedImage} className="w-[18.5rem] sm:w-[20rem] lg:w-[27.875rem]" alt={selectedImage} />
          )}
        </div>

        <div className="text-head-black  lg:mt-6">
          {teamMember.map((data, index) => (
            <div key={index} className="flex items-center gap-10 xl:gap-20 border-b-2 mb-3 sm:mb-1 lg:mb-5 cursor-pointer hover:text-hero-blue transition ease-in-out duration-300" onMouseOver={() => setSelectedImage(data.img)} >
              <h1
                className="w-20 sm:w-18 lg:w-28 text-center text-sm lg:text-base xl:text-lg font-semibold mb-3"
              >
                {data.name}
              </h1>
              <h4 className="mb-3 w-28 lg:w-40 xl:w-48 text-xs lg:text-sm xl:text-base text-center">{data.position}</h4>

<Link to={data.linkedin}>
              <img src={selectedImage ? LinkedIn : LinkedInActive}/>
</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
