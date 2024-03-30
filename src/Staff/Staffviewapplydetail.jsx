import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Staffviewapplydetail = () => {
  let{id}=useParams()
  const[data,setdata]=useState('')
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get(`http://localhost:4000/Staff/applydetail/${id}`)
      console.log(response.data);
      setdata(response.data)
    }
    fetchData()
  },[])

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
           <div><label>payment status:pending</label></div>
           <div><label>rejected reason:pending</label></div>
          <div className='flex gap-12'><button className='button text-black font-semibold bg-green-500 w-40 h-9 -ml-9 rounded mt-7'>ACCEPT</button>
        <Link to='/staff/staffreject' ><button className='button text-black font-semibold bg-red-600 w-40 h-9 -ml-9 rounded mt-7'>REJECT</button></Link>
        </div>
                </div>
              
      </div>
    </div>
  )
}
