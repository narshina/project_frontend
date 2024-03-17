import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export const Secviewapplisn = () => {
    // Sample data
    const applications = [
        { service: 'Apllication for ownership certificate', name: 'dghhhh', paymentStatus: 'pending' },
        // Add more application data as needed
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items per page

    // Logic to get current items based on current page
    const offset = currentPage * itemsPerPage;
    const currentItems = applications.slice(offset, offset + itemsPerPage);

    // Change page
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5 content-center'>
            <div className='text-center font-serif text-[20px] font-bold'><h2>APPLICATIONS</h2></div>

            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" className="px-6 py-3">SERVICE</th>
                            <th scope="col" className="px-6 py-3">NAME</th>
                            <th scope="col" className="px-6 py-3">PAYMENT STATUS</th>
                            <th scope="col" className="px-6 py-3">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((application, index) => (
                            <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{application.service}</td>
                                <td className="px-6 py-4">{application.name}</td>
                                <td className="px-6 py-4">{application.paymentStatus}</td>
                                <td className="px-6 py-4">
                                    <Link to='/president/secviewaplsndetail'><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">VIEW</a></Link>
                                </td>
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
