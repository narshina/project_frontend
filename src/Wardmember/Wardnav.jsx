import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Wardnav = () => {
    const[meeting,setmeet]=useState(false)
    const[notificatin,setnotification]=useState(false)
    let meetdropdown=()=>{
        setmeet(!meeting)
        setnotification(false)
    }
    let notificationdropdown=()=>{
      setnotification(!notificatin)
      setmeet(false)
    }
    let close=()=>{
        setmeet(false)
        setnotification(false)
    }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap sm:z-30 sm:fixed'>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
    <Link to='/member' ><div>HOME</div></Link>
  <Link to='/member/memberviewservice'> <div>SERVICES</div></Link>
  <div><span onClick={meetdropdown}>
          MEETING
          </span>
          {meeting &&
          <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[115px]'>
         <Link to='/member/membermeet'>   <li>ADD</li></Link>
         <Link to='/member/memberviewmeet' >  <li>VIEW</li></Link>
            </div>
          }
          </div>
          <div><span onClick={notificationdropdown}>
          NOTIFICATION
          </span>
          {notificatin &&
          <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[115px]'>
         <Link to='/member/membernot'>   <li>ADD</li></Link>
         <Link to='/member/memberviewnot' >  <li>VIEW</li></Link>
            </div>
          }
          </div>

    <Link to='/member/memberviewcomp'><div>COMPLAINT</div></Link>
        <div>LOG OUT</div>
        </div>
    </div>
    <div className='sm:pt-20'>

    </div>
    <div onClick={close} className=''> 
    <Outlet/>
    </div>
    </>
  )
}
