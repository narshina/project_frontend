import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Addmeeting = () => {
  const[data,setData]=useState('')

     
  let handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=async(event)=>{
    event.preventDefault()
    let response=await axios.post('http://localhost:4000/President/addmeeting',data)
    console.log(response)
    const requiredFields = ['agenda','date','time','venue'];

for (const field of requiredFields) {
    if (!data[field]) {
        return toast.error(`${field} is required`);
    }
}
    setData(data)
    toast.success('submit successfully')

    console.log(data);
  } 
  const currentDate = new Date().toISOString().split('T')[0];
  return (
   
    <div className=' w-screen  bg-[#CCDAF6] sm:h-[660px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>MEETING</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>
          <form onSubmit={handlesubmit}>



          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              AGENDA:

            </span>
            <input onChange={handlechange} className=' pl-3 h-9 w-56 bg-white text-black rounded-r-lg' name='agenda' type='text' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE:

            </span>
            <input onChange={handlechange} className='pl-3 h-9 w-56 bg-white rounded-r-lg text-black' name='date' type='date' id='' min={currentDate}></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              TIME:

            </span>
            <input onChange={handlechange} className='pl-3 h-9 w-56 bg-white rounded-r-lg  text-black' name='time' type='time' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              VENUE:

            </span>
            <input onChange={handlechange} className='pl-3 h-9 w-56 bg-white rounded-r-lg text-black' name='venue' type='text' id=''></input></div>
            <div className='text-center'>

    <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto' id=''>SUBMIT</button>

    </div>
          </form>
    </div>
    </div>
    </div>
  )
}
