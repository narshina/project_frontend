import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Viewmemberdetail = () => {
  // let {id}=useParams()
  // const[data,setdata]=useState('')
  // const[refresh,setrefresh]=useState(false)
  // useEffect(()=>{
  //   let fetchData=async()=>{
  //     let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
  //     console.log(response.data);
  //     setdata(response.data)
  //   }
  //   fetchData()
  // },[])
  return (
    <div className='w-[100%] h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div class="p-5 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit p-4 rounded-xl mt-24">
    <img class="w-32 h-32 rounded-full mx-auto" src={photo} alt=""/>
    <div class="text-sm mt-5">
        <a href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Jane
            Doe
        </a>
        <p>jane@gmail.com</p><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className=''>43</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward number</div>
        <div className=''>4</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward name</div>
        <div className=''>mba</div>
        </div>
        <div className=''>
        <div className='font-bold'>house</div>
        <div className=''>jkhfffff</div>
        </div>
</div>

<div className='flex justify-around gap-4 mb-5'>

        

        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>hjklll</div>
        </div>
        <div className=''>
        <div className='font-bold'>district</div>
        <div className=''>kozhikode</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>673323</div>
        </div>
        <div className=''>
        <div className='font-bold'>phone number</div>
        <div className=''>9867543456</div>
        </div>

        </div>
        </div>
        
    </div>
    <Link to='/admin/editmember'>
<button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button></Link>
   
   

</div>
</div>
  )
}
