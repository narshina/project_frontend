import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LangContext } from './LanguageContext'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'

export const Userapplication = () => {
  const fileUpload=useRef(null)
  const handleUploadFile=(type)=>{
    fileUpload.current.click()
  }
  let{id}=useParams()
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get(`http://localhost:4000/Staff/vform/${id}`)
      console.log(response.data);
      setdata(response.data)
    }
    fetchData()
  },[])
  
  const[data,setdata]=useState([''])
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data)
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
    // let formData=new FormData()
    // {data.map((item)=>(
    //   formData.append()
    // ))}
  }
  let value=useContext(LangContext)
  console.log(value.lang);
  return (
    
<div className='bg-[#CCDAF6] w-[100%] pt-10 h-[655px]'>


<div className='text-center'>

   <h2 className='text-[30px] font-bold'>{data[0].service?.service}</h2>
 
</div>

<form onSubmit={handlesubmit} class=" w-[70%] m-auto ">
{data.map((item)=>(

  <div class="relative z-0 w-full mb-5 h-fit group ">
      <input onChange={handlechange} type="email" name={value.lang ? item?.field?.fieldMalayalam : item?.field?.fieldEnglish} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value.lang ? <span className=''>{item?.field?.fieldMalayalam}</span> : <span>{item?.field?.fieldEnglish}</span>}</label>
  </div>
))}
<div><div onClick={handleUploadFile}>required documents</div>
<input onChange={handleUploadFile} ref={fileUpload} type='file'></input>
</div>
  
 
  <div className='text-center'>
 <Link to='/user/userpayment'> <button type="submit" class="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></Link></div>
</form>
</div>
  )
}
