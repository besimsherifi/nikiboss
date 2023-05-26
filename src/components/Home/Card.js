import React from 'react'


function Card({ icon, title, description, animation }) {
    return (
        <>
            <div className="block  p-6 pt-20  bg-white border border-gray-200 shadow-md hover:bg-gray-100 px-7 hover:bg-grey-500 " data-aos={animation}>
                {icon}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                <p className="font-normal text-black">{description}</p>
            </div>
        </>
    )
}

export default Card