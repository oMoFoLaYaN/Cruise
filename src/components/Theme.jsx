import React from 'react'
import { themes } from "../constants";

const Theme = (props) => {

  return (
    <>
    {themes?.map((theme) => (
<button className="" key={the.text}>
    <i className={`${theme.icon} ${props.color}`} id="theme-button" />
</button>
    ))}
    </>
  )
}

export default Theme