import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {FaEye,FaEyeSlash} from "react-icons/fa"

export const Forgotpassword = () => {
  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  const[showconfirmpassword,setshowconfirmoassword]=useState('confirm-password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    const requiredFields = ['email','password','confirm-password'];

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
    toast.success("Reset password successfully")
    console.log(data)
  }
  return (
    
    <section class="bg-[#CCDAF6] dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
            </h2>
            <form onSubmit={handlesubmit} class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={handlechange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""></input>
                </div>
                <div className='relative'>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input onChange={handlechange} type='password' name="password" id="password" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                
                    <div class="absolute inset-y-0 right-0 pr-3 top-6 flex items-center text-sm leading-5">
           { showpassword === 'text' ?  
           
           <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className=''/>
          }
          </div>    
                </div>
                <div className='relative'>
                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input onChange={handlechange} type='confirm-password' name="confirm-password" id="confirm-password" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                
                    <div class="absolute inset-y-0 right-0 pr-3 top-6 flex items-center text-sm leading-5">
           { showconfirmpassword === 'text' ?  
           
           <FaEye onClick={()=> setshowconfirmoassword('confirm-password') } color='black' className='ms-2'/> :
           <FaEyeSlash  onClick={()=> setshowconfirmoassword('text') } color='black' className=''/>
          }
          </div>    
                </div>
                {/* <div className='relative'>
                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input onChange={handlechange}  type="confirm-password" name="confirm-password" id="confirm-password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                    <div class="absolute inset-y-0 right-0 pr-3 top-6 flex items-center text-sm leading-5"></div>
                    { showconfirmpassword === 'text' ?  
                    <FaEye onClick={()=> setshowconfirmoassword('confirm-password') } color='black' className='ms-2'/> :
           
                   <FaEyeSlash  onClick={()=> setshowconfirmoassword('text') } color='black' className=''/>
           }
                    
                </div> */}
                
                <button type="submit" class="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
            </form>
        </div>
    </div>
  </section>

  )
}
