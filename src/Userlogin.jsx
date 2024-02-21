import React from 'react'
import App from './App'
import './Login.css'
import img from './login.jpg'

export const Userlogin = () => {
  return (
    <>

      <div className='body flex flex-col md:flex-row mt-0 '>
        <div className="">
            <img className='loginn w-39rem h-96 mt-28' src={img} alt="" />
        </div>
          <div className='content ml-64 mt-32 w-96 h-72'>
           <div className='log font-bold text-[25px] ml-12'>Login Here</div>
           <div className='user mt-6'>USERNAME</div>
           <input className='username bg-indigo-400 text-neutral-950 rounded w-72  h-9 mt-2 placeholder:text-white p-3' placeholder='Enter username here'></input>
           <div className='pass mt-2'>PASSWORD</div>
           <input className='password bg-indigo-400 text-neutral-950 rounded w-72 h-9  mt-2 placeholder:text-white p-3' placeholder='Enter password here'></input>
           <div className='for mt-2'>Forgot password?</div>
            <div><button className='button text-black font-semibold bg-indigo-400 w-72 h-9 rounded mt-2'>LOGIN</button></div>
          </div>
      </div>
    </>
  )
}
