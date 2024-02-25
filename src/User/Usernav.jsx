import React from 'react'
import { Outlet } from 'react-router-dom'

export const Usernav = () => {
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap '>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
        <div>HOME</div>
        <div>SERVICES</div>
        <div>MY APPLICATIONS</div>
        <div>COMPLAINT</div>
        <div>MEETING</div>
        <div>NOTIFICATION</div>
        <div>TRANLATE</div>
        <div>LOG OUT</div>
        </div>
        </div>
        <Outlet/>
    </>
  )
}
