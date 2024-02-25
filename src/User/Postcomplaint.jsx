import React from 'react'
import com from './com.jpg'

export const Postcomplaint = () => {
  return (
    
<div className='w-[100%] h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div className='h-[450px] w-[450px]  mt-7 ' >
        <div><img className='mt-5 h-44 w-96' src={com} alt=''/></div>
        <div><a className='text-black'>COMPLAINT TO:</a>
        <input className='h-9 w-96 border-black bg-white'/></div>
        <div><a className='text-black'>COMPLAINT:</a>
        <input className='h-24 w-96 border-black bg-white'/></div>
        <div><button className='h-9 w-96 bg-[#0F3053] mt-5 text-white' >SUBMIT</button></div>
    </div>
</div>

  )
}
