import {FC, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface FeedbackProps {}

export const Feedback: FC<FeedbackProps> = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_1l751sg",
        "template_0wboj38",
        form.current,
        "xw-05FedmoQeFTClZ"
      );
      e.currentTarget.reset();
    }
  };

  return (

    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="contact font-poppins pb-20 md:px-12 px-5 xl:px-40 md:py-6 lg:max-xl:max-w-6xl mx-auto text-head-black ">
      <h2 className="text-center text-2xl font-semibold mb-8">Send Us Your Feedback</h2>

      <div className="grid max-sm:grid-cols-1 grid-cols-2 justify-center gap-4 pb-12">
        <div className="mx-auto mb-8">
          <h3 className="text-center text-[1.125rem] font-semibold mb-8">
            Talk to Us
          </h3>

          <div className="grid gap-y-4 grid-cols-[300px]">
            <div className="p-4 rounded-[0.75rem] text-center border border-opacity-10">
              <i className="bx bx-mail-send text-3xl"></i>

              <h3 className="text-[0.875rem] font-semibold">Email</h3>
              <span className="max-lg:text-xs block mb-[0.75rem]">
                info@leadwinnacademy@gmail.com
              </span>

              <Link
                to="mailto:info@leadwinnacademy@gmail.com"
                className="text-[0.75rem] inline-block items-center justify-center gap-x-1"
               target="_blank">
                Write us <i className="bx bx-right-arrow-alt text-sm"></i>
              </Link>
            </div>

            <div className="p-4 rounded-[0.75rem] text-center border border-opacity-10">
              <i className="bx bxl-whatsapp text-3xl"></i>

              <h3 className="text-[0.875rem] font-semibold">Whatsapp</h3>
              <span className="max-lg:text-xs block mb-[0.75rem]">+2348165906106</span>

              <Link
                to="https://api.whatsapp.com/send?phone=08165906106&text=Hello"
                className="text-[0.75rem] inline-block items-center justify-center gap-x-1"
               target="_blank">
                Write us <i className="bx bx-right-arrow-alt text-sm"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <h3 className="text-center text-[1.125rem] font-semibold mb-8">
            Write your feedback
          </h3>
         
          <form ref={form} onSubmit={sendEmail} className="w-[360px]">
               <div className="relative mb-8 h-16">
                  <label htmlFor="name" className="absolute -top-[0.75rem] left-[1.25rem] text-[0.875rem] p-[0.25rem] z-10 bg-[#fbfbfb]">Name</label>
                  <input type="text" name="name" className="relative top-0 left-0 w-full h-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30" placeholder="Insert your name"/>
               </div>

               <div className="relative mb-8 h-16">
                  <label htmlFor="email" className="absolute -top-[0.75rem] left-[1.25rem] text-[0.875rem] p-[0.25rem] z-10 bg-[#fbfbfb]">Mail</label>
                  <input type="email" name="email" className="relative top-0 left-0 w-full h-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30" placeholder="Insert your email"/>
               </div>

               <div className="relative mb-28 h-16 contact__form-area">
                  <label htmlFor="feedback" className="absolute -top-[0.75rem] left-[1.25rem] text-[0.875rem] p-[0.25rem] z-10 bg-[#fbfbfb]">Feedback</label>
                  <textarea name="feedback" cols={30} rows={10} className="relative top-0 left-0 w-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30 h-[8.4rem]" placeholder="write your feedback"></textarea>
               </div>

               <button className="text-sm inline-flex items-center rounded-[1rem] border py-[1.25rem] px-[2rem]">Send Message
       <svg
                   className="ml-3"
                   xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                 >
                   <path
                     d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                     fill="#000000"
                   ></path>
                   <path
                     d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                     fill="#000000"
                   ></path>
                 </svg>
       </button>
            </form>
        </div>
      </div>
    </motion.div>
  );
};


