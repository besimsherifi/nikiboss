import React, { useState } from 'react'
import Button from '../Layout/Button'
import Input from './Input'
import { useTranslation } from 'react-i18next'


function Form() {

    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
    });

    function onChangeHandler(event) {
        console.log(event.target.value);
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }));
    }
    return (
        <>
            <div className='mr-10 self-center'>
                <h1 className='text-6xl font-semibold mb-5' data-aos='fade-right'>
                    {/* {t('FORM.HEADER')} */}
                    Contact
                </h1>
                <div className='mt-4' data-aos='fade-up'>
                    <h1 className='text-2xl font-medium ' data-aos='fade-right'>
                        Osman Ramadani
                    </h1>
                    <h1 className='text-1xl font-medium ' data-aos='fade-right'>
                        00389 71 598 139
                    </h1>
                    <h1 className='text-1xl font-medium mb-5' data-aos='fade-right'>
                        Kamenjane, Tetovo
                    </h1>

                    {/* <div className='md:mr-10'>
                        <Input label={t('FORM.NAME')} type='text' placeholder='John' name="name" changeHandler={onChangeHandler} />
                    </div>
                    <div>
                        <Input label={t('FORM.NACHNAME')} type='text' placeholder='Doe' name="lastname" changeHandler={onChangeHandler} />
                    </div>
                    <div className='md:mr-10'>
                        <Input label='e-mail' type='email' placeholder='johndoe@email.com' name="email" changeHandler={onChangeHandler} />
                    </div>

                    <div>
                        <Input label={t('FORM.BETREFF')} type='text' placeholder='Storen defekt' name="subject" changeHandler={onChangeHandler} />
                    </div> */}
                </div>
                {/* <label htmlFor='textarea' className="block mb-2 text-md font-light text-gray-900 ">{t('FORM.NACHRICHT')}</label>
                <textarea id="message" rows="4" data-aos='fade-up' className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-[#fafafa]  border border-[#fafafa] mb-5" placeholder={t('FORM.NACHRICHT')} name='message' onChange={onChangeHandler}></textarea>
                <Button type={'button'} title={t('FORM.SENDEN')} clickHandler={() => {
                    window.open(`mailto:info@besi-storen.ch?subject=${formData.subject}&body=${formData.message}    von ${formData.name} ${formData.lastname}`)
                }} /> */}
            </div>
        </>
    )
}

export default Form