import React from 'react'
import styles from '../style'

const Button = (props) => {
  return (
    <button>
      <a href="#" className={`${styles.button}`}>
        {props.name}
      </a>
    </button>
  )
}

export default Button