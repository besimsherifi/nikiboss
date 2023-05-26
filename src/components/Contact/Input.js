import React from 'react'

function Input({label, type, name, placeholder, changeHandler}) {
    return (
        <>
            <label htmlFor="email-address-icon" className="block mb-2 text-md font-light text-gray-900">{label}</label>
            <div className="mb-5">
                <input type={type} name={name} className="bg-[#fafafa] border-[#fafafa] outline-none text-gray-900 text-sm block w-full pl-3 p-4 " placeholder={placeholder} onChange={changeHandler} />
            </div>
        </>
    )
}

export default Input