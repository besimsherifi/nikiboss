import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async';







function Services() {

  const { t } = useTranslation();

  return (
    <>
    <Helmet>
      <title>Dienstleistungen</title>
      <meta name='description' content='Entdecken Sie unser umfassendes Leistungsspektrum rund um Jalousien und Rollläden, bei dem wir über die bloße Bereitstellung von Produkten hinausgehen.'/>
      <link rel='canonical' href='/dienstleistungen'/>
      <meta name="keywords" content="Besi Storen, besi storen wohlen, storen-wohlen,storen-dienstleistungen, dienstleistungen, storen wohlen, storen beratung, storen messungen, storen montage, storen reparatur, lamellenstoren, sonnenstoren, rollladen,sonnenstorenstoffe, insektenschutz, stoff-rollo und plissee, rolllamellenstoren, seitenglass,lamellendach" />
    </Helmet>
      <section className="container flex items-center justify-center  max-w-full h-[500px] bg-center bg-cover " style={{ backgroundImage: `url(${require("../assets/images/services-min.jpg")})` }}/>
      <section>
        <div className='flex justify-center text-center'>
          <div className='mx-12 md:mx-18 lg:mx-20 mt-10'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-5 my-4'>{t('SERVICES.HEADER')}</h1>
            <p className='mb-4' data-aos='fade-right'>{t('SERVICES.DESCRIPTION')}
            </p>
          </div>
        
        </div>
        <section>
          <div className='my-10 mx-10 sm:mx-40'>
            <div data-aos='fade-up'>
              <h2 className='font-semibold text-xl mb-3'>{t('SERVICES.BERATUNG')}</h2>
              <p>{t('SERVICES.BERATUNG_DESCRIPTION')}</p>
            </div>
          </div>
        </section>
        <hr className='w-3/4 m-auto my-10' />
        <section>
          <div className='my-10 mx-10 sm:mx-40'>
            <div data-aos='fade-up'>
              <h2 className='font-semibold text-xl mb-3'>{t('SERVICES.MESSUNGEN')}</h2>
              <p>{t('SERVICES.MESSUNGEN_DESCRIPTION')}</p>
            </div>
          </div>
        </section>
        <hr className='w-3/4 m-auto my-10' />
        <section>
          <div className='my-10 mx-10 sm:mx-40'>
            <div data-aos='fade-up'>
              <h2 className='font-semibold text-xl mb-3'>{t('SERVICES.MONTAGE')}</h2>
              <p>{t('SERVICES.MONTAGE_DESCRIPTION')}</p>
            </div>
          </div>
        </section>
        <hr className='w-3/4 m-auto my-10' />
        <section>
          <div className='my-10 mx-10 sm:mx-40'>
            <div data-aos='fade-up'>
              <h2 className='font-semibold text-xl mb-3'>{t('SERVICES.REPARATUR')}</h2>
              <p>{t('SERVICES.REPARATUR_DESCRIPTION')}</p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Services