import React from 'react'
import Map from '../components/Contact/Map'
import img from '../assets/images/contactBlind.jpg'
import Form from '../components/Contact/Form'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>
    <Helmet>
      <title>Kontakt</title>
      <meta name='description' content='Kontaktieren Sie uns für professionelle Montage-, Reparatur- und Wartungsdienste für Jalousien. Unser erfahrenes Team ist darauf spezialisiert, erstklassige Lösungen für alle Ihre blinden Bedürfnisse bereitzustellen.'/>
      <link rel='canonical' href='/contact'/>
      <meta name="keywords" content="Besi Storen, besi storen wohlen, storen-wohlen,storen-dienstleistungen, dienstleistungen, storen wohlen, storen beratung, storen messungen, storen montage, storen reparatur, lamellenstoren, sonnenstoren, rollladen,sonnenstorenstoffe, insektenschutz, stoff-rollo und plissee, rolllamellenstoren, seitenglass,lamellendach" />
    </Helmet>
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