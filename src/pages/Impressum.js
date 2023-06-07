import { React, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'


function Impressum() {
    const topContainer = useRef();

    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    }, []);
    const { t } = useTranslation()


    return (
        <div ref={topContainer}>
            <h1 className='text-3xl text-center font-semibold my-10'>{t('IMPRESSUM.TITLE')}</h1>
            <hr className='w-3/4 m-auto my-10' />
            <div className='mx-20 my-5'>
                <div className='my-10'>
                    <h3 className='text-xl font-semibold'>{t('IMPRESSUM.KONTAKTADRESS')}</h3>
                    <p>Besi Storen GmbH,</p>
                    <p>Steingasse 14, 5610 Wohlen</p>
                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-semibold'>{t('IMPRESSUM.PERSON')}</h3>
                    <p>B.Huruglica, {t('IMPRESSUM.INHABER')}</p>
                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-semibold'>{t('IMPRESSUM.REGISTRIE')}</h3>
                    <p>{t('IMPRESSUM.RECHTSFORM')}: GmBh</p>
                    <p>{t('IMPRESSUM.FIRMANAME')}: Besi Storen GmbH</p>
                    <p>{t('IMPRESSUM.HANDELSREGISTER')}-Nr: CH-400.4.452.886-9</p>
                    <p>Wohlen, Switzerland</p>
                </div>
            </div>
        </div>
    )
}

export default Impressum