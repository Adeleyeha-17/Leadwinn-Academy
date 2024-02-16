import { motion } from 'framer-motion';
import React, { useState } from 'react';

type ProfileQuestionsProps = {
  onComplete: (answers: string[]) => void;
};

export const ProfileQuestion: React.FC<ProfileQuestionsProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions: string[] = [
    "Are you a parent or a student?",
    "Are you 6 years and above?",
    "How did you hear about our platform?",
    "Have you taken similar courses or participated in related activities before?",
    "Would you be interested in participating in group projects or collaborative learning activities?",
    "What course would you like to participate in?",
    "Are you interested in mentorship or coaching opportunities related to the course?"
  ];

  const options: string[][] = [
    ["Parent", "Student"],
    ["Yes", "No"],
    ["Friends","Facebook", "Twitter", "Linkedin","Instagram"],
    ["Yes", "No"],
    ["Yes", "No"],
    ["SCRATCH", "MIT", "ROBLOX", "UI/UX DESIGN", "WEB DEVELOPMENT", "PYTHON"],
    ["Yes", "No"]
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
    if (currentQuestion === questions.length - 1) {
      onComplete([...answers, answer]);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="h-screen flex flex-col items-center justify-center gap-5 mx-auto font-poppins text-heading">
      <p className='text-sm lg:text-xl max-sm:w-[22rem] max-lg:w-[28rem] lg:w-[35rem] text-center'>{questions[currentQuestion]}</p>

      <div className='flex max-lg:flex-wrap max-lg:items-center max-lg:justify-center gap-5 lg:gap-10 '>

      {options[currentQuestion].map((option, index) => (
         <button key={index} onClick={() => handleAnswer(option)} className='border px-3 py-1 rounded-lg border-heading text-xs lg:text-base hover:text-white hover:bg-head-blue hover:border-head-blue transform transition duration-150 ease-in-out'>{option}</button>
         ))}
         </div>
   </motion.div>
  );
};
