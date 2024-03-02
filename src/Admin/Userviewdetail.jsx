import React, { useState } from 'react'
import photo from './photo.jpg'

export const Userviewdetail = () => {
  const [id,setid]=useState(false)
  let toggleId=()=>{
    setid(!id)
  }
  let toggleIdfalse=()=>{
    setid(false)
  }

  return (
    <div className='w-[100%]  bg-[#CCDAF6] flex justify-center'>
    <div class="p-2 border text-center bg-white text-gray-500 max-w-sm h-fit  w-fit  rounded-xl mt-20">
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
        <div className='font-bold'>date of birth</div>
        <div className=''>16/11/2001</div>
        </div>
        <div className=''>
        <div className='font-bold'>gender</div>
        <div className=''>male</div>
        </div>
        <div className=''>
        <div className='font-bold'>id proof</div>
        <div onMouseEnter={toggleId} onMouseLeave={toggleIdfalse} className=''><button>view</button></div>
        </div>

</div>
{ id &&

<div>
  <img src={photo} alt="" />
</div>
}
<div className='flex justify-around gap-4 mb-5 border-b-8 pb-4 '>

        

        <div className=''>
        <div className='font-bold'>ward number</div>
        <div className=''>4</div>
        </div>
        <div className=''>
        <div className='font-bold'>ward name</div>
        <div className=''>tyyyyy</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>house number</div>
        <div className=''>259</div>
        </div>
        <div className=''>
        <div className='font-bold'>house name</div>
        <div className=''>9867543456</div>
        </div>

        </div>
        </div>
        <div className='flex justify-around gap-4 mb-5'>

        

        <div className=''>
        <div className='font-bold'>street</div>
        <div className=''>rrtttt</div>
        </div>
        <div className=''>
        <div className='font-bold'>district</div>
        <div className=''>tyyyyy</div>
        </div>
        

        <div className=''>
        <div className='font-bold'>pincode</div>
        <div className=''>5677888</div>
        </div>
        

        </div>
        </div>
        <button className='bg-blue-950 p-2 w-20 rounded-2xl text-white hover:bg-black'>Edit</button>
        
    </div>


   
   

</div>
  )
}
