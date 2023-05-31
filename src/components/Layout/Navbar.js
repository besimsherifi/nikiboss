import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-transparent copy.png'

function Navbar() {

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation()

    function onChange(event) {
        i18n.changeLanguage(event.target.value);
    }


    return (
        <>
            <div className='shadow-sm w-full sticky lg:static top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800' data-aos="fade-down">
                        <span className='text-3xl  mr-4'>
                            <img src={logo} alt='Besi Storen GmbH' className='w-[100px]'/>
                        </span>
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                    <div>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 px-3 ${open ? 'shadow' : ''} absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-3  pt-4 md:pt-0 transition-all duration-500 ease-in ${open ? 'top-18 ' : 'top-[-500px]'}`}>
                            <li className='ml-3'>
                                <Link to='/'  onClick={()=>{setOpen(false)}} className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black">{t('NAVBAR.HOME')}</Link>
                            </li>
                            <li className='ml-3'>
                                <Link to='/services' onClick={()=>{setOpen(false)}} className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black">{t('NAVBAR.SERVICES')}</Link>
                            </li>
                            <li className='ml-3'>
                                <Link to='/offer' onClick={()=>{setOpen(false)}}  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black">{t('NAVBAR.OFFERTE')}</Link>
                            </li>
                            <li className='ml-3'>
                                <Link to='/contact' onClick={()=>{setOpen(false)}}  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black">{t('NAVBAR.CONTACT')}</Link>
                            </li>
                            <select name="language" onChange={onChange} className="ml-5">
                                <option value="de">DE</option>
                                <option value="it">IT</option>
                                <option value="en">EN</option>
                            </select>
                        </ul>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Navbar