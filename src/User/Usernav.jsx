import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LangContext } from './LanguageContext'

export const Usernav = () => {
  const [comp,setcomp]=useState(false)
  const [user,setuser]=useState(true)
  let Toggle=()=>{
    setuser(!user)
  }
  let Toggletrue=()=>{
    setuser(true)
  }
  let value=useContext(LangContext)
  const {lang,toggleLang}=value
  console.log(value);
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
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {
      user &&
  
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
       {lang?<div onClick={toggleLang}>ENGLISH</div> : <div onClick={toggleLang}>MALAYALAM</div>} 
      <Link to='/Login'><div>LOG OUT</div></Link>
        </div>
}
        </div>
        <div onClick={close} className=''>
        <Outlet/>
        </div>
    </>
  )
}
