import { useState, useEffect } from 'react';

export const Whychoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const interval = 3000;

  type WhyChooseData = {
    img: string;
    heading: string;
    text: string;
    notActive: string;
    active: string;
  };

  const WhyChoose: WhyChooseData[] = [
    {
      img: './instructors.png',
      heading: 'Expert Instructors',
      text: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      notActive: './expert.png',
      active: './active_expert.png',
    },
    {
      img: './curriculum.png',
      heading: 'Age Appropriate Curriculum',
      text: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      notActive: './age.png',
      active: './active_age.png',
    },
    {
      img: './interactive.png',
      heading: 'Interactive Learning',
      text: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      notActive: './learning.png',
      active: './active_learning.png',
    },
    {
      img: './convenients.png',
      heading: 'Convenient Online Learning',
      text: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      notActive: './convenient.png',
      active: './active_convenient.png',
    },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? 0 : index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % WhyChoose.length);
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto font-poppins hidden">
      <div>
        <h2 className="text-head-black font-bold max-sm:text-xl sm:text-[2.5rem] leading-[3rem] sm:mb-3">
          Why Choose <span className="text-hero-blue">Leadwinn?</span>
        </h2>
        <h3 className="max-sm:text-xs text-base text-head-black max-w-[20rem] sm:max-w-[30rem]">
          At Leadwinn, we're dedicated to providing the best online coding education for kids and teens. Here are the compelling reasons why you should choose us
        </h3>
      </div>

      <div className="flex pt-10">
        {WhyChoose.map((data, index) => (
          <div key={index} className="flex">
            <div className='w-1/2'>
            <img src={activeIndex === index ? data.img : ''} alt={data.heading} />
            </div>

            <div className='w-1/2'>
  <img src={activeIndex === index ? data.active : data.notActive} onClick={() => handleItemClick(index)} className='mb-7 w-10 flex mr-20' />
  {activeIndex === index && <h1 className='font-bold text-3xl text-head-black mb-7'>{data.heading}</h1>}
  {activeIndex === index && <h4 className='text-base'>{data.text}</h4>}
</div>
          </div>
        ))}
      </div>
    </div>
  );
};
