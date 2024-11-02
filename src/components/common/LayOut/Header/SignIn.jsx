import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  console.log(localStorage.token)
  return (
    <>
    {
      localStorage.token ? <div className='size-10 rounded-full bg-white'></div> : <Link to={"/LoginStep1"}>
      <button className='font-bold  text-lg text-[#22445D] bg-[#00DF9D] rounded-lg px-5 my-6 py-3 bg-opacity-[42%] '>ورود/ثبت نام </button>
    </Link>
    }
        
    </>


  )
}


export default SignIn
