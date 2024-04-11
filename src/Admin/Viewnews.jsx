import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom'

export const Viewnews = () => {
    let {id}=useParams()
   const[data,setdata]=useState([])
   const[refresh,setrefresh]=useState(false)
    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items per page
    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                const response=await axios.get('http://localhost:4000/President/vnews')
                setdata(response.data)
            }
            catch(error){
                console.error('Error fetching data',error)
            }
        }
        fetchdata()
    },[refresh])
    let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/User/deletenews/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }

    // Logic to get current items based on current page
    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);

    // Change page
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
            <div className='text-center font-serif text-[20px] font-bold'><h2>ANNOUNCEMENT</h2></div>

            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" className="px-6 py-3">ANNOUNCEMENT</th>
                            <th scope="col" className="px-6 py-3">DATE</th>
    
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.news}</td>
                                <td className="px-6 py-4">  {(new Date(item.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
</td>
                                <td className="px-6 py-4">
                                <button onClick={()=>handledelete(item._id)}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
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
    );
};
