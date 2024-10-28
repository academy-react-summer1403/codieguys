import React from 'react'
import { CardNews } from '../../CardNews'

const GridNewsList = () => {
  return (
    <div className="items-center justify-center grid grid-cols-3 w-full min-h-[867.23px] gap-3">
        <CardNews />
        <CardNews />
        <CardNews />
    </div>
  )
}

export {GridNewsList}