import React from "react";
import { expert, activeExpert, age, activeAge, learning, activeLearning, convenient, activeConvenient } from '../../assets/images'

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
    notActive: expert,
    active: activeExpert
  },
  {
    notActive: age,
    active: activeAge,
  },
  {
    notActive: learning,
    active: activeLearning,
  },
  {
    notActive: convenient,
      active: activeConvenient,
  }
];

const CarouselItem: React.FC<CarouselItemProps> = ({ item, activeIndex, updateIndex }) => {
  return (
    <div className="inline-flex max-md:flex-col justify-center bg-white w-full font-poppins px-5 sm:max-lg:px-12 lg:px-0">
      <div className="xl:px-24">
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
              <h1 className="mb-2 text-lg xl:text-2xl font-bold text-head-black">{item.title}</h1>
        <h1 className=" whitespace-normal text-xs sm:text-base xl:w-[30rem]">{item.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
