import React from 'react'
import { NewsGridTitle } from './NewsGridTitle'
import { GridNewsList } from './GridNewsList'
import { GridBtn } from './GridBtn'

const NewsGridHolder= () => {
  return (
    <div className='justify-center items-center w-full h-[1233px] border-2 border-slate-300 '>
        <NewsGridTitle />
        <GridNewsList />
        <GridBtn />
    </div>
  )
}

export {NewsGridHolder}