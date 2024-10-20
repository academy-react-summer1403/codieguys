import React from 'react'
import Logo from '../../../../../public/img/Logo.png'
import Search from '../../../../../public/img/search.png'
import account from '../../../../../public/img/account.png'
import shop from '../../../../../public/img/shop.png'
import SingIn from './SignIn'
import { Account } from './Account'
import { Buttons } from './Buttons'
const Header = () => {

  return (

    <div className=' flex justify-between h-[100px] bg-transparent top-0 w-full absolute px-5 '>

      <div className='flex justify-center items-center'>
        <img className='w-10' src={Logo} alt="Logo" />
        <div className='flex  text-[#22445D] font-bold text-2xl px-2'>آکادمی اچ وان</div>
      </div>

      <div className='flex justify-center items-center gap-10 px-[50px]'>
        <Buttons name="صفحه اصلی" />
        <Buttons name="دوره ها " />
        <Buttons name="مقالات" />
        <Buttons name="درباره ما" />
      </div>
     
      <div className='flex justify-center items-center gap-5 px-8'>
        <img src={Search} alt="Search" className='flex ' />
         <SingIn/>
        {/* <img src={shop} alt="shop" className=' ' />
        <img src={account} alt="account" className='w-16 rounded-[100px]' /> */}
      </div> 


    </div>
  )
}
export default Header