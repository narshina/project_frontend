import React, { useState } from 'react'
import { Outlet, Link} from 'react-router-dom'

const AdminRouter = () => {
  const [drop,setdrop]=useState(false)
  const [staff,setStaff]=useState(false)
  const [member,setmember]=useState(false)
  const [not,setnot]=useState(false)
  const [meet,setmeet]=useState(false)
  let dropdown=()=>{
    setdrop(!drop)
    setmember(false)
    setStaff(false)
    setnot(false)
  }
  let staffdropdown=()=>{
    setStaff(!staff)
    setmember(false)
    setdrop(false)
    setnot(false)
  }
  let memberdropdown=()=>{
    setmember(!member)
    setdrop(false)
    setStaff(false)
    setnot(false)
  }
  let notdropdown=()=>{
    setnot(!not)
    setmember(false)
    setStaff(false)
    setdrop(false)
  }
  let meetdropdown=()=>{
    setmeet(!meet)
    setmember(false)
    setStaff(false)
    setdrop(false)
    setnot(false)
  }
  let close=()=>{
    setdrop(false)
    setStaff(false)
    setmember(false)
    setnot(false)
    setmeet(false)
  }
  return (
    <>
    <div className='flex navcolor p-2  w-[100%] gap-6 text-white justify-between items-center text-[20px] flex-wrap'>

        <div>
          <b> ULLIYERI-E-PANCHAYAT PORTAL</b>
        </div>

        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
       <Link to='/admin'>   <div>HOME</div></Link>
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
                   <div><span  onClick={memberdropdown}>
                  WARD MEMBER
                  </span>
                  {member &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                      <Link to='/admin/addwardmember'> <li>ADD</li></Link>
                      <Link to='/admin/viewwardmember'> <li>VIEW</li></Link>
                        </div> 
                   }

                   </div>
        <Link to='/admin/userview'>   <div>USERS</div></Link>
        
        <div><span  onClick={notdropdown}>
                  NOTIFICATION
                  </span>
                  {not &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/admin/addnot'><li>ADD</li></Link> 
                <Link to='/admin/viewnot' ><li>VIEW</li></Link>
                        </div> 
                   }

                   </div>
                   <div><span  onClick={meetdropdown}>
                  MEETING
                  </span>
                  {meet &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/admin/addmeet'><li>ADD</li></Link> 
              <Link to='/admin/viewmeet'> <li>VIEW</li></Link>
                        </div> 
                   }

                   </div>
       <Link to='/admin/viewcomplaint'><div>COMPLAINT</div></Link>
          <div>LOG OUT</div>

        </div>
      </div>
    <div onClick={close} className="">
    <Outlet/>
    </div>
    </>
  )
}

export default AdminRouter
