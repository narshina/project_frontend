import React from 'react'

export const Membermeet = () => {
  return (
    <div className=' w-screen  bg-[#CCDAF6] sm:h-[650px] pt-5'>
    <div className='font-bold font-serif text-[20px] m-auto text-center'>MEETING</div>
    <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              AGENDA:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg text-black' type='date'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              TIME:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              VENUE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text-center'>

    <button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto'>SUBMIT</button>
    </div>
    </div>
    </div>
    </div>
  )
}
