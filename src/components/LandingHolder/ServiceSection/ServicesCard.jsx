import React from 'react'

const ServicesCard = ({img , title , disc}) => {
  return (
    <div className='flex justify-center items-start gap-5 pt-5 text-[#22445D]'>
        <img src={img} alt=""  className='w-1/4' />
        <div className='flex justify-center items-start flex-col gap-2'>
            <h2 className='font-semibold text-[18px] '>
                {title}
            </h2>
            <p className='text-sm'>
                {disc}
            </p>
        </div>
    </div>
  )
}

export default ServicesCard