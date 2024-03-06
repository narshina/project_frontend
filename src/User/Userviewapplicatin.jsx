import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export const Userviewapplicatin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Change this value according to your preference

  // Sample data
  const applications = [
    { name: 'Application for ownership certificate', status: 'pending' },
    { name: 'Application for ownership certificate', status: 'pending' },
    { name: 'Application for ownership certificate', status: 'pending' },
    { name: 'Application for ownership certificate', status: 'pending' },
    { name: 'Application for ownership certificate', status: 'pending' },
    { name: 'Application for ownership certificate', status: 'pending' },
    // Add more application objects here
  ];

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applications.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 content-center'>
      <div className='text-center font-serif text-[20px] font-bold'><h2>MY APPLICATIONS</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[850px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Applications
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
                  <Link to='/user/applicationdetail'><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{application.name}</a></Link>
                </td>
                <td>{application.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(applications.length / itemsPerPage)}
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
