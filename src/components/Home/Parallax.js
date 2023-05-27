import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../../components/Layout/Button'
import { Link } from 'react-router-dom'


function Parallax() {

  const { t } = useTranslation();

    return (
        <>
            <section className="container flex items-center justify-center  max-w-full   bg-center bg-cover " style={{ backgroundImage: `url(${require("../../assets/images/parallax.jpg")})` }}>
                <div className="grid gap-9 md:grid-cols-1 lg:grid-cols-3 p-10 md:p-20 text-2xl text-white items-center justify-items-center	">
                    <h1 className='text-3xl md:text-4xl' data-aos="fade-right">{t('PARALLAX.HEADER')}</h1>
                    <p className='text-xl mx-4'data-aos="fade-down">{t('PARALLAX.DESCRIPTION')}</p>
                    <Link to='/contact'>
                        <Button type={'button'} title={t('PARALLAX.BUTTON')} />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Parallax