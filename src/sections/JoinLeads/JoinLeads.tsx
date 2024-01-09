import { careerBg } from "../../assets/images"
import { joinLeft, joinRight } from "../../assets/images"


export const JoinLeads = () => {
  const joinStyle = {
    background: `url(${careerBg})`,
  };

  return (
    <div>
      <div className="w-full h-[32rem] bg-cover bg-center py-20 pl-52" style={joinStyle}>
        <div className="bg-white text-home-gra opacity-80 w-[39rem] h-[22rem] rounded-2xl py-[3.75rem] px-10">
          <h5 className="text-lg font-semibold w-72 mb-4">Curious About What Leadwinn Has To Offer?</h5>

          <p className="text-base font-normal w-[30rem] mb-10">
          Explore our comprehensive brochure to uncover the learning map, detailed information, and the exciting opportunities that await you on your educational journey with Leadwinn.
          </p>

          <a download="" href="" className="inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer">
          Download Brochure
        </a>
        </div>
      </div>


      <div className="bg-skill-hov w-full h-[65.4rem] relative">
      <img src={joinLeft} className="absolute left-0 z-10"/>
      <img src={joinRight} className="absolute right-0 z-10"/>
      </div>
    </div>
  );
};
