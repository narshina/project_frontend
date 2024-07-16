import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export const Viewnot = () => {
  let id=localStorage.getItem('id')
  const [data,setdata]=useState([])
  const[refresh,setrefresh]=useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-backend-2i9b.onrender.com/Member/vnot/${id}`);
        // Sort the data based on the date in descending order
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setdata(sortedData);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchData();
  }, [refresh]);
  
  let handledelete=(id)=>{
    let response=axios.delete(`https://project-backend-2i9b.onrender.com/User/deletenot/${id}`)
    console.log(response)
    setrefresh(!refresh)
  }

  // Logic to get current items based on current page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotifications = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
      <div className='text-center font-serif text-[20px] font-bold'><h2>MANAGE NOTIFICATION</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850PX]  text-center rtl:text-right  dark:text-gray-400 mt-5">
          <thead className=" text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">NOTIFICATION</th>
              <th scope="col" className="px-6 py-3">DATE</th>
              
              <th scope="col" className="px-6 py-3 text-center col-span-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentNotifications.map((notification, index) => (
              <tr key={index} className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{notification.notification}</td>
                {/* <td className="px-6 py-4">{(new Date(notification.date)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td> */}
                <td className="px-6 py-4">
  {(new Date(notification.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
</td>

                <td className="px-6 py-4 flex justify-between">
                  <Link to={`/admin/editnot/${notification._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
               <button onClick={()=>handledelete(notification._id)}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a></button>
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
