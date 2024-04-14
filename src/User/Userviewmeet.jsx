import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Userviewmeet = () => {
  let id=localStorage.getItem('id')
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/User/viewmeetuser/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
console.log(data);
  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const convertToAMPMFormat = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    let formattedTime = '';
  
    // Convert hours to 12-hour format
    let hour = parseInt(hours, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Ensure hour is not 0 for 12 AM
  
    formattedTime = `${hour}:${minutes} ${suffix}`;
  
    return formattedTime;
  };
  

  return (
    <div className='w-screen h-[655px] bg-[#CCDAF6]  '>
      <div className='text-center font-serif text-[20px] font-bold '><h2>MEETINGS</h2></div>

      <div className="relative overflow-x-auto justify-center flex">
        <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5 ">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className='text-center'>
              {/* <th scope="col" className="px-6 py-3">
                Host
              </th> */}
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
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-center ${index % 2 === 0 ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} border-b dark:border-gray-700`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {meeting.agenda}
                </th>
                <td className="">{meeting.date}</td>
                <td>{convertToAMPMFormat(meeting.time)}</td>
                <td className="">{meeting.venue}</td>
               
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
