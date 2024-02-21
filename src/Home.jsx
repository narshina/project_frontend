import React from 'react'
import App from './App'
import './Home.css';
import img from './computer.png'
import imgg from './icon.jpg'

export default function Home() {
  return (
    
<>
<div>
   <div className='main'>
    <div className=' one flex items-center pt-64 w-[510px] text-center text-[40px] pl-100'>
      <img className='icon w-24 ' src={imgg} alt="" />
      <div className='text-[50px] font-semibold'>
      ONE PLATFORM, MANY SOLUTIONS</div>
      </div>
   </div>
</div>
</>
  )
}
