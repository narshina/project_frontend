import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Staffviewapplydetail = () => {
  let { id } = useParams()
  const[reason,setreason]=useState(false)
  const [data, setData] = useState({})
  const[refresh,setrefresh]=useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Staff/applydetail/${id}`)
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [id])

  let handlesubmit=async (statuss)=>{
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/Staff/manageapplication/${id}`,{status:statuss})
    console.log(response)
    setData('')
  }
  let reasondrop=()=>{
    setreason(!reason)
  }


  return (
    <div className='w-screen h-[655px]'>
    <div className='flex justify-center w-screen h-[655px] bg-[#CCDAF6]'>
      <div className='text-black leading-[30px] mt-4 '>
        <div className='text-[20px]'><b>{data?.services?.service}</b></div>
        {Object.keys(data.application ?? {}).map((key) => (
          <div key={key}>
            
            <label>{key}: {data.application[key]}</label>
          </div>
        ))}
        <div className='flex gap-12'>
          <button onClick={()=>{handlesubmit('accept')}} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>ACCEPT</button>
          
            <button onClick={reasondrop} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>REJECT</button>
        
        </div>
    <div><h2 className='text-black font-bold underline'>USER DETAILS</h2></div>
    <div>Name:{data?.users?.name}</div>
    <div>Age:{data?.users?.age}</div>
    <div>Date of Birth:{data?.users?.dob}</div>
    <div>House name:{data?.users?.houseName}</div>
    <div>Ward Number:{data?.users?.wardNumber}</div>
    <div>Ward Name:{data?.users?.wardName}</div>
    <div>Phone Number:{data?.users?.phoneNumber}</div>
      </div>
    </div>
  </div>
  )
}
