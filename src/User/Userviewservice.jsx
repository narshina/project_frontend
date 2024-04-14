import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from './LanguageContext';
import axios from 'axios';

export const Userviewservice = () => {
   const [userdata, setUserdata] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`http://localhost:4000/Staff/vservice`);
            setUserdata(response.data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   // Filtered user data based on search term
   const filteredData = userdata.filter(item =>
      item.service.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const handleSearchChange = event => {
      setSearchTerm(event.target.value);
   };

   return (
      <>
         <div className='bg-[#CCDAF6] h-screen '>
            <div className='font-bold font-serif text-[20px] m-auto text-center p-10'>SERVICE LIST</div>
            <form className="max-w-md mx-auto mt-4">
               <label htmlFor="default-search" className="mb-2 text-sm bg-[#0F3053] font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="default-search"
                     className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search services here"
                     value={searchTerm}
                     onChange={handleSearchChange}
                     required
                  />
                  <button
                     type="submit"
                     className="text-white absolute end-2.5 bottom-2.5 bg-[#0F3053] hover:bg-[#99B9F6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Search
                  </button>
               </div>
            </form>

            <div className='flex sm:gap-4 w-[80%] pt-4 flex-wrap m-auto justify-center'>
               {filteredData.map(item => (
                  <Link key={item._id} to={`/user/viewservicedetail/${item._id}`}>
                     <button
                        className="block text-white bg-[#0F3053] hover:bg-[#77A4FA] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-24 w-72 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                     >
                        {item.service}
                     </button>
                  </Link>
               ))}
            </div>
         </div>
      </>
   );
};
