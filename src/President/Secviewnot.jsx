import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Secviewnot = () => {
    const[data,setData]=useState([])

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items per page

    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                const response=await axios.get('http://localhost:4000/President/vnotification')
                setData(response.data)
            }
            catch(error){
                console.error('Error fetching data',error)
            }
        }
        fetchData()
    },[])

    // Logic to get current items based on current page
    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);

    // Change page
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 '>
            <div className='ml-[650px] font-serif text-[20px] font-bold'><h2>NOTIFICATION</h2></div>

            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">NOTIFICATION</th>
                            <th scope="col" className="px-6 py-3">DATE</th>
                            <th scope="col" className="px-6 py-3">TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((notification, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{notification.notification}</td>
                                <td className="px-6 py-4">{notification.date}</td>
                                <td className="px-6 py-4">{notification.time}</td>
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
