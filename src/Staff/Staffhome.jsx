import React from 'react'
import meet from './meeting.jpg'
import service from './Rectangle 250.png'
import apln from './aplcsn.png'
import com from './complaint.png'
import met from './met.png'
import not from './not.png'
import icon from './icon.png'
import { Link } from 'react-router-dom'

export const Staffhome = () => {
  return (
    <div className='bg-[#CCDAF6] h-[660px]'>
    <div className='flex justify-center'>
  
  <div className='mt-20 w-[850px] text-center'><div className='font-serif font-bold text-[25px] '>WELCOME TO ULLIYERI-E-PANCHAYAT PORTAL</div>
  <div><img src={icon} alt='' className='mx-auto h-20 w-20'/></div>
<br></br>
  <a className='font-serif font-bold text-[20px] mt-3'>Our services are available here</a><br></br>
  <a className='mt-11'>ULLIYERI-E-PANCHAYAT PORTAL intend to provide panchayat services to peoples which are easily accesible.
      This project endeavors to modernize Panchayat services, promoting accessibility and efficiency in rural governance through technology. The goal is to empower communities, enhance communication, and foster transparent decision-making. </a>
  </div>
  </div>
  <div className='bg-[#617DB2] w-[100%] h-60 flex flex-wrap gap-24 justify-center mt-28'>
    <div className=''>
   <Link to='/staff/staffviewservice'>  <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={service} alt=''/></Link>
      <b className=''>SERVICES</b>
    </div>
    <div className=''>
   <Link to='/staff/staffviewapply'><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={apln} alt=''/></Link>
      <b>APPLICATIONS</b>
    </div>
    {/* <div className=''>
     <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={com} alt=''/>
      <b>COMPLAINT</b>
    </div> */}
    <div className=''>
  <Link to='/staff/staffviewmeet'><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={met} alt=''/></Link>
      <b>MEETING</b>
    </div>
    <div className=''>
   <Link to='/staff/staffviewnot'><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={not} alt=''/></Link>
      <b>NOTIFICATION</b>
    </div>
     </div> 
    

  </div>
  )
}
