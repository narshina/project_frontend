import React from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'

export const Viewsecdetail = () => {
  return (
    <div className='w-screen h-[655px]'>
      <div className=' flex justify-center w-screen h-80  bg-[#CCDAF6] '>
        <div className=' bg-[#0F3053] h-[500px] w-[400px] mt-7 rounded-2xl border-4 border-white'>
          <div className='h-25 w-25 flex  flex-col pt-5 text-center justify-center'>
          <div><img className='rounded-full m-auto h-28 w-28' src={photo} alt=''/></div>
          <div><label className='text-white ml-'>Akil</label></div>
          <div><label className='text-white ml-0rem'>akil@gmail.com</label></div></div>
          <div className='text-white leading-[23px] flex ml-36 flex-col'>
            <tr>
              <td>age</td>
              <td>:45</td>
            </tr>
            <tr>
              <td>grnder</td>
              <td>:male</td>
            </tr>
            <tr>
              <td>qualification</td>
              <td>:mba</td>
            </tr>
            <tr>
              <td>house</td>
              <td>:hhhhhh</td>
            </tr>
            <tr>
              <td>street</td>
              <td>:ghhjjj</td>
            </tr>
            <tr>
              <td>district</td>
              <td>:fghhttt</td>
            </tr>
            <tr>
              <td>pincode</td>
              <td>:768543</td>
            </tr>
            <td>
              <tr>phone number</tr>
              <tr>:9539246119</tr>
            </td>
            {/* <div><label>Age: 45</label></div>
           <div><label>Gender:Male</label></div>
           <div><label>Qualification:MBA</label></div>
           <div><label>House:ghhh</label></div>
           <div><label>Street:ghhjjjj</label></div>
           <div><label>District:calicut</label></div>
           <div><label>Pincode:675888</label></div>
           <div><label>Phone number:9539246219</label></div> */}
          <Link to='/admin/editsec'> <div><button className='button text-black font-semibold bg-indigo-400 w-40 h-9 -ml-9 rounded mt-7'>EDIT</button></div></Link>
                </div>
                </div>
      </div>
    </div>
  )
}
