import React from 'react'
import meet from './meeting.jpg'

export const Wardhome = () => {
  return (
    <div className='ward'>
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
    </div>
  )
}
