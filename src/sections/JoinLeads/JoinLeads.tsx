import { careerBg, joinLeft, joinRight, joinTop, joinBottom } from "../../assets/images"
import { Link } from "react-router-dom"


export const JoinLeads = () => {
  const joinStyle = {
    background: `url(${careerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const joinStyleImgTop = {
    background: `url(${joinTop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const joinStyleImgBottom = {
    background: `url(${joinBottom})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }


  return (
    <div>
      <div className="w-full h-[16rem] sm:h-[23rem] lg:h-[27rem] xl:h-[32rem] py-4 sm:py-16 xl:py-20 pl-12 sm:pl-16 lg:pl-24 xl:pl-52 overflow-hidden font-poppins" style={joinStyle}>
        <div className="bg-white text-home-gra opacity-80 w-[18rem] sm:w-[28rem] lg:w-[36rem] xl:w-[39rem] h-[13.8rem] sm:h-[15rem] lg:h-[19rem] xl:h-[22rem] rounded-2xl py-5 sm:py-[1.4rem] lg:py-[2.8rem] xl:py-[3.75rem] px-5 sm:px-10">
          <h5 className="text-sm sm:text-base lg:text-lg font-semibold w-56 sm:w-64 lg:w-72 mb-2 sm:mb-4">Curious About What Leadwinn Has To Offer?</h5>

          <p className="text-xs sm:text-sm lg:text-base font-normal w-[16rem] sm:w-[24rem] lg:w-[32rem] xl:w-[34rem] mb-3 sm:mb-5 lg:mb-10">
          Explore our comprehensive brochure to uncover the learning map, detailed information, and the exciting opportunities that await you on your educational journey with Leadwinn.
          </p>

          <a download="" href="" className="inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer">
          Download Brochure
        </a>
        </div>
      </div>


      <div className="bg-skill-hov w-full h-[42rem] sm:h-[65.4rem] relative overflow-hidden">
      <img src={joinLeft} className="absolute left-0 max-xl:w-72 max-xl:h-full"/>
      <img src={joinRight} className="absolute -right-2 xl:-right-8 max-xl:w-72 max-xl:h-full"/>

<div className="pt-20">
      <div className="text-center mb-[2.5rem]">
        <h3 className="text-heading text-4xl font-bold pb-1">Join a <span className="text-hero-blue">Lead</span></h3>
        <p className="text-heading">Discover Our Career Opportunities</p>
      </div>

      <div className="text-white w-[22rem] sm:w-[39rem] xl:w-[45rem] h-[11rem] sm:h-[19.5rem] xl:h-[22.5rem] mx-auto mb-[1.8rem] flex flex-col justify-center items-center" style={joinStyleImgTop}>
        <h3 className="font-medium text-3xl pb-1">Students</h3>
        <p className="mb-10">Start out on your tech journey with Leadwinn</p>


      <Link to="/register" className={ `inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Get Started</Link>

      </div>

      <div className="text-white w-[22rem] sm:w-[39rem] xl:w-[45rem] h-[11rem] sm:h-[19.5rem] xl:h-[22.5rem] mx-auto flex flex-col justify-center items-center" style={joinStyleImgBottom}>
      <h3 className="font-medium text-3xl pb-1">Experienced Professionals</h3>
        <p className="mb-10">Looking to be a Leadwinn Facilitator ? </p>


      <Link to="" className={ `inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Send Us Your CV</Link>
      </div>
</div>
      </div>
    </div>
  );
};
