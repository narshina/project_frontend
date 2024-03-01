import React, { useState } from 'react'
import { Outlet, Link} from 'react-router-dom'

const AdminRouter = () => {
  const [drop,setdrop]=useState(false)
  const [staff,setStaff]=useState(false)
  const [member,setmember]=useState(false)
  const [not,setnot]=useState(false)
  const [meet,setmeet]=useState(false)
  const [nav,setnav]=useState(true)
  let Toggle=()=>{
    setnav(!nav)
  }
  let Toggletrue=()=>{
    setnav(true)
  }
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
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    { 
    nav &&
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
       <Link to='/admin/viewhistory'><div>HISTORY</div></Link>
          <div>LOG OUT</div>

        </div>
}
      </div>
    <div onClick={close} className="">
    <Outlet/>
    </div>
    </>
  )
}

export default AdminRouter
