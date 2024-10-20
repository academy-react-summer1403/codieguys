import React from 'react'

const TeachresCard = ({ img, name, info, desc, logo }) => {
    return (
        <div className='flex  flex-col gap-2  items-center text-[#158B68] px-16'>
            <img src={img} alt="" className='size-28 shadow-sm' />

            <span className='font-medium text-[#22445D] text-[20px]' >
                {name}
            </span>
            <h2 className='text-[15px]  text-[#086CB5]'>
                {info}
            </h2>
            <h3 className='text-[#21394B]'>
                {desc}
            </h3>
            <div>
                {logo}
            </div>
            <img src={logo} alt="" />
        </div>
    )
}

export default TeachresCard