import axios from 'axios'
import React, { useEffect, useState } from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'

export const Userprofile = () => {
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


    let id=localStorage.getItem('id')
    console.log(id);
  const[userdata,setuserdata]=useState('')

  useEffect(()=>{
      let fetchdata=async ()=>{
      let response=await axios.get(`https://project-backend-2i9b.onrender.com/User/viewprofile/${id}`)
      console.log(response);
      setuserdata(response.data)
      
    }
    fetchdata()
  }
  ,[]
  )


  return (
<div className='w-[100%]  bg-[#CCDAF6] flex justify-center '>
    <div class="p-1 border text-center bg-white  h-fit w-[500px] rounded-xl mt-10">
    <img class="w-32 h-32 rounded-full mx-auto" src={`https://project-backend-2i9b.onrender.com/uploads/${userdata.photo}`} alt=""/>
    <div class="text-lg mt-5">
        <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
            {userdata.name}
        </a>
        <p class="text-lg">{userdata.email}</p><br /> 
        <div className='p-4'>
            <div className='flex justify-around mb-5 border-b-8 pb-4 '>
                <div className=''>
                    <div className='font-bold'>Age</div>
                    <div className='text-lg'>{userdata.age}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>date of birth</div>
                    <div className=''><p class="text-lg">{userdata.dob}</p></div> 
                </div>
                <div className=''>
                    <div className='font-bold'>gender</div>
                    <div className='text-lg'>{userdata.gender}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>id proof</div>
                    <a href={`https://project-backend-2i9b.onrender.com/uploads/${userdata.idproof}`} target='_blank'>

                    <div onMouseEnter={toggleId} onMouseLeave={toggleIdfalse} className=''><button>view</button></div></a>
                </div>
                <div>
                    <div className='font-bold'>Pancard</div>
                    <a href={`https://project-backend-2i9b.onrender.com/uploads/${userdata.pancard}`} target='_blank'>

                    <div onMouseEnter={toggleID1} onMouseLeave={toggleID1false} className=''><button>view</button></div></a>
                </div>
            </div>
            { idd &&
            <div>
                <img src={`https://project-backend-2i9b.onrender.com/uploads/${userdata.idproof}`} alt="" />
            </div>
            }
            {
            iddd &&
            <div>
                <img src={`https://project-backend-2i9b.onrender.com/uploads/${userdata.pancard}`} alt="" />
            </div>
            }
            <div className='font-bold hover:text-indigo-600'>Permenant Address</div>

            <div className='flex justify-around gap-4 mb-5 border-b-8 pb-4 '>
                <div className=''>
                    <div className='font-bold'>house name</div>
                    <div className='text-lg'>{userdata.houseName}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>street</div>
                    <div className='text-lg'>{userdata.street}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>post office</div>
                    <div className='text-lg'>{userdata.district}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>pincode</div>
                    <div className='text-lg'>{userdata.pincode}</div>
                </div>
            </div>
            <div className='font-bold hover:text-indigo-600'>Current Address</div>
            <div className='flex justify-around gap-4 mb-5 border-b-8 pb-4'>
                <div className=''>
                    <div className='font-bold'>house</div>
                    <div className='text-lg'>{userdata.currenthouse}</div>
                </div>
                <div className=''>
                    <div className='font-bold'>street</div>
                    <div className='text-lg'>{userdata.currentstreet}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>post office</div>
                    <div className='text-lg'>{userdata.currentpost}</div>
                </div>
                <div className=''>
                    <div className='font-bold'>pincode</div>
                    <div className='text-lg'>{userdata.currentpin}</div> 
                </div>
            </div>
            <div className='flex justify-around gap-4 mb-5 border-b-8 pb-4'>
                <div className=''>
                    <div className='font-bold'>ward number</div>
                    <div className='text-lg'>{userdata.wardNumber}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>ward name</div>
                    <div className='text-lg'>{userdata.wardName}</div> 
                </div>
                <div className=''>
                    <div className='font-bold'>house number</div>
                    <div className='text-lg'>{userdata.houseNumber}</div>
                </div>
                <div className=''>
                    <div className='font-bold'>phone number</div>
                    <div className='text-lg'>{userdata.phoneNumber}</div>
                </div>
            </div>
        </div>
        <Link to='/user/usereditprofile'><button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button></Link>
    </div>
</div>



   
   

</div>
  )
}
