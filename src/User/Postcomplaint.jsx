import React, { useState } from 'react'
import com from './com.jpg'
import toast from 'react-hot-toast'

export const Postcomplaint = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    const requiredFields = ['complaint to','complaint'];

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
<div className='w-[100%] h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div className='h-[450px] w-[450px]  mt-7 ' >
        <div><img className='mt-5 h-44 w-96 rounded-xl' src={com} alt=''/></div>
        <div><a className='text-black'>COMPLAINT TO:</a>
        <input onChange={handlechange} className='h-9 w-96 border-black bg-white rounded-xl' name='complaint to' type='text' id=''/></div>
        <div><a className='text-black'>COMPLAINT:</a>
        <input onChange={handlechange} className='h-24 w-96 border-black bg-white rounded-xl' name='complaint' type='text' id=''/></div>
        <div><button type='submit' className='h-9 w-96 bg-[#0F3053] mt-5 text-white rounded-xl' >SUBMIT</button></div>
    </div>
</div>
</form>
  )
}
