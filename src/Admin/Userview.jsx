import React from 'react'
import photo from './photo.jpg'
import { Link } from 'react-router-dom'

export const Userview = () => {
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5 content-center' >
     <div className='ml-[650px] font-serif text-[20px] font-bold'><h2>USER MANAGEMENT</h2></div>   

<div class="relative overflow-x-auto justify-center flex">
    <table class="w-[850PX] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-slate-400  dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PHOTO
                </th>
                <th scope="col" class="px-6 py-3">
                    EMAIL ID
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3 text-center col-span-2">
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akil
                </th>
                <td class="px-6 py-4">
                    <img className='h-9 w-9' src={photo} alt=''/>
                </td>
                <td class="px-6 py-4">
                    akil@gmail.com
                </td>
                <td class="px-6 py-4">
                    pending
                </td>
                <td class="px-6 py-4 flex justify-between">
       <Link to='/admin/userviewdetail'><a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a></Link> 
                   
                </td>
            </tr>
            
            
        </tbody>
    </table>
</div>


    </div>
  )
}
