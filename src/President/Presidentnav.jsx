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
      <Link to='/president'>  <div>HOME</div></Link>
     <Link to='/president/secservice'>   <div>SERVICES</div></Link>
     <Link to='/president/secviewapllcsn'> <div>APLLICATIONS</div></Link>
      <Link to='/president/secviewmeet'> <div>MEETING</div></Link>
      <Link to='/president/secviewnot' ><div>NOTIFICATION</div></Link>
        <div>LOG OUT</div>
        </div>
    </div>
    <div className='sm:pt-20'>

    </div>
    <Outlet/>
    </>
  )
}
