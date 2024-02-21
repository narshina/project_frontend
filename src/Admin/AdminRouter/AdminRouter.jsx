import React, { useState } from 'react'
import { Outlet, Link} from 'react-router-dom'

const AdminRouter = () => {
  const [drop,setdrop]=useState(false)
  const [staff,setStaff]=useState(false)
  let dropdown=()=>{
    setdrop(!drop)
  }
  let staffdropdown=()=>{
    setStaff(!staff)
  }
  let close=()=>{
    setdrop(false)
    setStaff(false)
  }
  return (
    <>
    <div className='flex navcolor p-2 fixed w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap'>

        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>

        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
          <div>HOME</div>
          <div><span  onClick={dropdown}>
                  SECRETARY
                  </span>
                  {drop &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                      <Link to='/admin/addscre'> <li>ADD</li></Link>
                      <Link to='/admin/viewsecr'> <li>VIEW</li></Link>
                        </div> 
                   }

                   </div>
                   <div><span  onClick={staffdropdown}>
                  STAFF
                  </span>
                  {staff &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[150px] '>
                    <Link to='/admin/addsec'>  <li>ADD CATEGORY</li></Link>
                    <Link to='/admin/addstaff'>  <li>ADD STAFF</li></Link>
                    <Link to='/admin/viewstaff'>  <li>VIEW STAFF</li></Link>
                        </div> 
                   }

                   </div>
          <div>WARD MEMBERS</div>
          <div>USERS</div>
          <div>NOTIFICATION</div>
          <div>MEETING</div>
          <div>COMPLAINT</div>
          <div>LOG OUT</div>

        </div>
      </div>
    <div onClick={close} className="pt-20">
    <Outlet/>
    </div>
    </>
  )
}

export default AdminRouter
