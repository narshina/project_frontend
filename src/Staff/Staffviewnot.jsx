import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Staffviewnot = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://project-backend-2i9b.onrender.com/President/presnot');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  // Sort the data by date
  const sortedData = data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  // Calculate offset based on the current page and items per page
  const offset = currentPage * itemsPerPage;
  const currentItems = sortedData.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
      <div className='ml-[650px] font-serif text-[20px] font-bold'><h2>NOTIFICATION</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850PX]  text-center rtl:text-right dark:text-gray-400 mt-5">
          <thead className=" uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">NOTIFICATION</th>
              <th scope="col" className="px-6 py-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((notification, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{notification.notification}</td>
                <td className="px-6 py-4">  {(new Date(notification.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(sortedData.length / itemsPerPage)}
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
