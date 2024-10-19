import React from 'react'

const ViewsCard = ({img , title , num}) => {
  return (
    <div className='flex pt-5  flex-col gap-2  items-center text-[#158B68] px-8'>
                <img src={img} alt=""  className='size-28' />
    
            <h2 className='font-semibold' >
                {title}
            </h2>
            <p className='font-semibold text-[35px]'>
                {num}
            </p>
       
    </div>
  )
}

export default ViewsCard