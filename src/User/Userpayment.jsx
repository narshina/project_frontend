import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Userpayment = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    const requiredFields = ['card holder name','card number','MM','YY','security code','amount'];

for (const field of requiredFields) {
    if (!data[field]) {
        return toast.error(`${field} is required`);
    }
}
    setdata(data)
    toast.success('submit successfully')
    console.log(data)
  }
  return (
    <form onSubmit={handlesubmit}>
    <div className='p-4  h-[695px] bg-[#CCDAF6] flex justify-center'>
    <div className=' w-[30%] p-8  mt-2 bg-white m-auto rounded-2xl' >
        {/* <div><img className=' h-44 w-[100%] rounded-xl m-auto' src={payment} alt=''/></div> */}
      <div> <div className='text-black'>Card holder:</div>
        <input onChange={handlechange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='card holder name' type='text' id=''/></div>
        <div><div className='text-black'>Card number:</div>
        <input onChange={handlechange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='card number' type='text' id=''/></div>
        <div><div className='text-black'>Expired:</div>
        <div className='flex  justify-between gap-1 w-[100%] flex-wrap'>

        <select onChange={handlechange} className='h-9  w-44  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg'  name="MM" id="">
        <option value="" selected disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
           </select>
           <select onChange={handlechange} className=' h-9 w-44  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg'  name="YY" id="">
           <option value="" selected disabled>YY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
           </select>
        </div>
         </div>
        <div><div className='text-black'>Security code:</div>
        <input onChange={handlechange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='security code' type='text' id=''/></div>
        <div><div className='text-black'>Amount:</div>
        <input onChange={handlechange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='amount' type='text' id=''/></div>
        <div><button type='submit' className='pt-3 pb-4 w-[100%] bg-[#0F3053] mt-5 text-white rounded-lg' >pay now</button></div>
    </div>
</div>
</form>
  )
}
