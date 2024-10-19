import React from 'react'
import TitleSections from './../TitleSection/TitleSections';
import TeachresCard from './TeachresCard';
import Mary from '../../../../public/img/Mary.png'
import Anna from '../../../../public/img/Anna.png'
import Bob from '../../../../public/img/Bob.png'

const Teachers = () => {
  return (

    <div className='bg-gradient-to-br from-[#EBF3F1] to-[#A4F6DE] w-full mt-14 '>
      <div className=' flex justify-center items-center py-14 text-[#22445D] '>
        <TitleSections title={"حرفه ای های ما"} disc={"ساختن دنیایی بهتر، یک دوره در یک زمان"} />
      </div>
      <div className='flex justify-center items-center   pb-24 '>
        <TeachresCard img={Mary} name={"ماری براون"} info={"استاد برنامه نویسی"} desc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} logo={""} />
        <TeachresCard img={Anna} name={"آنا ریچموند"} info={"استاد برنامه نویسی"} desc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} logo={""} />
        <TeachresCard img={Bob} name={"باب گرینفیلد"} info={"استاد برنامه نویسی"} desc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} logo={""} />

      </div>
    </div>

  )
}

export default Teachers