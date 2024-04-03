import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Viewaplcationdetail = () => {
  // let id=localStorage.getItem('id')
  let {id}=useParams()
  const[data,setdata]=useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Staff/applydetailuser/${id}`)
        console.log(response.data);
        setdata(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [id])
  
  
  return (
<div className='w-screen h-[655px]'>
    <div className='flex justify-center w-screen h-[655px] bg-[#CCDAF6]'>
      <div className='text-black leading-[30px] mt-4 '>
        <div className='text-[20px] underline'><b>{data?.services?.service}</b></div>
        {Object.keys(data.application ?? {}).map((key) => (
          <div key={key}>
            
            <label>{key}: {data.application[key]}</label>
          </div>
        ))}
        
      </div>
    </div>
  </div>
  )
}
