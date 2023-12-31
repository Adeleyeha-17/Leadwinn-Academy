import React, {useState} from "react";
import { expert, activeExpert, age, activeAge, learning, activeLearning, convenient, activeConvenient, instructors, curriculum, interactive, convenients } from '../../assets/images'
import Button from "../../components/Button";


interface Items {
  notActive: string;
  active: string;
  title: string;
    description: string;
    img: string;
}

const Items: Items[] = [
  {
    notActive: expert,
    active: activeExpert,
    title: "Expert Instructors",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      img: instructors,
  },
  {
    notActive: age,
    active: activeAge,
    title: "Age Appropriate Curriculum",
    description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
    img: curriculum,
  },
  {
    notActive: learning,
    active: activeLearning,
    title: "Interactive",
    description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
    img: interactive,
  },
  {
    notActive: convenient,
      active: activeConvenient,
      title: 'Convenient Online Learning',
      description: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      img: convenients,
  }
];


const CarouselItem: React.FC = () => {

  const [selected, setSelected] = useState<Items | null>(Items[0])

  return (
    <div className="inline-flex max-md:flex-col justify-center bg-white w-full font-poppins px-5 sm:max-lg:px-12 lg:px-0">
      <div className="xl:px-24">
        {selected && <img src={selected.img} alt={selected.title} />}
      </div>

      <div className="w-1/2 max-sm:flex max-sm:flex-col-reverse">
        <div className="cursor-pointer border-none">
          <div className="flex items-center justify-start space-x-5 mb-4">
            {Items.map((icon, i) => (
              <button key={i} className="m-1 bg-none max-sm:mt-4" onClick={() => setSelected(icon)}>
                <span>
                  <img src={selected === icon ? icon.active : icon.notActive} />
                </span>
              </button>
            ))}
          </div>
        </div>
        {selected && <div className="w-[20rem] sm:w-[23rem] lg:w-[25rem] xl:w-[41rem]">
               <h1 className="mb-2 text-lg xl:text-2xl font-bold text-heading">{selected.title}</h1>
        <h1 className=" whitespace-normal text-xs sm:text-base xl:w-[30rem]">{selected.description}</h1> 
        </div> }

        <div className=" mt-5 xl:mt-7">

        <Button path="/about" title="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
