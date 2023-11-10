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
    <div className="carousel-item w-full font-poppins">
      <div className="w-1/2">
        <img className="carousel-img" src={item.icon} alt={item.title} />
      </div>

      <div className="w-1/2">
        <div className="carousel-buttons">
          <div className="indicators">
            {Icons.map((icon, i) => (
              <button key={i} className="indicator-buttons" onClick={() => updateIndex(i)}>
                <span className={`${i === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                  <img src={i === activeIndex ? icon.active : icon.notActive} alt="" />
                </span>
              </button>
            ))}
          </div>
        </div>
        <h1 className="w-[50rem] whitespace-normal text-3xl">{item.description}</h1>
      </div>
    </div>
  );
};

export default CarouselItem;
