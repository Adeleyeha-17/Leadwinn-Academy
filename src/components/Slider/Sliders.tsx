import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mitImage, mit, robloxImage, roblox, python, pythonImage, scratch, scratchImage, uiUx, uiImage, web, webImage } from "../../assets/images"


const Sliders = () => {

   type course = {
      img: string;
      heading: string;
      overlayImg: string;
   }

   const courses: course[] = [
      {
         img: mit,
         heading: "MIT",
         overlayImg: mitImage
      },
      {
         img: python,
         heading: "Python Programming",
         overlayImg: pythonImage
      }, {
         img: roblox,
         heading: "Roblox Design",
         overlayImg: robloxImage
      }, {
         img: scratch,
         heading: "Scratch",
         overlayImg: scratchImage
      }, {
         img: uiUx,
         heading: "UI/UX Design",
         overlayImg: uiImage
      }, {
         img: web,
         heading: "Web Development",
         overlayImg: webImage
      }
   ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.42,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear"

  };

  return (
    <Slider {...settings} className="grid sm:hidden slider">
      {courses.map((data, index) => (
        <div key={index} className="relative rounded-3xl overflow-hidden border-2 border-white">
          <img src={data.img} alt={data.heading} className="w-full h-full rounded-xl" />
          <motion.div
            animate={{ translateY: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
            className="absolute flex flex-col justify-center items-center gap-2 bg-courses bg-opacity-40 inset-0 text-white rounded-3xl rounded-t-none"
          >
            <h1 className="font-bold text-sm">{data.heading}</h1>
            <Link
              to="/register"
              className={`inline-block justify-center items-center py-3 px-6 bg-head-blue text-white text-xs rounded-3xl transition hover:bg-blue-800 ease-in-out duration-300`}
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
