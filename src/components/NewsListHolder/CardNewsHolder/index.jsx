import React from 'react'
import { CardNews } from '../CardNews'

const CardNewsHolder = () => {
  return (
    <div className='grid grid-cols-3 w-full items-start justify-start  shadow-2xl gap-3  bg-custom-gray'>
        <CardNews />
        <CardNews />
        <CardNews />  
        <CardNews />
        <CardNews />  
        <CardNews />
        
    </div>
  )
}

export {CardNewsHolder}