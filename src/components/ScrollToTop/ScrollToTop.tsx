// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('ScrollToTop effect triggered');
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {};
  }, [pathname]);

  return null;
};

export default ScrollToTop;
