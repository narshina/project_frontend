import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Presidentnav = () => {
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap sm:z-30 sm:fixed'>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
        <div>HOME</div>
     <Link to='/president/secservice'>   <div>SERVICES</div></Link>
     <Link to='/president/secviewapllcsn'> <div>APLLICATIONS</div></Link>
        <div>MEETING</div>
        <div>NOTIFICATION</div>
        <di>LOG OUT</di>
        </div>
    </div>
    <div className='sm:pt-20'>

    </div>
    <Outlet/>
    </>
  )
}
