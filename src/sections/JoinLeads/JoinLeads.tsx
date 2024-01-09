import { careerBg } from "../../assets/images"
import { joinLeft, joinRight } from "../../assets/images"


export const JoinLeads = () => {
  const joinStyle = {
    background: `url(${careerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="w-full h-[14rem] sm:h-[23rem] lg:h-[27rem] xl:h-[32rem] py-4 sm:py-16 xl:py-20 pl-12 sm:pl-16 lg:pl-24 xl:pl-52" style={joinStyle}>
        <div className="bg-white text-home-gra opacity-80 w-[18rem] sm:w-[28rem] lg:w-[35rem] xl:w-[39rem] h-[12rem] sm:h-[15rem] lg:h-[19rem] xl:h-[22rem] rounded-2xl py-4 sm:py-[1.9rem] lg:py-[3.75rem] px-5 sm:px-10">
          <h5 className="text-sm sm:text-base lg:text-lg font-semibold w-56 sm:w-64 lg:w-72 mb-2 sm:mb-4">Curious About What Leadwinn Has To Offer?</h5>

          <p className="text-xs sm:text-sm lg:text-base font-normal w-[16rem] sm:w-[24rem] lg:w-[30rem] mb-3 sm:mb-5 lg:mb-10">
          Explore our comprehensive brochure to uncover the learning map, detailed information, and the exciting opportunities that await you on your educational journey with Leadwinn.
          </p>

          <a download="" href="" className="inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer">
          Download Brochure
        </a>
        </div>
      </div>


      <div className="bg-skill-hov w-full h-[50rem] sm:h-[65.4rem] relative">
      <img src={joinLeft} className="absolute left-0 "/>
      <img src={joinRight} className="absolute right-0 "/>
      </div>
    </div>
  );
};
