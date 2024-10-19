import React from 'react'
import ShowsCard from './ShowsCard';
import set from '../../../../public/img/set.png'
import tri from '../../../../public/img/tri.png'
import ss from '../../../../public/img/ss.png'
import js from '../../../../public/img/js.png'
import ux from '../../../../public/img/ux.png'
import TitleSections from '../TitleSection/TitleSections';

const cardList = [{title:' UI/UXدوره های طراحی', capacity: 25, img:set},{title:' UI/UXدوره های طراحی', capacity: 15, img:tri}, {title:' UI/UXدوره های طراحی', capacity: 15, img:ss}, {title:' UI/UXدوره های طراحی', capacity: 15, img:js}, {title:' UI/UXدوره های طراحی', capacity: 15, img:ux}]
const Show = () => {
  return (
    <div>
      <div className=' flex justify-center items-center pb-[90px] text-[#22445D] '>
        <TitleSections title={"دسته بندی"} disc={"ما فرصت آماده شدن برای زندگی را فراهم می کنیم"} />
      </div>
      <div className='flex justify-center items-center gap-8 '>
        {cardList.map((item,index)=>{
          return(
        <div className='rounded-[14px] bg-[#FBF6F6] py-10 px-5 shadow-md'><ShowsCard title={item.title} img={item.img} info={item.capacity} /></div>
          )

        })}
      </div>
    </div>
  )
}

export default Show