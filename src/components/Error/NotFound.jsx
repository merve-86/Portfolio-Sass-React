import React from 'react'
import error from "../../assets/img/404-error.gif"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='error'>
      <img src={error} alt="error" />
    </div>
  )
}

export default NotFound
