import React from 'react'
import TitleSections from '../TitleSection/TitleSections'
import ServicesCard from './ServicesCard'
import figure from '../../../../public/img/figure.png'
import svg from "../../../../public/img/svg.png"
import map from '../../../../public/img/map.png'
import office from '../../../../public/img/office.png'
import analyze from '../../../../public/img/analyze.png'
import project from '../../../../public/img/project.png'

const Services = () => {
  return (
    <div className=' '>
        <div className=' flex justify-center items-center pt-[65px] pb-[90px] text-[#22445D]'>
        <TitleSections title={"خدمات ما"} disc={"ما فرصت آماده شدن برای زندگی را فراهم می کنیم"} />
        </div>
        <div className=' grid justify-between grid-cols-3 grid-rows-2 items-center gap-6 w-full px-6'>
            <ServicesCard title={"اساتید مجرب"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={figure}/>
            <ServicesCard title={"مشاوره رایگان"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={svg}/>
            <ServicesCard title={"فرصت های شغلی"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={map}/>
            <ServicesCard title={"ارائه مدرک معتبر"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={office}/>
            <ServicesCard title={"دوره های جامع و متنوع"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={analyze}/>
            <ServicesCard title={"آموزش پروژه محور"} disc={"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "} img={project}/>
        </div>

    </div>
  )
}

export default Services 