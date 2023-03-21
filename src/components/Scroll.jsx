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
    <a href="#" className={`fixed ${bottom} bg-[color:var(--first-color)] flex opacity-90 z-10 transition-[0.4s] p-2 right-4 hover:bg-[color:var(--first-color-alt)] hover:opacity-100`} id="scroll-up">
        <i className="ri-arrow-up-line text-[color:var(--white-color)] text-[1.2rem]" />
    </a>

  )
}

export default Scroll