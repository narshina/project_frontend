import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Userviewapplicatin = () => {
  let id=localStorage.getItem('id')
  const[data,setdata]=useState([''])
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); 
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await axios.get(`https://project-backend-2i9b.onrender.com/Staff/vapplyuser/${id}`)
      console.log(response)
      // Sort the data by application date before setting it to state
      const sortedData = response.data.sort((a, b) => {
        return new Date(b.application.applicationDate) - new Date(a.application.applicationDate);
      });
      setdata(sortedData);
    }
    fetchData()
  },[])
  
  

  
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
      <div className='text-center font-serif text-[20px] font-bold'><h2>MY APPLICATIONS</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850px] text-sm text-left rtl:text-right  dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Applications
              </th>
              <th scope="col" className="px-6 py-3">
                Application Date
              </th>
              <th scope="col" className="py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((application, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 text-justify even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link to={`/user/applicationdetail/${application?.application?._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{application?.service?.service}</a></Link>
                </td>
              <td> {(new Date(application?.application?.applicationDate)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>
                <td>{application?.application?.status}</td>
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
