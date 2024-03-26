import React, { useRef,useState } from 'react'
import toast from 'react-hot-toast'
import {FaEye,FaEyeSlash} from "react-icons/fa"

export const Editstaff = () => {
  
  const fileUpload = useRef('')

  const handleUploadFile = ()=>{
    fileUpload.current.click()
  }

  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    const requiredFields = ['name', 'photo', 'age', 'gender', 'emailid', 'house', 'street', 'district', 'pincode', 'phone number', 'password'];

    for (const field of requiredFields) {
        if (!data[field]) {
            return toast.error(`${field} is required`);
        }
    }
    
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    console.log(passwordPattern.test(data.password));
    if(!passwordPattern.test(data.password)){
      return toast.error('password is not matched')
    }
    setdata(data)
    toast.success("submit successfully")
    console.log(data);

  }


  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5'>
    <div className='font-bold font-serif text-[20px] ml-[655px]'>STAFF</div>
    <div className="flex flex-wr gap-8" >
      <div className=' h-[360px] w-[450px]  ml-60 '>


        <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
            NAME:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='name' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex' onClick={handleUploadFile}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHOTO:

            </span>
            <input onChange={handlechange} ref={fileUpload} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='photo' />
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg'>upload</p>
            </div>
            </div>
        <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            AGE:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='age' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select onChange={handlechange} className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black ' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
        <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            EMAIL ID:

          </span>
          <input onChange={handlechange} type='email' className='text-black h-9 w-56 bg-white rounded-r-lg' name='emailid' ></input></div>
        <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            CATEGORY:

          </span>
         <select onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black'  name="catefory"  id="">
          <option value="clerk">clerk</option>
          <option value="head clerk">head clerk</option>
          <option value="ud clerk">UD clerk</option>
         </select>
         
         
         </div>



      </div>
      <div className=' h-[360px] w-[450px]  '>
      <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            HOUSE:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='house' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            STREET:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='street' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            DISTRICT:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='district' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            PINCODE:

          </span>
          <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg' name='pincode' type='text'></input></div>

          <div className='text h-9   text-white mt-4 flex'>
          <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
            PHONE NUMBER:

          </span>
          <input onChange={handlechange} className=' text-black h-9 w-56 bg-white rounded-r-lg' name='phone number' type='text'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center">
            <input onChange={handlechange} className='outline-none' name='password' type={showpassword}></input>
           { showpassword === 'text' ?  <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
           }
            </div>
            </div>
          
          
          

      </div>
    </div>
    <div><button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded -mt-10 ml-[590px]'>SUBMIT</button></div>
  </div>
  </form>
  )
}
