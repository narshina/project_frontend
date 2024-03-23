import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export const Viewcomplaint = () => {
  const [currentPage, setCurrentPage] = useState(0); // Current page state
  const [itemsPerPage] = useState(5); // Number of items per page

  // Sample data for complaints
  const complaints = [
    { name: 'dfghhh', complaint: 'fgdhdhjjjdjd', date: '12/11/23', time: '12:11 pm' },
    // Add more complaints here
  ];

  // Logic to get current complaints based on current page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentComplaints = complaints.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => setCurrentPage(selected);

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
      <div className='text-center font-serif text-[20px] font-bold'><h2>COMPLAINT</h2></div>
      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-3">NAME</th>
              <th scope="col" className="px-6 py-3">COMPLAINT</th>
              <th scope="col" className="px-6 py-3">DATE</th>
              <th scope="col" className="px-6 py-3">TIME</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentComplaints.map((complaint, index) => (
              <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{complaint.name}</td>
                <td className="px-6 py-4">{complaint.complaint}</td>
                <td className="px-6 py-4">{complaint.date}</td>
                <td className="px-6 py-4">{complaint.time}</td>
                <td className="px-6 py-4">
                  <Link to='/admin/replycomplaint'><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reply</a></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(complaints.length / itemsPerPage)}
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
