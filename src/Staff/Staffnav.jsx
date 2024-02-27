import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Staffnav = () => {
    const[service,setservise]=useState(false)
    let servicedropdown=()=>{
        setservise(!service)
    }
    let close=()=>{
        setservise(false)
    }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap sm:z-30 sm:fixed'>
        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
    <Link to='/president'> <div>HOME</div></Link>
      <div><span  onClick={servicedropdown}>
                  SERVICE
                  </span>
                  {service &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/staff/staffaddservice' ><li>ADD</li></Link>
                <Link to='/staff/staffviewservice' ><li>VIEW</li></Link>
                        </div> 
                   }

                   </div>
               <Link to='/staff/staffviewapply'><div>APLLICATIONS</div></Link>
    <Link to='/staff/staffviewmeet'><div>MEETING</div></Link>
    <Link to='/staff/staffviewnot'><div>NOTIFICATION</div></Link>
      <div>LOG OUT</div>
        </div>
    </div>
    <div className='sm:pt-20'>

    </div>
    <div onClick={close} className="">
    <Outlet/>
    </div>
    </>
  )
}
