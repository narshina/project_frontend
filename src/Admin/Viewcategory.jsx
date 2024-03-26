import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

export const Viewcategory = () => {
  const [data,setdata] = useState([]);
  const [currentPage,setCurrentPage] = useState(0);
  const [itemsPerPage] =useState(5);
  
  useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await axios.get('http://localhost:4000/President/vcategory');
            setdata(response.data);
        }
        catch(error){
            console.error('Error fetching data:',error)
        }
    }
    fetchData()
  },[])
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
console.log(data);
  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 ' >
     <div className='text-center font-serif text-[20px] font-bold'><h2>CATEGORIES</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-center">
                    CATEGORIES
                </th>
                
            </tr>
        </thead>
        <tbody>
            {currentItems.map((category,index)=>(
             <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-center ${index % 2 === 0 ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} border-b dark:border-gray-700 hover:bg-slate-200`}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <label class="font-medium text-black dark:text-blue-500 ">{category.category}</label>
            
                </th>
               
                
            </tr>
            ))} 
        </tbody>
    </table>
</div>
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
  )
}
