import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function HoverImage({ id, image, alt }) {
    const { t } = useTranslation();

    return (
        <>
            <section className="mx-auto w-fit ">
                <div className=" group">
                    <div className="relative overflow-hidden">
                        <img className='justify-self-center' src={image} alt={alt} data-aos='flip-up' data-aos-duration="1000" />
                        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Link to={`storen/${id}`}><button className="bg-custom-orange text-white py-2 px-5">{t("HOME.MEHR")}</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HoverImage