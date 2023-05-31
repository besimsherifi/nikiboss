import React from 'react'

function BlackParagraph({category, title, description, animation}) {
  return (
    <div className='p-5 bg-black-paragraphs text-white sm:p-4 lg:p-8 w-full'>
      <h5 className='text-sm uppercase border-solid border-b-2 border-custom-orange max-w-fit mb-3' data-aos={animation}>{category}</h5>
      <h1 className='lg:text-3xl font-semibold mb-3' data-aos={animation}>{title}</h1>
      <p className='md:text-sm lg:text-base' data-aos={animation}>{description}</p>
    </div>
  )
}

export default BlackParagraph