import { useEffect } from 'react';

const useScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return { scrollToTop };
};

export default useScrollToTop;
