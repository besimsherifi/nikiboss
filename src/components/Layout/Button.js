import React from 'react'

function Button({title, type, clickHandler}) {
  return (
    <button type={type} onClick={clickHandler} data-aos='fade-left' className="focus:outline-none text-white bg-custom-orange rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-10 py-4 mr-2 mb-2 w-fit">{title}</button>
  )
}

export default Button