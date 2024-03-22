import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Viewsecdetail = () => {
  let id=localStorage.getItem('id')
  console.log('id')
  const[userdata,setuserdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/President/viewsecs`)
      console.log(response)
      setuserdata(response.data)
    }
    fetchdata()
  },[refresh]
  )


  return (
    <div className='w-[100%] h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div class="p-5 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit  rounded-xl mt-24">
    <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:4000/uploads/${userdata.photo}`}  alt=""/>
    <div class="text-sm mt-5">
        <a href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">{userdata.name}
        </a>
        <p>{userdata.email}</p><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className=''>{userdata.age}</div>
        </div>
        <div className=''>
        <div className='font-bold'>Gender</div>
        <div className=''>{userdata.gender}</div>
        </div>
        <div className=''>
        <div className='font-bold'>Qualification</div>
        <div className=''>{userdata.qualification}</div>
        </div>
        <div className=''>
        <div className='font-bold'>house</div>
        <div className=''>{userdata.houseName}</div>
        </div>
</div>

<div className='flex justify-around gap-4 mb-5'>

        

        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>{userdata.street}</div>
        </div>
        <div className=''>
        <div className='font-bold'>district</div>
        <div className=''>{userdata.district}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>{userdata.pincode}</div>
        </div>
        <div className=''>
        <div className='font-bold'>phone number</div>
        <div className=''>{userdata.phoneNumber}</div>
        </div>

        </div>
        </div>
        
    </div>
    <Link to={`/admin/editsec/${userdata._id}`}>
<button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button></Link>
   
   

</div>
</div>
  )
}
