import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import photo from './photo.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Userview = () => {
  const [data,setdata]=useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response =await axios.get('http://localhost:4000/President/vuser')
        setdata(response.data)
      }
      catch(error){
        console.error('Error fetching data',error)
      }
    }
    fetchData()
  },[])

  

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5'>
      <div className='text-center font-serif text-[20px] font-bold'><h2>USER MANAGEMENT</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                PHOTO
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL ID
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-center col-span-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </th>
                <td className="px-6 py-4">
                  <img className='h-9 w-9' src={`http://localhost:4000/uploads/${user.photo}`} alt='' />
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {user.status}
                </td>
                <td className="px-6 py-4 flex justify-between">
                  <Link to={`/admin/userviewdetail/${user._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a></Link>
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
