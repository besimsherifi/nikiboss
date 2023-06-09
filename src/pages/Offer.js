import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async';


function Offer() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    number: undefined,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      lastname: '',
      email: '',
      number: 0,
      message: ''
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
     <Helmet>
      <title>Offerte</title>
      <meta name='description' content='Entdecken Sie unsere exklusiven kostenlosen Angebote für die Montage, Reparatur und Wartung von Jalousien. Unser Unternehmen ist auf die Bereitstellung erstklassiger Lösungen für alle Ihre Jalousienbedürfnisse spezialisiert.'/>
      <link rel='canonical' href='/offer'/>
      <meta name="keywords" content="Besi Storen, besi storen wohlen, storen-wohlen,storen-dienstleistungen, dienstleistungen, storen wohlen, storen beratung, storen messungen, storen montage, storen reparatur, lamellenstoren, sonnenstoren, rollladen,sonnenstorenstoffe, insektenschutz, stoff-rollo und plissee, rolllamellenstoren, seitenglass,lamellendach" />
    </Helmet>
      <section className="container flex items-center justify-center  max-w-full h-[500px] bg-center bg-cover " style={{ backgroundImage: `url(${require("../assets/images/offer.jpg")})` }} />
      <div className='flex justify-center text-center'>
        <div className='mx-12 md:mx-18 lg:mx-20 mt-10'>
          <h1 className='text-3xl md:text-5xl font-semibold mb-5'>{t('OFFER.HEADER')}</h1>
          <p className='mb-4' data-aos='fade-right'>{t('OFFER.DESCRIPTION')}
          </p>
        </div>
      </div>
      <div className='max-w-xl mx-auto px-4 py-12'>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div data-aos='fade-right'>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">{t('FORM.NAME')}</label>
              <input id="name" name="name" type="name" required placeholder='John' value={formData.name}
                onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"></input>
            </div>
            <div data-aos='fade-left'>
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900" >{t('FORM.NACHNAME')}</label>
              <input id="lastname" name="lastname" value={formData.lastname}
                onChange={handleChange} type="name" placeholder='Doe' required className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"></input>
            </div>
            <div data-aos='fade-right'>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">{t('FORM.TELEFON')}</label>
              <input id="telefon" type="number" value={formData.number}
          onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder='+41'></input>
            </div>
            <div data-aos='fade-left'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input id="email" name="email" type="email" value={formData.email}
          onChange={handleChange} placeholder='email@email.com' required className="block w-full rounded-md border-0 py-1.5 px-1 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"></input>
            </div>
          </div>
          <div data-aos='fade-up'>
            <label htmlFor="message" className=" mb-2 text-sm font-medium text-black">{t('FORM.ANGEBOT')}</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 mb-6 bg-gray-100 rounded-lg border border-gray-300 " placeholder="Sonnenstore 170(cm)h x 60(cm)b"></textarea>
          </div>



          <button type="submit" onSubmit={handleChange} data-aos='fade-right' className="text-white bg-custom-orange hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">{t('FORM.SENDEN')}</button>
        </form>
      </div>
    </>
  );
}

export default Offer