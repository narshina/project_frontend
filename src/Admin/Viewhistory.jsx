import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Viewhistory = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');
    const itemsPerPage = 5; // Number of items per page
    const formatDate = date => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/Staff/vhistory');
                const sortedData = response.data.sort((a, b) => new Date(b.application.applicationDate) - new Date(a.application.applicationDate));
                setData(sortedData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, []);
    
    // Logic to get current items based on current page and search input
    const offset = currentPage * itemsPerPage;
    const filteredData = data.filter(item => {
        const formattedSearch = formatDate(search);
        // Perform case-insensitive search on relevant fields
        return (
            item.user.name.toLowerCase().includes(search.toLowerCase()) ||
            item.user.wardName.toLowerCase().includes(search.toLowerCase()) ||
            item.service.service.toLowerCase().includes(search.toLowerCase()) ||
            formatDate(item.application.applicationDate) === formattedSearch // Ensure the format matches
        );
    });
    
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);

    // Change page
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Handle search input change
    const handleSearchChange = event => {
        setSearch(event.target.value);
        setCurrentPage(0); // Reset current page when search changes
    };
    console.log("Filtered data:", filteredData); // Add this line


    // Function to format date as "MM/DD/YYYY"
    

    return (
        <div className="w-screen h-[655px] bg-[#CCDAF6] pt-14">
            <div className="text-center font-serif text-[20px] font-bold">
                <h2>HISTORY</h2>
            </div>

            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search by Date (MM/DD/YYYY)
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search by Date (MM/DD/YYYY)..."
                        required
                    />
                </div>
            </form>

            {/* History table */}
            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3">
                                NAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                WARD NUMBER
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SERVICE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?.user?.name}
                                </td>
                                <td className="px-6 py-4">{item?.user?.wardNumber}</td>
                                <td className="px-6 py-4">{item?.service?.service}</td>
                                <td className="px-6 py-4">
                                    {formatDate(item?.application?.applicationDate)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-5">
                <ReactPaginate
                    pageCount={Math.ceil(filteredData.length / itemsPerPage)}
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
