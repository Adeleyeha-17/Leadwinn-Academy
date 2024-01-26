
export const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button onClick={scrollToTop} className="max-sm:hidden absolute right-10 sm:-mt-16 lg:-mt-2 xl:right-20 bg-head-blue hover:bg-footer-blue opacity-80 py-[0.3rem] px-[0.5rem] rounded-[0.4rem] transition duration-400 ">
      Up
      </button>
    </div>
  );
};

