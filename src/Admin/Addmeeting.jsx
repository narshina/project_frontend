import React, { useState } from 'react'

export const Addmeeting = () => {
  const[data,setData]=useState('')

     
  let handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    setData('')
    console.log(data);
  } 
  return (
   
    <div className=' w-screen  bg-[#CCDAF6] sm:h-[650px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>MEETING</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>
          <form onSubmit={handlesubmit}>



          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              AGENDA:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white text-black rounded-r-lg' name='agenda' type='text' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black' name='date' type='date' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              TIME:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg  text-black' name='time' type='time' id=''></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              VENUE:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black' name='venue' type='text' id=''></input></div>
            <div className='text-center'>

    <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto' id=''>SUBMIT</button>

    </div>
          </form>
    </div>
    </div>
    </div>
  )
}
