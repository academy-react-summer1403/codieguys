import React from 'react'
import ViewsCard from './ViewsCard'
import person from '../../../../public/img/person.png'
import icon from '../../../../public/img/icon.png'
import film from '../../../../public/img/film.png'
import sth from '../../../../public/img/sth.png'

const View = () => {
  return (
    <div className=' bg-[#5BE1B9] rounded-[32px]  flex justify-center items-center mx-11 my-24'  >
    <div className='flex justify-center items-center  pt-16 pb-16 gap-20 '>
        <ViewsCard title={"اساتید حرفه ای"} img={person} num={"52"} />
        <ViewsCard title={"دانشجو"} img={icon} num={"81"}/>
        <ViewsCard title={"دوره آموزشی"} img={film} num={"182"} />
        <ViewsCard title={"مقاله آموزشی"} img={sth} num={"28"}/>
    </div>
    </div>
  )
}

export default View