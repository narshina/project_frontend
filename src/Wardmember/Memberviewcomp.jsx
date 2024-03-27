import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

export const Memberviewcomp = () => {
  let id=localStorage.getItem('id')

  const[data,setdata]=useState([''])
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchData=async()=>{
        let response=await axios.get(`http://localhost:4000/User/vcom/${id}`)
        console.log(response.data);
        setdata(response.data)
    }
    fetchData()
  },[])
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMeetings = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = ({ selected }) => setCurrentPage(selected);


  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
    <div className='text-center font-serif text-[20px] font-bold'><h2>COMPLAINT</h2></div>

    <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
            <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                <tr className='text-center'>
                    <th scope="col" className="px-6 py-3">
                        NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        WARD NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        COMPLAINT
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DATE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACTION
                    </th>
                </tr>
            </thead>
            <tbody>
                {currentMeetings.map((item, index) => (
                    <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.user?.name}</td>
                        <td>{item?.user?.wardName}</td>
                        <td>{item?.complaint?.complaint}</td>
                        <td>{item?.complaint?.date}</td>
                        
                        <td className="px-6 py-4 flex ">
                            <Link to='/member/memberreply'><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reply</a></Link>
                           
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

  )
}
