import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Viewaplcationdetail = () => {
  // let{id}=useParams()
  // const[data,setData]=useState([])
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     try{
  //       const response=await axios.get(`http://localhost:4000/Staff/vservice/${id}`)
  //       setData(response.data)
  //     }
  //     catch(error){
  //       console.error('Error fetching data',error)
  //     }
  //   }
  //   fetchData
  // },[])
  
  return (
    <div className='w-screen h-[655px]'>
      <div className=' flex justify-center w-screen h-[655px]  bg-[#CCDAF6] '>
          <div className='text-black leading-[30px] mt-4 '>
            <div className='text-[20px]'><b>APPLICATION FOR CERTIFICATE TO GET NEW RATION CARD</b></div>
            <div><label>name:aaaaaaaa</label></div>
           <div><label>fathers name:ggggggggg</label></div>
           <div className='flex gap-5 w-[100%]'><span>ward number:</span><span>6</span></div>
           <div><label>House number:ttt</label></div>
           <div><label>corrently covered under any ration card?if yes information about it:no</label></div>
           <div><label>how many years you have settled in the panchayath limits:5</label></div>
           <div><label>information about which office to present</label></div>
           <div><label>document:</label></div>
           <div><label>status:pending</label></div>
           <div><label>rejected reason:pending</label></div>
          {/* <div><button className='button text-black font-semibold bg-indigo-400 w-40 h-9 -ml-9 rounded mt-7'>EDIT</button></div> */}
                </div>
              
      </div>
    </div>
  )
}
