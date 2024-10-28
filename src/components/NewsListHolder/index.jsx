import React from 'react'
import { HeaderListNews } from './HeaderListNews'
import { CardNews } from './CardNews'
import { CardNewsHolder } from './CardNewsHolder'
import { NewsTitle } from './NewsTitle'
import { NewsGridHolder } from './NewsGridHolder'


const NewsListHolder = () => {
  return (
    <div className='px-16 '>
        <NewsTitle />
        <HeaderListNews />
        <CardNewsHolder />
        <NewsGridHolder />
    </div>
  )
}

export default NewsListHolder