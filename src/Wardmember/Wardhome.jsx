import React from 'react'
import meet from './meeting.jpg'
import service from './Rectangle 250.png'
import apln from './aplcsn.png'
import com from './complaint.png'
import met from './met.png'
import not from './not.png'
import { Link } from 'react-router-dom'

export const Wardhome = () => {
  return (
    <div className='bg-[#CCDAF6]'>
      <div className='flex flex-wrap gap-20'>
    <div >
      <img className='mt-4 ' src={meet} alt=''/>
    </div>
    <div className='mt-20 w-[750px]'><a className='font-serif font-bold text-[25px] hover:text-[28px]'>WELCOME TO ULLIYERI-E-PANCHAYAT PORTAL</a><br></br>
    <a className='font-serif font-bold text-[20px]'>Our services are available here</a><br></br>
    <a className='mt-5'>ULLIYERI-E-PANCHAYAT PORTAL intend to provide panchayat services to peoples which are easily accesible.
        This project endeavors to modernize Panchayat services, promoting accessibility and efficiency in rural governance through technology. The goal is to empower communities, enhance communication, and foster transparent decision-making. </a>
    </div>
    </div>
    <div className='bg-[#617DB2] w-[100%] h-60 flex flex-wrap gap-24 justify-center mt-4'>
      <div className=''>
      <Link to='/member/memberviewservice'><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={service} alt=''/></Link>
        <b className=''>SERVICES</b>
      </div>
      {/* <div className=''>
        <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={apln} alt=''/>
        <b>MY APPLICATIONS</b>
      </div> */}
      <div className=''>
      <Link to='/member/memberviewcomp'> <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={com} alt=''/></Link>
        <b>COMPLAINT</b>
      </div>
      <div className=''>
    <Link to='/member/meetpresident'><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={met} alt=''/></Link>
        <b>MEETING</b>
      </div>
      <div className=''>
      <Link to='/member/notpresident' ><img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={not} alt=''/></Link>
  <b>NOTIFICATION</b>
      </div>
       </div> 
     
      </div>


  )
}
