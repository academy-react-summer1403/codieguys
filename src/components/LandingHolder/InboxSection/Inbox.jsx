import React from 'react'
import TitleSections from '../TitleSection/TitleSections'
import inbox from '../../../../public/img/inbox.png'

const Inbox = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full py-7 '>
            <div>
                <TitleSections title={"پیشنهادات و انتقادات"} disc={"نظرات خود را با ما درمیان بگذارید"} />
            </div>
            <div className='flex justify-around flex-row py-16 '>
                <div className=' flex flex-col justify-center items-start gap-4 ' >
                    <input type="text" className='rounded-lg border-2 bg-[#FBF6F6] border-[#158B68] outline-none px-2 w-[400px] h-11 placeholder-[#22445D]' placeholder='نام و نام خانوادگی'/>
                    <input type="text"className='rounded-lg border-2 bg-[#FBF6F6] border-[#158B68] outline-none px-2  w-[400px] h-11 placeholder-[#22445D]'placeholder=' ایمیل' />
                    <input type="text" className=' rounded-lg border-2 bg-[#FBF6F6] border-[#158B68] outline-none px-2 w-[400px] h-28 placeholder-[#22445D] placeholder-' placeholder=' متن...'/>
                    <button className='bg-[#5BE1B9] text-[#21394B] px-6 py-2 rounded-lg'>ارسال</button>
                </div>
                <img src={inbox} alt="inbox" className='w-2/5' />
            </div>
        </div>
    )
}

export default Inbox