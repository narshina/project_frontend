import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import photo from './photo.jpg';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Viewstaff = () => {
  const [data,setData]=useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Change this value according to your preference
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('http://localhost:4000/President/vstaff');
        setData(response.data)
      }
      catch(error){
        console.error('Error fetching data:',error)
      }
    }
    fetchData()
  },[])

  // const staffData = [
  //   { name: 'Akil', email: 'akil@gmail.com', photo: photo },
  // ];

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
      <div className='text-center font-serif text-[20px] font-bold'><h2>STAFF MANAGEMENT</h2></div>

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
              <th scope="col" className="px-6 py-3 text-center col-span-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((staff, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}  ${index % 2 === 0 ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} border-b dark:border-gray-700 hover:bg-slate-200`}>

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {staff.name}
                </th>
                <td className="px-6 py-4">
                  <img className='h-9 w-9' src={`http://localhost:4000/uploads/${staff.photo}`} alt=''/>
                </td>
                <td className="px-6 py-4">
                  {staff.email}
                </td>
                <td className="px-6 py-4 flex justify-between">
                  <Link to={`/admin/viewstaffdetail/${staff._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a></Link>
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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
