import React from 'react'
import man from './mann.jpg'
import ulyr from './ulliyeri1.webp'
import ulri from './palam.png'
import walk from './walking.png'
import bus from './east.png'

export const AdminHome = () => {
  return (
    <div className=' w-full  pt-20 pl-8 bg-[#617DB2] '>
        <div className=' flex flex-wrap w-[1470px] h-[700px] borders bg-white -mt-16'>
        <img className='man h-80 w-96 ml-7 mt-5' src={man} alt=""/>
        <div className='ml-14 mt-10 w-[800px]'>ULLIYERI-E-PANCHAYAT PORTAL intend to provide panchayat services to peoples which are easily accesible.
        This project endeavors to modernize Panchayat services, promoting accessibility and efficiency in rural governance through technology. The goal is to empower communities, enhance communication, and foster transparent decision-making. </div>
        <div className='images flex flex-wrap'><img className=' ir ml-24 h-56 w-56 rounded-lg' src={ulyr} alt=""/>
        <img className='rtt ml-24 h-56 w-56 rounded-lg' src={ulri} alt=""/>
        <img className='rtt ml-24 h-56 w-56 rounded-lg' src={walk} alt=""/>
        <img className='rtt ml-24 h-56 w-56 rounded-lg' src={bus} alt=""/>
        </div>
        </div>
    </div>
  )
}
