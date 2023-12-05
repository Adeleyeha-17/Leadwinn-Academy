import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    window.scrollTo(0, 0);

    window.history.scrollRestoration = 'auto';

  }, [pathname]);

  return null;
};

export default ScrollToTop;
