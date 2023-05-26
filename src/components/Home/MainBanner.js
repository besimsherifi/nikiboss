import React from 'react'

function MainBanner({ title, description, display, fontSize }) {
  return (
    <>
      <div className="w-full ">
        <div className='object-cover h-96 w-full bg-cover bg-center text-center' style={{ backgroundImage: `url(${require("../../assets/images/test.jpg")})` }}>
          <div className={`p-2 md:p-10 lg:p-24 md:${display} justify-around sm:inline-block`}>
            <h1 className='p-4 text-[26px] sm:text-[40px] leading-tight sm:leading-snug text-black md:text-4xl font-semibod  md:text-start '>{title}</h1>
            <p className={`leading-snug sm:leading-normal text-[16px] sm:text-[22px] text-black ${fontSize} font-light mt-5`}>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner