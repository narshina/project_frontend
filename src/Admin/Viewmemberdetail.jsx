import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Viewmemberdetail = () => {
  let {id}=useParams()
  const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
      console.log(response.data);
      setdata(response.data)
    }
    fetchData()
  },[])
  return (
    <div className='w-[100%] h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div class="p-5 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit rounded-xl mt-24">
    <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:4000/uploads/${data.photo}`} alt=""/>
    <div class="text-sm mt-5">
        <a href="#"
            class="font-medium leading-none text-black hover:text-indigo-600 transition duration-500 ease-in-out">{data.name}
        </a>
        <p className='text-black'>{data.email}</p><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className='text-black'>{data.age}</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward number</div>
        <div className='text-black'>{data.wardNumber}</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward name</div>
        <div className=''>{data.wardName}</div>
        </div>
        <div className=''>
        <div className='font-bold'>house</div>
        <div className='text-black'>{data.houseName}</div>
        </div>
</div>

<div className='flex justify-around gap-4 mb-5'>

        

        <div className=''>
        <div className='font-bold'>street</div>
        <div className='text-black'>{data.street}</div>
        </div>
        <div className=''>
        <div className='font-bold'>post office</div>
        <div className='text-black'>{data.district}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className='text-black'>{data.pincode}</div>
        </div>
        <div className=''>
        <div className='font-bold'>phone number</div>
        <div className='text-black'>{data.phoneNumber}</div>
        </div>

        </div>
        </div>
        
    </div>
    <Link to={`/admin/editmember/${data._id}`}>
<button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button></Link>
   
   

</div>
</div>
  )
}
