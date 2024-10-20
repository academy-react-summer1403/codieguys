import React from 'react'

export const Buttons = ({name}) => {
  return (
    <div className=' flex justify-center items-center text-[#22445D] hover:bg-[#6D676757] bg-opacity-[34%] font-normal text-[20px] hover:text-[#158B68] rounded-lg '>
    <h2 className='p-2'>{name}</h2>
    </div>
  )
}
