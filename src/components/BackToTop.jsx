import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-target fixed bottom-8 right-8 z-[100] p-4 glass rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-2xl transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:scale-110 active:scale-90 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <HiArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
