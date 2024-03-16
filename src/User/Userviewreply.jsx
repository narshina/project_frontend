import React ,{useState} from 'react'
import ReactPaginate from 'react-paginate';

export const Userviewreply = () => {
    const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Change this value according to your preference

  // Sample data
  const com = [
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },
    { Complaint: 'the ghh ssh sewraa gdhdt', Reply: 'fgsrt gsfresgh hgdfrsd' },

   
    // Add more application objects here
  ];

  // Calculate index of the first and last item to be displayed
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = com.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className=' w-screen h-[665px] bg-[#CCDAF6]  pt-5 content-center' >
     <div className='text-center font-serif text-[20px] font-bold'><h2>REPLY TO COMPLAINT</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    COMPLAINT
                </th>
                <th scope="col" class="px-6 py-3">
                    REPLY
                </th>
            </tr>
        </thead>
        <tbody>
        <tbody>
            {currentItems.map((complaints, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {complaints.Complaint}
                </th>
                <td className="">
                  {complaints.Reply}
                </td>
                
              </tr>
            ))}
          </tbody>
            
            
        </tbody>
    </table>
</div>
<div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(com.length / itemsPerPage)}
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
