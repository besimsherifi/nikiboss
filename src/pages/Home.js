import React from 'react'
import { Link } from 'react-router-dom'
import MainBanner from '../components/Home/MainBanner'
import { useTranslation } from 'react-i18next'
import img from '../assets/images/ice-cream.jpeg'
import BlackParagraph from '../components/Home/BlackParagraph'
import Cards from '../components/Home/Cards'
import lamellenstoren from '../assets/images/coffee.jpeg'
import sonnenstoren from '../assets/images/icecream.jpeg'
import rolllanden from '../assets/images/sweets.jpeg'
import stof from '../assets/images/drinks.jpeg'
import mhz from '../assets/images/partners/saccaria.png'
import somfy from '../assets/images/partners/faema.png'
import rollmat from '../assets/images/partners/carpigiani.png'
import regazzi from '../assets/images/partners/master.jpeg'
import HoverImage from '../components/Home/HoverImage'
import CookieConsent from "react-cookie-consent";
import { Helmet } from 'react-helmet-async'







function Home() {



  const { t } = useTranslation();



  return (
    <>
      <Helmet>
        <title>Niki Boss</title>
        <meta name='description' content='Kompetente Beratung, präzise Messungen, reibungslose Installation und zuverlässige Reparaturen. Entdecken Sie mit Besi Storen die perfekten Jalousien und Rollläden.' />
        <link rel='canonical' href='/' />
        <meta name="keywords" content="Besi Storen, besi storen wohlen, storen-wohlen, storen wohlen, storen beratung, storen messungen, storen montage, storen reparatur, lamellenstoren, sonnenstoren, rollladen,sonnenstorenstoffe, insektenschutz, stoff-rollo und plissee, rolllamellenstoren, seitenglass,lamellendach" />
      </Helmet>
      <CookieConsent buttonText="OK" buttonStyle={{ backgroundColor: "#229bce", fontSize: "13px" }}>{t('COOKIES')}</CookieConsent>
      <MainBanner title={t('HOME.BANNER_TITLE')} description={t('HOME.BANNER_DESCRIPTION')} display="flex" fontSize='text-3xl' />
      <img src={img} alt='empty' data-aos="fade-up" />
      <Cards />
      <hr className='w-3/4 m-auto my-20' />
      <section>
        <div className='grid gap-9 grid-cols-1 justify-items-center mb-20 sm:mx-20 mx-8 items-center'>
          <h1 className='sm:text-5xl text-2xl font-medium text-center' data-aos='fade-right'>{t('MATERIALS.HEADER')}</h1>
          <p className='sm:px-10 sm:text-[16px] text-[14px] text-center' data-aos='fade-up'>{t('MATERIALS.DESCRIPTION')}</p>
        </div>
      </section>


      <section>
        <div className='grid md:grid-cols-4  bg-black-paragraphs'>
          <HoverImage image={lamellenstoren} alt={'lamellenstoren'} id={'lamellenstoren'} />
          <BlackParagraph category={t('HOME.LAMELLENSTOREN')} title={t('HOME.LAMELLENSTOREN')} animation='fade-right' description={t('HOME.LAMELLENSTOREN_DESCRIPTION')} />
          <HoverImage image={sonnenstoren} alt={'sonnenstore'} id={'sonnenstoren'} />
          <BlackParagraph category={t('HOME.SONNENSTOREN')} title={t('HOME.SONNENSTOREN')} animation='fade-right' description={t('HOME.SONNENSTOREN_DESCRIPTION')} />
          <BlackParagraph category={t('HOME.ROLLLADEN_TITLE')} title={t('HOME.ROLLLADEN_TITLE')} animation='fade-right' description={t('HOME.ROLLLADEN_DESCRIPTION')} />
          <HoverImage image={rolllanden} alt={'rollanden'} id={'rollladen'} />
          <BlackParagraph category={t('HOME.SONNENSTORENSTOFFE_TITLE')} title={t('HOME.SONNENSTORENSTOFFE_TITLE')} animation='fade-right' description={t('HOME.SONNENSTORENSTOFFE_DESCRIPTION')} />
          <HoverImage image={stof} alt={'sonnen store stoff'} id={'sonnenstorestoffe'} />
        </div>
        {/* <div className='grid md:grid-cols-4 bg-black-paragraphs'>
          <HoverImage image={insect} alt={'insektenschutz'} id={'insektenschutz'} />
          <BlackParagraph category={t('HOME.INSEKTENSCHUTZ_TITLE')} title={t('HOME.INSEKTENSCHUTZ_TITLE')} animation='fade-right' description={t('HOME.INSEKTENSCHUTZ_DESCRIPTION')} />
          <HoverImage image={plisse} alt={'stoff-rollo und plisse'} id={'stoff-rollo'} />
          <BlackParagraph category={t('HOME.PLISSEN_TITLE')} title={t('HOME.PLISSEN_TITLE')} animation='fade-right' description={t('HOME.PLISSEN_DESCRIPTION')} />
          <BlackParagraph category={t('HOME.ROLLLAMELLEN_TITLE')} title={t('HOME.ROLLLAMELLEN_TITLE')} animation='fade-right' description={t('HOME.ROLLLAMELLEN_DESCRIPTION')} />
          <HoverImage image={rollstore} alt={'rollstore'} id={'rolllamellenstoren'} />
          <BlackParagraph category={t('HOME.SEITENGLASS_TITLE')} title={t('HOME.SEITENGLASS_TITLE')} animation='fade-right' description={t('HOME.SEITENGLASS_DESCRIPTION')} />
          <HoverImage image={seitenglass} alt={'seitenglass'} id={'seitenglass'} />
        </div> */}
        {/* <div className="md:flex mb-16">
          <section className="mx-auto w-fit ">
            <div className=" group">
              <div className="relative overflow-hidden">
                <img className='justify-self-center w-full md:w-[400px]' src={lamellendach} alt='lamellendach' data-aos='flip-up' data-aos-duration="1000" />
                <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link to={`storen/lamellendach`}><button className="bg-custom-orange text-white py-2 px-5">{t('HOME.MEHR')}</button></Link>
                </div>
              </div>
            </div>
          </section>
          <BlackParagraph category={t('HOME.LAMELLENDACH_TITLE')} title={t('HOME.LAMELLENDACH_TITLE')} animation='fade-right' description={t('HOME.LAMELLENDACH_DESCRIPTION')} />
        </div> */}
      </section>


      <section>
        <div className='grid justify-items-center mb-20 mx-4 md:mx-20 my-16 items-center'>
          <h1 className='sm:text-5xl text-2xl font-medium mb-14 mx-2 text-center' data-aos='fade-right'>{t('PARTNERS')}</h1>
          <hr className='w-3/4 m-auto mb-20' />

          <div className='grid md:grid-cols-3 justify-items-center'>
            <img className='mb-10 w-full' data-aos="fade-up-right" src={mhz} alt='MHZ' />
            <img className='mb-10 mx-10' data-aos="fade-up-left" src={rollmat} alt='Rollmat' />
            <img className='mb-10' data-aos="fade-up" src={somfy} alt='somfy' />
          </div>
          {/* <div className='grid md:grid-cols-3 p-10 items-center'> */}
          {/* <img className='pr-10 mb-10' data-aos="fade-up-right" src={regazzi} alt='Regazzi' /> */}
          {/* <img className='px-10 mb-10' data-aos="fade-up" src={storosoll} alt='storosol' />
            <img className='pl-10 mb-10' data-aos="fade-up-left" src={rolf} alt='Rolf Berchtold AG' /> */}
          {/* </div> */}
          <div className='grid md:grid-cols-1 items-center'>


            <img className='max-w-[400px] mb-10 mx-4' data-aos="fade-up-right" src={regazzi} alt='stoma' />
            {/* <img className=' mb-10' data-aos="fade-up-left" src={meiomo} alt='meimo' /> */}
          </div>
        </div>
      </section>
      <hr className='w-3/4 m-auto my-20' />
      {/* <Parallax /> */}
    </>
  )
}

export default Home