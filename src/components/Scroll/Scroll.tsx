
export const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button onClick={scrollToTop} className="max-sm:hidden absolute right-10 sm:-mt-20 lg:-mt-4 xl:right-40 bg-head-blue hover:bg-footer-blue opacity-80 py-[0.3rem] px-[0.5rem] rounded-[0.4rem] transition duration-400 ">
      <i className="uil uil-arrow-up text-xl text-[#fff]"></i>

      </button>
    </div>
  );
};

