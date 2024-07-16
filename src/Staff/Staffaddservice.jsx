import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export const Staffaddservice = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=async(event)=>{
    event.preventDefault('')
    let response=await axios.post('https://project-backend-2i9b.onrender.com/Staff/addservice',data)
    console.log(response)
    const requiredFields = ['service','processingTime','requirement'];

for (const field of requiredFields) {
    if (!data[field]) {
        return toast.error(`${field} is required`);
    }
}
    setdata(data)
    toast.success('submit successfully')
    console.log(data)
  }
  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-[100%]  bg-[#CCDAF6] sm:h-[660px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>SERVICES</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              SERVICE:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='service' type='text' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PROCESSING TIME:

            </span>
            <input onChange={handlechange} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='processingTime' type='text' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              REQUIREMENTS:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='requirement' type='text' id=''></input></div>
          
          
            <div className='text-center'>

  <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto'>SUBMIT</button>
    </div>
    </div>
    </div>
    </div>
    </form>
  )
}