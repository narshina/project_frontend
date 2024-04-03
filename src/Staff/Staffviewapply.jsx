import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom'

export const Staffviewapply = () => {
    let id=localStorage.getItem('id')
    const[data,setData]=useState([''])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    useEffect(()=>{
        let fetchData=async ()=>{
        let response=await axios.get(`http://localhost:4000/Staff/vapply/${id}`)
        console.log(response)
        setData(response.data)
        }
        fetchData()
       },[])
       const offset = currentPage * itemsPerPage;
       const currentItems = data.slice(offset, offset + itemsPerPage);
        const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 ' >
     <div className='ml-[650px] font-serif text-[20px] font-bold'><h2> APPLICATIONS</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm  rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Apllications
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((application,index)=>(
                <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{application?.service?.service}</a>
                </th>
               <td>{application?.application?.status}</td>
               <Link to={`/staff/staffviewapplydetail/${application.application?._id}`}> <td className='px-6 py-4'>View</td></Link> 
            </tr>
                    ))}
        </tbody>
    </table>
</div>
<div className="flex justify-center mt-5">
                <ReactPaginate
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>

    </div>
  )
}
