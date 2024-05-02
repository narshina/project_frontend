import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export const Viewmeeting = () => {
   
    const[data,setdata]=useState([])
    let id=localStorage.getItem('id')
    const [currentPage, setCurrentPage] = useState(0);
    const[refresh,setrefresh]=useState(false)
    
    const [itemsPerPage] = useState(5); // Change this value as needed
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response=await axios.get(`http://localhost:4000/Member/vmeeting/${id}`)
                setdata(response.data)
            }
            catch(error){
                console.error('Error fetching data',error)
            }
        }
        fetchData()
    },[refresh])
    let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/User/deletemeeting/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }
    // Logic to get current items based on current page
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMeetings = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = ({ selected }) => setCurrentPage(selected);
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
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
            <div className='text-center font-serif text-[20px] font-bold'><h2>MEETINGS</h2></div>

            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%]  text-center rtl:text-right  dark:text-gray-400 mt-5">
                    <thead className=" text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
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
                            <th scope="col" className="px-6 py-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMeetings.map((meeting, index) => (
                            <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-slate-200">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">{meeting.agenda}</td>
                                <td>{meeting.date}</td>
                                <td>{convertToAMPMFormat(meeting.time)}</td>
                                <td>{meeting.venue}</td>
                                <td className="px-6 py-4 flex justify-center gap-6">
                                    <Link to={`/admin/editmeet/${meeting._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a></Link>
                               <button onClick={()=>handledelete(meeting._id)}> <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a></button>
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
