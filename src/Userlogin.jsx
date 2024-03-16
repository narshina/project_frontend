import React, { useState } from 'react'
import App from './App'
import './Login.css'
import img from './login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {FaEye,FaEyeSlash} from "react-icons/fa"
import toast from 'react-hot-toast'
import axios from 'axios'

export const Userlogin = () => {

  const navigate=useNavigate()
  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  let handlesubmit=async (event)=>{
    event.preventDefault()
    const requiredFields = ['email','password'];

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
    let response=await axios.post('http://localhost:4000/User/login',data)
    console.log(response);
    if(response.data){
      localStorage.setItem('id',response.data._id)
      if(response.data.usertype=='staff'){
navigate('/staff')
      }
      else if(response.data.usertype=='president'){
navigate('/admin')
      }
      else if(response.data.usertype=='secretary'){
        navigate('/president')
      }
      else if(response.data.usertype=='user'){
        navigate('/user')
      }
      else if(response.data.usertype=='memeber'){
        navigate('/member')
      }

    }
    else{
      toast.error('invalid credentials')
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
      <div className='body flex flex-col md:flex-row mt-0 '>
        <div className="">
            <img className='loginn w-39rem h-96 mt-28' src={img} alt="" />
        </div>
          <div className='content ml-64 mt-32 w-96 h-72'>
           <div className='log font-bold text-[25px] ml-12'>Login Here</div>
           <div className='user mt-6'>USERNAME</div>
           <input onChange={handlechange} className='username bg-indigo-400 text-neutral-950 rounded w-72  h-9 mt-2 placeholder:text-white p-3' placeholder='Enter your email id here' name='email' type='email'></input>
           <div className='pass  mt-2'>PASSWORD</div>
           <div className='flex items-center w-72 pr-4 bg-indigo-400  rounded'>

           <input onChange={handlechange} className='password bg-indigo-400 text-neutral-950 rounded w-72 h-9  mt-2 placeholder:text-white p-3 outline-none' placeholder='Enter password here' name='password' type={showpassword}></input>
          
           { showpassword === 'text' ? <span> <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> </span>:
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
          }
          </div>
        <Link to='/forgot'  > <div className='for mt-2'>   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Forgot password?</a></div></Link>
            <div><button type='submit' className='button text-black font-semibold bg-indigo-400 w-72 h-9 rounded mt-2'>LOGIN</button></div>
          </div>
      </div>
      </form>
    </>
  )
}
