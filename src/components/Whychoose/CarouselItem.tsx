import React from "react";
import notactiveexpertImage from '../../assets/expert.png'
import activeexpertImage from '../../assets/active_expert.png'
import notactiveageImage from '../../assets/age.png'
import activeageImage from '../../assets/active_age.png'
import notactiveinteractiveImage from '../../assets/learning.png'
import activeinteractiveImage from '../../assets/active_learning.png'
import notactiveconvenientsImage from '../../assets/convenient.png'
import activeconvenientsImage from '../../assets/active_convenient.png'

interface CarouselItemProps {
  item: {
    title: string;
    description: string;
    icon: string;
  };
  activeIndex: number;
  updateIndex: (newIndex: number) => void;
}

interface Icon {
  notActive: string;
  active: string;
}

const Icons: Icon[] = [
  {
    notActive: notactiveexpertImage,
    active: activeexpertImage
  },
  {
    notActive: notactiveageImage,
    active: activeageImage,
  },
  {
    notActive: notactiveinteractiveImage,
    active: activeinteractiveImage,
  },
  {
    notActive: notactiveconvenientsImage,
      active: activeconvenientsImage,
  }
];

const CarouselItem: React.FC<CarouselItemProps> = ({ item, activeIndex, updateIndex }) => {
  return (
    <div className="inline-flex max-md:flex-col justify-center bg-white w-full font-poppins px-5 sm:max-lg:px-12 lg:px-0">
      <div className="xl:px-40">
        <img src={item.icon} alt={item.title} />
      </div>

      <div className="w-1/2 max-sm:flex max-sm:flex-col-reverse">
        <div className="cursor-pointer border-none">
          <div className="flex items-center justify-start space-x-5 mb-4">
            {Icons.map((icon, i) => (
              <button key={i} className="m-1 bg-none max-sm:mt-4" onClick={() => updateIndex(i)}>
                <span>
                  <img src={i === activeIndex ? icon.active : icon.notActive} />
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-[20rem] sm:w-[23rem] lg:w-[25rem] xl:w-[41rem]">
              <h1 className="mb-2 text-lg xl:text-3xl font-bold text-head-black">{item.title}</h1>
        <h1 className=" whitespace-normal text-xs sm:text-base">{item.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
