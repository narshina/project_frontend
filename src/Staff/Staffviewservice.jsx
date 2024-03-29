import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Staffviewservice = () => {
   let id=localStorage.getItem('id')
   const[userdata,setuserdata]=useState([''])
   const[refresh,setrefresh]=useState(false)
   useEffect(()=>{
    let fetchData=async ()=>{
    let response=await axios.get(`http://localhost:4000/Staff/vservice`)
    console.log(response)
    setuserdata(response.data)
    }
    fetchData()
   },[refresh])
   
    const[modal,setmodal]=useState(false)
    

    let openmodal=()=>{
        setmodal(!modal)
    }
  return (
    <>
    <div  className='bg-[#CCDAF6] h-screen '>
  <div className='font-bold font-serif text-[20px] m-auto text-center '>SERVICE LIST</div>

<form class="max-w-md mx-auto mt-4">   
    <label for="default-search" class="mb-2 text-sm bg-[#0F3053] font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search services here" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#0F3053] hover:bg-[#99B9F6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    <div className='flex sm:gap-4 w-[80%] pt-4 flex-wrap m-auto justify-center'>
  
{userdata.map((item)=>(

  <Link to={`/staff/Addfield/${item._id}`}><button   className=" block text-white bg-[#0F3053] hover:bg-[#77A4FA] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  h-24 w-72text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
{item.service}
</button></Link>
  ))}

    </div>
    </div>

{
  modal &&

<div  class=" ">
    <div class="absolute sm:top-40 top-56 sm:left-[25%] p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Details
                </h3>
                <button onClick={openmodal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg  class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span  class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
                <h3 class="text-base leading-relaxed text-black dark:text-gray-400 font-bold">
                    Processing time
                </h3>
                <a>3 working days</a>
                {/* <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p> */}
                <h2 class="text-black font-bold">Required documents</h2>
                <li>Election id</li>
                <li>Ration card copy</li>
                <li>SSLC certificate</li>
                <h3 class="text-base leading-relaxed text-black dark:text-gray-400 font-bold">
                    Processing time
                </h3>
                <a>3 working days</a>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Link to={'/staff/staffeditservice'}>
  <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">EDIT</button>
                {/* <button data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button> */}
    </Link>
            </div>
        </div>
    </div>
</div>
}
</>
  )
}
