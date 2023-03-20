import React from 'react'
import Button from './Button'
import { layout } from '../style';

const Newsletter = () => {
  return (
    <section className={`subcribe ${layout.section}`} >
  <div className="bg-[color:var(--first-color-second)] lg:max-w-screen-lg lg:mx-auto px-0 py-10 md:p-0">
    <div className={`subscribe__container md:bg-[color:var(--first-color-second)] md:px-0 md:py-14 ${layout.container}`}>
      <h2 className={`${layout.sectionTitle} subscribe__title text-[color:var(--white-color)]`}>
        Subscribe Our <br /> Newsletter
      </h2>
      <p className="subscribe__description text-[color:var(--white-color)] text-center mb-10">
        Subscribe to our newsletter and get a special 30% discount.
      </p>
      <form action="" className="subscribe__form bg-[color:var(--input-color)] flex justify-between p-2 md:w-[470px] md:mx-auto md:my-0">
        <input
          type="text"
          placeholder="Enter email"
          className="subscribe__input w-[70%] bg-[color:var(--input-color)] text-[color:var(--text-color)] pr-2 md:px-2 md:py-0 
          placeholder:text-[color:var(--text-color)]"
        />
        <Button name="Subscribe"/>
      </form>
    </div>
  </div>
</section>

  )
}

export default Newsletter