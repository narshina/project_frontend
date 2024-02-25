import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export const Wardnav = () => {
    const[meeting,setmeet]=useState(false)
    let meetdropdown=()=>{
        setmeet(!meeting)
    }
    let close=()=>{
        setmeet(false)
    }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap sm:z-30 sm:fixed'>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
      <div>HOME</div>
     <div>SERVICES</div>
     <div>COMPLAINT</div>
      <div>MEETING</div>
    <div>NOTIFICATION</div>
        <div>LOG OUT</div>
        </div>
    </div>
    <div className='sm:pt-20'>

    </div>
    <Outlet/>
    </>
  )
}
