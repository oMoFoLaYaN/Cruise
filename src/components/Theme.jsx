import React from 'react'

const Theme = (props) => {
  return (
<div className="nav__dark">
    <i className={`ri-moon-line change-theme ${props.color}`} id="theme-button" />
</div>
  )
}

export default Theme