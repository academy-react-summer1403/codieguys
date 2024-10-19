import React from 'react'
import hs from '../../../../public/img/hs.png'

const index = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-gradient-to-br from-[#A4F6DE] to-[#FFFFFF] pt-[100px]  pb-11 gap-8 px-6'>
        <div className='px-10 ml-28 flex justify-center items-start flex-col gap-6 '>
          <div className='text-start font-normal  leading-[84px]  '>
            <span className='text-[#21394B] text-[50px]'>آموزشگاه اچ وان</span>
          </div>
          <p className='leading-[32px] text-[#21394B] text-[17px]'>لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.</p>
          <button className='rounded-3xl bg-[#12926C] text-[#ffffff] px-6 py-3 shadow-md '>شروع یادگیری</button>
        </div>

        <img src={hs} alt="hs" className='w-2/5' />
      </div>
    </>

  )
}
export default index