import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';

export const Viewservicedetail = () => {
    let {id}=useParams()
    const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Staff/vservice/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6]  '>
      <div className='text-center font-serif text-[20px] font-bold pt-6 '><h2>SERVICE DETAIL</h2></div>


<div class="  w-[540px] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto mt-9">
   
   
   <h3 className='text-center font-bold '>{data?.service}</h3>
   <table className='m-auto mt-3'>
     <tr>
        <td>Processing time</td>
        <td>:{data?.processingTime}</td>
        </tr>
        <tr>
            <td>Requirements</td>
            <td>:{data?.requirement}</td>
            </tr> 
          </table>  
        <div className='text-center mt-3'>
   <Link to={`/user/userapply/${data?._id}`}> <button><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-auto ">APPLY</a></button></Link></div>
   </div>
</div>


      
  )
}
