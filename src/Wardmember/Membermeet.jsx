import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Membermeet = () => {
  const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
    let handlesubmit=async(event)=>{
    event.preventDefault()
    let id=localStorage.getItem('id')
    let response=await axios.post('https://project-backend-2i9b.onrender.com/President/addmeeting',{...data,userid:id})
    console.log(response)
    setrefresh(!refresh)
    const requiredFields = ['agenda','date','time','venue'];

for (const field of requiredFields) {
    if (!data[field]) {
        return toast.error(`${field} is required`);
    }
}
    setdata(data)
    toast.success('submit successfully')
    console.log(data)
  }
  const currentDate = new Date().toISOString().split('T')[0];
  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen  bg-[#CCDAF6] sm:h-[660px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>MEETING</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              AGENDA:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='agenda' type='text'></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE:

            </span>
            <input onChange={handlechange} className= ' h-9 w-56 bg-white rounded-r-lg text-black pl-2' name='date' type='date' min={currentDate}></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              TIME:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='time' type='time'></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              VENUE:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='venue' type='text'></input></div>
            <div className='text-center'>

    <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto'>SUBMIT</button>
    </div>
    </div>
    </div>
    </div>
    </form>
  )
}
