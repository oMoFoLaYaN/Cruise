import React from 'react'
import { useState, useEffect } from 'react';

const Scroll = () => {
  const [bottom, setBottom] = useState("-bottom-20")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 203) {
      return setBottom("-bottom-[20%]")
    } else if (window.scrollY > 200) {
      return setBottom("bottom-20")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <a href="#" className={`fixed ${bottom} w-10 h-10 rounded-full bg-water-600 flex opacity-90 z-10 transition-[0.4s] px-2  py-1 right-4 hover:bg-water-700 hover:opacity-100`} id="scroll-up">
        <i className="ri-arrow-up-line text-water-100 text-2xl" />
    </a>

  )
}

export default Scroll