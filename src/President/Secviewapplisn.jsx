import React, { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export const Secviewapplisn = () => {
    const[data,setdata]=useState([''])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; 
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`https://project-backend-2i9b.onrender.com/Staff/vapplyPresident`)
            console.log(response)
            setdata(response.data)
        }
        fetchData()
    },[])

    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='w-screen h-[655px] bg-[#CCDAF6] pt-5'>
            <div className='text-center font-serif text-[20px] font-bold'><h2>APPLICATIONS</h2></div>

            <div className="relative overflow-x-auto justify-center flex">
                <table className="w-[80%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" className="px-6 py-3">Application</th>
                            <th scope="col" class="px-6 py-3">
                    Application date
                </th>
                            <th scope="col" class="px-6 py-3">
                    Status
                </th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((application, index) => (
                            <tr key={index} className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{application?.service?.service}</td>
                                <td>{(new Date(application?.application?.applicationDate)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</td>

                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{application?.application?.status}</td>

                                <td className="px-6 py-4">
                                    <Link to={`/president/secviewaplsndetail/${application.application?._id}`}><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">VIEW</a></Link>
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
