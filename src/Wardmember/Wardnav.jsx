import React, { useEffect, useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Wardnav = () => {
  let navigate=useNavigate()
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('http://localhost:4000/User/loginaccess',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.usertype !=='member'){
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
    const[meeting,setmeet]=useState(false)
    const[notificatin,setnotification]=useState(false)
    const[member,SetMember]=useState(true)
    let Toggle=()=>{
      SetMember(!member)
    }
    let Toggletrue=()=>{
      SetMember(true)
    }
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
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {
      member &&
    
        <div className='flex nav1 p-5 gap-6 flex-wrap text-white text-[15px]'>
    <Link to='/member' ><div>HOME</div></Link>
  <Link to='/member/memberviewservice'> <div>SERVICES</div></Link>
  <div><span onClick={meetdropdown}>
          MEETING
          </span>
          {meeting &&
          <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[115px]'>
         <Link to='/member/membermeet'>   <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link>
         <Link to='/member/memberviewmeet' >  <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
            </div>
          }
          </div>
          <div><span onClick={notificationdropdown}>
          NOTIFICATION
          </span>
          {notificatin &&
          <div className='list-none absolute top-[78px] bg-[#0F3053] p-4 pt-2 w-[115px]'>
         <Link to='/member/membernot'>   <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>ADD</li></Link>
         <Link to='/member/memberviewnot' >  <li className='border-b-2 border-gray-400 hover:text-blue-950 hover:bg-white'>VIEW</li></Link>
            </div>
          }
          </div>

    <Link to='/member/memberviewcomp'><div>COMPLAINT</div></Link>
   <div onClick={logout}>LOG OUT</div>
        </div>
}
    </div>
    <div className='sm:pt-20'>

    </div>
    <div onClick={close} className=''> 
    <Outlet/>
    </div>
    </>
  )
}
