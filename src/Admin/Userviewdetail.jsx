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
      let response=await axios.get(`https://project-backend-2i9b.onrender.com/User/viewprofile/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchData()
  },[])

  let handlesubmit=async (statuss)=>{
    navigate('/admin/userview')
    setrefresh(!refresh)
    let response=await axios.put(`https://project-backend-2i9b.onrender.com/President/manageUser/${id}`,{status:statuss})
    console.log(response)
    setdata('')
  }

  const [idd,setid]=useState(false)
  const [iddd,setid1]=useState(false)
  let toggleId=()=>{
    setid(!idd)
  }
  let toggleIdfalse=()=>{
    setid(false)
  }
  let toggleID1=()=>{
    setid1(!iddd)
  }
  let toggleID1false=()=>{
    setid1(false)
  }

  return (
    <div className='w-[100%]  bg-[#CCDAF6] flex justify-center '>
    <div class="p-2 border text-center bg-white   h-fit  w-[500px]  rounded-xl mt-5">
    <img class="w-32 h-32 rounded-full mx-auto" src={`https://project-backend-2i9b.onrender.com/uploads/${data.photo}`} alt=""/>
    <div class="text-base mt-5">
        <a href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out text-[15px]">{data.name}
        </a>
        <div className='tex-black font-bold text-[15px]'>{data.email}</div><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className='text-black'>{data.age}</div>
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
       <a href={`https://project-backend-2i9b.onrender.com/uploads/${data.idproof}`}  target='_blank'><div onMouseEnter={toggleId} onMouseLeave={toggleIdfalse} className=''><button>view</button></div></a> 
        </div>
        <div>
        <div className='font-bold'>Pancard</div>
        <a href={`https://project-backend-2i9b.onrender.com/uploads/${data.pancard}`} target='_blank'>
        <div onMouseEnter={toggleID1} onMouseLeave={toggleID1false}  className=''><button>view</button></div></a>
        </div>

</div>
{ idd &&

<div>
  <img src={`https://project-backend-2i9b.onrender.com/uploads/${data.idproof}`} alt="" />
</div>
}
{
  iddd &&
  <div>
      <img src={`https://project-backend-2i9b.onrender.com/uploads/${data.pancard}`} alt="" />
  </div>
}

<div>Permenant Address</div>
<div className='flex justify-around gap-4 mb-5 border-b-8 pb-4 '>

        

        <div className=''>
        <div className='font-bold'>house name</div>
        <div className=''>{data.houseName}</div>
        </div>
        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>{data.street}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>post office</div>
        <div className=''>{data.district}</div>
        </div>
        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>{data.pincode}</div>
        </div>

        </div>
        </div>
        <div>Current Address</div>
        <div className='flex justify-around gap-4 mb-5 border-b-8 pb-4'>

        

        <div className=''>
        <div className='font-bold'>house</div>
        <div className=''>{data.currenthouse}</div>
        </div>
        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>{data.currentstreet}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>post office</div>
        <div className=''>{data.currentpost}</div>
        </div>
        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>{data.currentpin}</div>
        </div>
        

        </div>
        <div className='flex justify-around gap-4 mb-5'>

        

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
