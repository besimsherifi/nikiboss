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
        subject: ''
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
            <div className='mr-10'>
                <h1 className='text-6xl font-semibold mb-5' data-aos='fade-right'>{t('FORM.HEADER')}</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2' data-aos='fade-up'>
                    <div className='md:mr-10'>
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
                    </div>
                </div>
                <label htmlFor='textarea' className="block mb-2 text-md font-light text-gray-900 ">{t('FORM.NACHRICHT')}</label>
                <textarea id="message" rows="4" data-aos='fade-up' className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-[#fafafa]  border border-[#fafafa] mb-5" placeholder={t('FORM.NACHRICHT')}></textarea>
                <Button type={'button'} title={t('FORM.SENDEN')} clickHandler={()=>{console.log(formData);}}/>


            </div>
        </>
    )
}

export default Form