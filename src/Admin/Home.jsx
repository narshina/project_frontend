import React from 'react'
import meet from './meeting.jpg'
import icon from './icon.png'
import com from './complaint.png'
import met from './met.png'
import not from './not.png'
import hist from './his.png'
import { Link } from 'react-router-dom'


export const AdminHome = () => {
  return (
    <div className='bg-[#CCDAF6] h-[660px]'>
      <div className='flex justify-center '>
    {/* <div >
      <img className='mt-4 h-[250px]' src={man} alt=''/>
    </div> */}
    <div className='mt-20 w-[850px] text-center'><div className='font-serif font-bold text-[30px] '>WELCOME TO ULLIYERI-E-PANCHAYAT PORTAL</div>
    <div className=''><img src={icon} alt='' className='mx-auto h-20 w-20'/></div>
    <br></br>
   
    <a className='font-serif font-bold mt-3 text-[23px]'>Our services are available here</a><br></br>
    <a className='mt-11'>ULLIYERI-E-PANCHAYAT PORTAL intend to provide panchayat services to peoples which are easily accesible.
        This project endeavors to modernize Panchayat services, promoting accessibility and efficiency in rural governance through technology. The goal is to empower communities, enhance communication, and foster transparent decision-making. </a>
    </div>
    </div>
    <div className='bg-[#617DB2] w-[100%] h-60 flex flex-wrap gap-24 justify-center mt-28'>
      {/* <div className=''>
        <img className='mt-8 h-24 w-24 ' src={service} alt=''/>
        <b className=''>SERVICES</b>
      </div> */}
      <div className=''>
      <Link to='/admin/viewhistory' ><img className='mt-8 h-24 w-24' src={hist} alt=''/></Link>
        <b>HISTORY</b>
      </div>
      <div className=''>
      <Link to='/admin/viewcomplaint'><img className='mt-8 h-24 w-24' src={com} alt=''/></Link>
        <b>COMPLAINT</b>
      </div>
      <div className=''>
    <Link to='/admin/addmeet'><img className='mt-8 h-24 w-24 ' src={met} alt=''/></Link>
        <b>MEETING</b>
      </div>
      <div className=''>
     <Link to='/admin/addnot'><img className='mt-8 h-24 w-24 ' src={not} alt=''/></Link>
        <b>NOTIFICATION</b>
      </div>
       </div> 
      

    </div>
  )
}
