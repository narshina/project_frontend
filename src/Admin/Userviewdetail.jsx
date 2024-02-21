import React from 'react'
import photo from './photo.jpg'

export const Userviewdetail = () => {
  return (
    <div className=' flex justify-center w-screen h-80 bg-[#CCDAF6] '>
        <div className=' bg-[#0F3053] h-[620px] w-[400px] mt-7  rounded-2xl border-4 border-white'>
          <div className='h-25 w-25 flex  flex-col pt-5 text-center justify-center'>
          <div><img className='rounded-full m-auto h-28 w-28' src={photo} alt=''/>
          <div><label className='text-white ml-'>Akil</label></div></div>
          <div className='text-white leading-[30px] flex  flex-col'>
            <div><label>Age: 45</label></div>
           <div><label>Date of birth:16/11/2001</label></div>
           <div><label>Gender:male</label></div>
           <div><label>Email Id:Akil@gmail.com</label></div>
           <div><label>Ward number:3</label></div>
           <div><label>Ward name:Ulliyeri north</label></div>
           <div><label>House number:259</label></div>
           <div><label>House name:Kizhakkayil</label></div>
           <div><label>Street:gdhsh</label></div>
           <div><label>District:calicut</label></div>
           <div><label>Pincode:675888</label></div>
           <div><label>Phone number:9539246219</label></div>
           <div><label>Status:Pending</label></div>
     <div className='flex m-auto gap-1'><button className='button text-black font-semibold bg-indigo-400 w-40 h-9  rounded mt-5 border-2 border-white '>ACCEPT</button>
     <div><button className='button text-black font-semibold bg-indigo-400 w-40 h-9  rounded mt-5 border-2 border-white'>REJECT</button></div></div>
                </div>
                </div>
                </div>
      </div>
  )
}
