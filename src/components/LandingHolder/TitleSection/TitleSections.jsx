import React from 'react'

const TitleSections = ({title , disc}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 '>
        <h2 className='text-3xl' >{title}</h2>
        <h5 className='text-xl' >{disc}</h5>
    </div>
  )
}

export default TitleSections