import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Usernav = () => {
  const [comp,setcomp]=useState(false)
  let compdropdown=()=>{
    setcomp(!false)
  }
  let close=()=>{
    setcomp(false)
  }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap '>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
       <Link to='/user'><div className='hover:text-[#A6C3FB]'>HOME</div></Link>
       <Link to='/user/userviewservice' ><div>SERVICES</div></Link>
      <Link to='/user/userviewapplication' ><div>MY APPLICATIONS</div></Link>
        <div><span onClick={compdropdown}>
          COMPLAINT
          </span>
          {comp &&
          <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[115px]'>
         <Link to='/user/postcomplaint'>   <li>ADD</li></Link>
         <Link to='/user/viewreply' >  <li>VIEW REPLY</li></Link>
            </div>
          }
          </div>
       <Link to='/user/userviewmeet'> <div>MEETING</div></Link>
      <Link to='/user/userviewnot' ><div>NOTIFICATION</div></Link>
        <div>TRANLATE</div>
        <div>LOG OUT</div>
        </div>
        </div>
        <div onClick={close} className=''>
        <Outlet/>
        </div>
    </>
  )
}
