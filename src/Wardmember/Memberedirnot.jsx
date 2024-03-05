import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Memberedirnot = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault('')
    event.preventDefault()
    const requiredFields = ['notification'];

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
    <div className=' w-screen h-[655px] bg-[#CCDAF6] '>
      <div className=' flex  flex-wrap h-52 w-[500PX]  m-auto'>
        <h2 className='font-serif font-bold text-[20px] mt-4 m-auto h-0'>NOTIFICATION</h2>
        <div className=' h-5'>NOTIFICATION:
        <input onChange={handlechange}  className='text-black h-9 w-72 bg-white' name='notification' type='text' id=''></input></div>
        <button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-1 m-auto'>SUBMIT</button>
      </div>
    </div>
    </form>
  )
}
