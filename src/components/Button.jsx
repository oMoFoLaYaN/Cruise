import React from 'react'

const Button = (props) => {
  return (
    <button>
      <a href="#" className="inline-block bg-[color:var(--first-color)] text-[color:var(--white-color)] rounded-br-full font-medium duration-300 px-8 py-4 hover:bg-[color:var(--first-color-alt)]">
        {props.name}
      </a>
    </button>
  )
}

export default Button