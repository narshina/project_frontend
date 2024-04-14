import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Userviewdetail = () => {
  let {id}=useParams()
  const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])

  let handlesubmit=async (statuss)=>{
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/President/manageUser/${id}`,{status:statuss})
    console.log(response)
    setdata('')
  }

  const [idd,setid]=useState(false)
  let toggleId=()=>{
    setid(!idd)
  }
  let toggleIdfalse=()=>{
    setid(false)
  }

  return (
    <div className='w-[100%]  bg-[#CCDAF6] flex justify-center h-[660px]'>
    <div class="p-2 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit  rounded-xl mt-20">
    <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:4000/uploads/${data.photo}`} alt=""/>
    <div class="text-sm mt-5">
        <a href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">{data.name}
        </a>
        <p>{data.email}</p><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className=''>{data.age}</div>
        </div>
        <div className=''>
        <div className='font-bold'>date of birth</div>
        <div className=''>{data.dob}</div>
        </div>
        <div className=''>
        <div className='font-bold'>gender</div>
        <div className=''>{data.gender}</div>
        </div>
        <div className=''>
        <div className='font-bold'>id proof</div>
        <div onMouseEnter={toggleId} onMouseLeave={toggleIdfalse} className=''><button>view</button></div>
        </div>

</div>
{ idd &&

<div>
  <img src={`http://localhost:4000/uploads/${data.photo}`} alt="" />
</div>
}
<div className='flex justify-around gap-4 mb-5 border-b-8 pb-4 '>

        

        <div className=''>
        <div className='font-bold'>ward number</div>
        <div className=''>{data.wardNumber}</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward name</div>
        <div className=''>{data.wardName}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>house number</div>
        <div className=''>{data.houseNumber}</div>
        </div>
        <div className=''>
        <div className='font-bold'>house name</div>
        <div className=''>{data.houseName}</div>
        </div>

        </div>
        </div>
        <div className='flex justify-around gap-4 mb-5'>

        

        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>{data.street}</div>
        </div>
        <div className=''>
        <div className='font-bold'>district</div>
        <div className=''>{data.district}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>{data.pincode}</div>
        </div>
        <div className=''>
        <div className='font-bold'>phone number</div>
        <div className=''>{data.phoneNumber}</div>
        </div>
        

        </div>
        </div>
        <div className='flex gap-4 justify-center'>
        <button onClick={()=>{handlesubmit('accept')}} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Accept</button>
        <button onClick={()=>{handlesubmit('reject')}} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</button>
        </div>
    </div>


   
   

</div>
  )
}
