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
  index: number;
  updateIndex: (newIndex: number) => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, activeIndex, updateIndex }) => {
  return (
    <div className="carousel-item w-full font-poppins">
      <div className="w-1/2">
        <img className="carousel-img" src={item.icon} alt={item.title} />
      </div>

      <div className="w-1/2">
        <div className="carousel-buttons">
          <div className="indicators">
            {Array.from({ length: 4 }).map((_, i) => (
              <button key={i} className="indicator-buttons" onClick={() => updateIndex(i)}>
                <span className={`${i === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                  radio_button_checked
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
