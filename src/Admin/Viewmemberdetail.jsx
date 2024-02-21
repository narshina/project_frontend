import React from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'

export const Viewmemberdetail = () => {
  return (
      <div className=' flex justify-center w-screen h-80 bg-[#CCDAF6] '>
        <div className=' bg-[#0F3053] h-[550px] w-[400px] mt-7  rounded-2xl border-4 border-white'>
          <div className='h-25 w-25 flex  flex-col pt-5 text-center justify-center'>
          <div><img className='rounded-full m-auto h-28 w-28' src={photo} alt=''/>
          <div><label className='text-white ml-'>Akil</label></div></div>
          <div className='text-white leading-[30px] flex  flex-col'>
            <div><label>Age: 45</label></div>
           <div><label>Gender:Male</label></div>
           <div><label>Email Id:Akil@gmail.com</label></div>
           <div><label>Ward number:3</label></div>
           <div><label>Ward name:Ulliyeri north</label></div>
           <div><label>House:klllhdj</label></div>
           <div><label>Street:gdhsh</label></div>
           <div><label>District:calicut</label></div>
           <div><label>Pincode:675888</label></div>
           <div><label>Phone number:9539246219</label></div>
     <Link to='/admin/editmember'>  <div><button className='button text-black font-semibold bg-indigo-400 w-40 h-9 -ml-9 rounded mt-7'>EDIT</button></div></Link>
                </div>
                </div>
                </div>
      </div>
  )
}
