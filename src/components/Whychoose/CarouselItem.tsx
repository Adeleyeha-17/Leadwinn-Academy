import React from "react";

interface CarouselItemProps {
  item: {
    title: string;
    description: string;
    icon: string;
    notActive: string;
    active: string;
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
    notActive: './expert.png',
    active: './active_expert.png',
  },
  {
    notActive: './age.png',
    active: './active_age.png',
  },
  {
    notActive: './learning.png',
    active: './active_learning.png',
  },
  {
    notActive: './convenient.png',
    active: './active_convenient.png',
  }
];

const CarouselItem: React.FC<CarouselItemProps> = ({ item, activeIndex, updateIndex }) => {
  return (
    <div className="inline-flex max-lg:flex-col justify-center bg-white w-full font-poppins px-5 sm:max-lg:px-12 lg:px-0">
      <div className="xl:px-40">
        <img src={item.icon} alt={item.title} />
      </div>

      <div className="w-1/2">
        <div className="cursor-pointer border-none">
          <div className="flex items-center justify-start space-x-5 mb-4">
            {Icons.map((icon, i) => (
              <button key={i} className="m-1 bg-none" onClick={() => updateIndex(i)}>
                <span>
                  <img src={i === activeIndex ? icon.active : icon.notActive} />
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-[20rem] sm:w-[35rem] lg:w-[25rem] xl:w-[41rem]">

              <h1 className="mb-2 text-lg xl:text-3xl font-bold text-head-black">{item.title}</h1>
        <h1 className=" whitespace-normal text-xs sm:text-base">{item.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
