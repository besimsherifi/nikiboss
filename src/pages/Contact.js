import React from 'react'
import Map from '../components/Contact/Map'
import img from '../assets/images/contactBlind.jpg'
import Form from '../components/Contact/Form'

function Contact() {
  return (
    <>
      <Map />
      <section>
        <div className='grid md:grid-cols-2  p-10'>
          <Form/>
          <div>
            <img src={img} alt='test' data-aos='fade-left'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact