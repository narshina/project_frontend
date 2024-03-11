import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Userviewmeet = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Change this value according to your preference

  // Sample data
  const meetings = [
    { agenda: 'mmfff gggh rrtt', date: '15/34/23', time: '10:00am', venue: 'Ulliyeri' },
    // Add more meeting objects here
  ];

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = meetings.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 content-center'>
      <div className='text-center font-serif text-[20px] font-bold'><h2>MEETINGS</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-3">
                AGENDA
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
              <th scope="col" className="px-6 py-3">
                TIME
              </th>
              <th scope="col" className="px-6 py-3">
                VENUE
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((meeting, index) => (
              <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {meeting.agenda}
                </th>
                <td className="">{meeting.date}</td>
                <td className="">{meeting.time}</td>
                <td className="">{meeting.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(meetings.length / itemsPerPage)}
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
