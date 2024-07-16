import React, { useEffect, useState } from 'react'
import { Outlet, Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const AdminRouter = () => {
  let navigate=useNavigate()
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('https://project-backend-2i9b.onrender.com/User/loginaccess',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.usertype !=='president'){
        navigate('/login')
      }
 
    }
    auth()
  },[])


  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/login')
}


  const [drop,setdrop]=useState(false)
  const [staff,setStaff]=useState(false)
  const [member,setmember]=useState(false)
  const [not,setnot]=useState(false)
  const [meet,setmeet]=useState(false)
  const [nav,setnav]=useState(true)
  const [news,setnews]=useState(false)
  let Toggle=()=>{
    setnav(!nav)
  }
  let Toggletrue=()=>{
    setnav(true)
  }
  let newsdropdown=()=>{
    setnews(!news)
    setmember(false)
    setStaff(false)
    setnot(false)
    setdrop(false)
    setmeet(false)
  }
  let dropdown=()=>{
    setdrop(!drop)
    setmember(false)
    setStaff(false)
    setnot(false)
    setnews(false)
    setmeet(false)
  }
  let staffdropdown=()=>{
    setStaff(!staff)
    setmember(false)
    setdrop(false)
    setnot(false)
    setnews(false)
    setmeet(false)
  }
  let memberdropdown=()=>{
    setmember(!member)
    setdrop(false)
    setStaff(false)
    setnot(false)
    setmeet(false)
    setnews(false)
  }
  let notdropdown=()=>{
    setnot(!not)
    setmember(false)
    setStaff(false)
    setdrop(false)
    setmeet(false)
    setnews(false)
  }
  let meetdropdown=()=>{
    setmeet(!meet)
    setmember(false)
    setStaff(false)
    setdrop(false)
    setnot(false)
    setnews(false)
  }
  let close=()=>{
    setdrop(false)
    setStaff(false)
    setmember(false)
    setnot(false)
    setmeet(false)
    setnews(false)
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
          <div className='z-10'><span  onClick={dropdown}>
                  SECRETARY
                  </span>
                  {drop &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                      <Link to='/admin/addscre'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link>
                      <Link to='/admin/viewsecdetail'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
                        </div> 
                   }

                   </div>
                   <div className='z-10'><span  onClick={staffdropdown}>
                  STAFF
                  </span>
                  {staff &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[150px] '>
                    <Link to='/admin/addsec'>  <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD CATEGORY</li></Link>
                    <Link to='/admin/viewcate'><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW CATEGORY</li></Link>
                    <Link to='/admin/addstaff'>  <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD STAFF</li></Link>
                    <Link to='/admin/viewstaff'>  <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW STAFF</li></Link>
                        </div> 
                   }

                   </div>
                   <div className='z-10'><span  onClick={memberdropdown}>
                  WARD MEMBER
                  </span>
                  {member &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[180px] '>
                      <Link to='/admin/addward'><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD WARD</li></Link>
                      <Link to='/admin/addwardmember'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD WARD MEMBER</li></Link>
                      <Link to='/admin/viewwardmember'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW WARD MEMBER</li></Link>
                        </div> 
                   }

                   </div>
        <Link to='/admin/userview'>   <div>USERS</div></Link>
        
        <div className='z-10'><span  onClick={notdropdown}>
                  NOTIFICATION
                  </span>
                  {not &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/admin/addnot'><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link> 
                <Link to='/admin/viewnot' ><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
                        </div> 
                   }

                   </div>
                   <div><span  onClick={meetdropdown}>
                  MEETING
                  </span>
                  {meet &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/admin/addmeet'><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link> 
              <Link to='/admin/viewmeet'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
                        </div> 
                   }

                   </div>
       <Link to='/admin/viewcomplaint'><div>COMPLAINT</div></Link>
       <Link to='/admin/viewhistory'><div>HISTORY</div></Link>
       <div><span  onClick={newsdropdown}>
                  ANNOUNCEMENT
                  </span>
                  {news &&
                      <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[90px] '>
                <Link to='/admin/addnews'><li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link> 
              <Link to='/admin/viewnews'> <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
                        </div> 
                   }

                   </div>
        <div onClick={logout}>LOG OUT</div>

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
