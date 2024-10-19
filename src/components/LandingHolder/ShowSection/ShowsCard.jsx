import React from 'react'

const ShowsCard = ({img , title , info}) => {
  return (
    <div className=' flex justify-center items-center flex-col gap-9'>
      <img src={img} alt=""  className='size-20 ' />
    
    <h2 className='' >
        {title}
    </h2>
    <p className=''>
        {info} {' '}
        جلسه
    </p>
    </div>
  )
}

export default ShowsCard