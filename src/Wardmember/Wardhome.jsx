import React from 'react'
import meet from './meeting.jpg'
import service from './Rectangle 250.png'
import apln from './aplcsn.png'
import com from './complaint.png'
import met from './met.png'
import not from './not.png'

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
        <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={service} alt=''/>
        <b className=''>SERVICES</b>
      </div>
      <div className=''>
        <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={apln} alt=''/>
        <b>MY APPLICATIONS</b>
      </div>
      <div className=''>
        <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={com} alt=''/>
        <b>COMPLAINT</b>
      </div>
      <div className=''>
     <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={met} alt=''/>
        <b>MEETING</b>
      </div>
      <div className=''>
        <img className='mt-8 h-24 w-24 hover:bg-[#99B9F6]' src={not} alt=''/>
        <b>NOTIFICATION</b>
      </div>
       </div> 
      <div className='bg-[#CCDAF6] w-[100%] h-60  mt-4'>
      <div className=' text-center font-serif text-[20px] font-bold'><h2>MEETINGS</h2></div>

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
                <th scope="col" class="px-6 py-3">
                    AGENDA
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    TIME
                </th>
                <th scope="col" class="px-6 py-3">
                    VENUE
                </th>
               

            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    mmfff gggh rrtt
                </th>
                <td class="">
                    15/34/23
                </td>
                <td class="">
                    10:00am
                </td>
                <td class="">
                    Ulliyeri 
                </td>
               
            </tr>
          
        </tbody>
    </table>
</div>
{/* <div className='bg-[#617DB2] w-[100%] h-60 flex flex-wrap gap-24 justify-center mt-4'>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

</div> */}
</div>
      </div>


  )
}
