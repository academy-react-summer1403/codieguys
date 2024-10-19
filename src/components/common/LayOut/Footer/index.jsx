import React from 'react'
import Logo from '../../../../../public/img/Logo.png'
import facebook from '../../../../../public/img/facebook.png'
import skype from '../../../../../public/img/skype.png'
import telegram from '../../../../../public/img/telegram.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center  border-2 px-16  bg-[#A4F6DE] py-14a'>

      <div className='flex justify-center items-center w-full  '>


        <div className='flex  justify-center items-start gap-40 text-[#444444] py-11  '>

          <div className='w-1/4 size-[30px]  '>
            <h1 className=' font-normal text-[25px] leading-[42px] '>خدمات</h1>
            <p>آموزش حرفه ای</p>
            <p>مشاوره رایگان</p>
            <p>فرصت های شغلی</p>
          </div>
          <div className='w-1/4 size-[30px]'>
            <h2 className='font-normal text-[25px] leading-[42px]'>آموزشگاه</h2>
            <p>درباره ما</p>
            <p>ارتباط با ما</p>
            <p>قوانین اموزشگاه</p>
          </div>
          <div className='w-2/4'>
            <h3 className='font-normal  text-[25px] leading-[42px] '>اخبار آموزشگاه</h3>
            <p>برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.</p>
            <div className='flex items-center bg-white justify-between rounded-lg overflow-hidden'>
              <input type="text" className='bg-transparent border-none outline-none px-2' placeholder=' example@gmail.com' />
              <button className='bg-[#41A789] text-white px-6 py-2'>
                ثبت
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full flex py-5 px-8 border-t-2 border-[#807A7A] justify-between items-center'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="Logo" className='  ' />
          <span className='  text-[#444444E5] font-normal leading-[36px] text-[18px]'>کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است.©</span>
        </div>
        <div className=' flex justify-center items-center gap-2'>

          <img src={facebook} alt="facebook" />
          <img src={skype} alt="skype" />
          <img src={telegram} alt="telegram" />

        </div>
      </div>
      {/* <div className='  border-2 bg-black  '></div> */}


    </div>
  )
}
export default Footer