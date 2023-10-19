import React, {useState} from 'react';

export const Faq: React.FC = () => {
   const [activeAccordion, setActiveAccordion] = useState(0);

   const toggleTab = (index : number) => {
      setActiveAccordion(index === activeAccordion ? 0 : index);
   };

   const accordionData = [
      {
         title: 'What is Leadwinn',
         content: 'Leadwinn is an online learning platform that offers coding and technology education for kids aged 6-17. We provide interactive classes to help children learn coding skills in a fun and engaging way.'
      }, {
        title: 'How can I get started with Leadwinn',
         content: 'To get started, simply visit our website, explore our course offerings, and sign up for a trial class. Our team is here to assist you every step of the way.'
      },  {
        title: 'How do online class work',
        content: 'Our online classes are conducted live by experienced instructors. Students can join from the comfort of their homes using a PC. Classes are interactive, and students can ask questions and participate in coding projects.'
     }, {
      title: 'What benefits will my child gain from Leadwinn classes',
        content: `Your child will develop coding skills, problem-solving abilities, creativity, and a strong foundation in technology. These skills are essential in today's digital world and can open up future career opportunities.`
     },
     {
      title: 'Do I need any prior coding experience to enroll my child',
      content: 'No, prior coding experience is not required. Our courses are designed to accommodate beginners, and our instructors provide step-by-step guidance.'
   }, {
      title: `What coding languages are taught at Leadwinn`,
      content: 'Leadwinn offers courses in popular coding languages such as Python, Scratch, JavaScript, and more. The specific languages taught may vary based on the course and age group.'
   },

   ];

   return (
      <div className="lg:max-xl:px-10 lg:space-x-20 px-4 sm:px-24 lg:px-40 xl:px-20 p-16 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
        <h1 className="text-head-black font-bold text-lg sm:text-xl lg:text-4xl xl:text-5xl mb-8 flex items-center justify-center">Frequency Asked Question</h1>
         {
         accordionData.map((data, index) => (
            <div key={index} className='mb-4 border-b border-gray-300 cursor-pointer py-2'>
               <div className="flex justify-between items-center"
                  onClick={
                     () => toggleTab(index + 1)
               }>
                  <h3 className='text-head-black w-3/4 sm:w-full text-sm sm:px-0 sm:text-lg xl:text-3xl font-bold focus:border-none'>{
                     `${data.title}?`
                  }</h3>
                  <span className="w-1/4 flex items-end justify-end">{
                     activeAccordion === index + 1 ? <img src="./accordionBtnUp.svg" className='w-4 sm:w-8 xl:w-1/6'/> : <img src="./accordionBtnDown.svg" className='w-4 sm:w-8 xl:w-1/6'/>
                  }</span>
               </div>
               {
               activeAccordion === index + 1 && (
                  <div className='sm:pr-6'>
                     <p className='text-head-black xl:text-2xl'>{
                        data.content
                     }</p>
                  </div>
               )
            } </div>
         ))
      } </div>
   );
};
