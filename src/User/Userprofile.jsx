import axios from 'axios'
import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'

export const Userprofile = () => {
const [idd,setid]=useState(false)
  let toggleId=()=>{
    setid(!idd)
  }
  let toggleIdfalse=()=>{
    setid(false)
  }


    let id=localStorage.getItem('id')
    console.log(id);
  const[userdata,setuserdata]=useState('')

  useEffect(()=>{
      let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
      console.log(response);
      setuserdata(response.data)
      
    }
    fetchdata()
  }
  ,[]
  )


  return (
<div className='w-[100%]  bg-[#CCDAF6] flex justify-center h-[660px]'>
    <div class="p-2 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit  rounded-xl mt-20">
    <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:4000/uploads/${userdata.photo}`} alt=""/>
    <div class="text-sm mt-5">
        <a href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
        {userdata.name}
        </a>
        <p>{userdata.email}</p><br />
        <div className='p-4'>
<div className='flex justify-around mb-5 border-b-8 pb-4 '>

        <div className=''>
        <div className='font-bold'>Age</div>
        <div className=''>{userdata.age}</div>
        </div>
        <div className=''>
        <div className='font-bold'>date of birth</div>
        <div className=''>{userdata.dob}</div>
        </div>
        <div className=''>
        <div className='font-bold'>gender</div>
        <div className=''>{userdata.gender}</div>
        </div>
        <div className=''>
        <div className='font-bold'>id proof</div>
        <div onMouseEnter={toggleId} onMouseLeave={toggleIdfalse} className=''><button>view</button></div>
        </div>

</div>
{ idd &&

<div>
  <img src={`http://localhost:4000/uploads/${userdata.idproof}`} alt="" />
</div>
}
<div className='flex justify-around gap-4 mb-5 border-b-8 pb-4 '>

        

        <div className=''>
        <div className='font-bold'>ward number</div>
        <div className=''>{userdata.wardNumber}</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward name</div>
        <div className=''>{userdata.wardName}</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>house number</div>
        <div className=''>{userdata.houseNumber}</div>
        </div>
        <div className=''>
        <div className='font-bold'>house name</div>
        <div className=''>{userdata.houseName}</div>
        </div>

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
        

        </div>
        </div>
     <Link to='/user/usereditprofile'> <button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button>
      </Link>  
    </div>


   
   

</div>
  )
}
