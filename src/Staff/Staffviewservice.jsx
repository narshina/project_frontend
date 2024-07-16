import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Staffviewservice = () => {
   let id=localStorage.getItem('id')
   const [userdata, setUserData] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://project-backend-2i9b.onrender.com/Staff/vservice`);
            setUserData(response.data);
        }
        fetchData();
   }, []);

   const handleSearch = (event) => {
       setSearchTerm(event.target.value);
   }

   return (
        <>
            <div  className='bg-[#CCDAF6] h-screen '>
                <div className='font-bold font-serif text-[20px] m-auto text-center '>SERVICE LIST</div>

                <form class="max-w-md mx-auto mt-4">   
                    <label for="default-search" class="mb-2 text-sm bg-[#0F3053] font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" value={searchTerm} onChange={handleSearch} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search services here" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#0F3053] hover:bg-[#99B9F6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                <div className='flex sm:gap-4 w-[80%] pt-4 flex-wrap m-auto justify-center'>
                    {userdata
                        .filter(item => item.service.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(item => (
                            <Link to={`/staff/Addfield/${item._id}`} key={item._id}>
                                <div className=" block text-white bg-[#0F3053] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5  h-24 w-72text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pt-10">
                                    {item.service}
                               {/* <Link to='/staff/staffeditservice'><div className='text-center'><button className='hover:underline hover:text-blue-500' >Edit</button></div></Link> */}
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </>
    )
}
