import React from 'react'

export const Replycomplaint = () => {
  return (
    <div className='w-[100%] h-[690px] bg-[#CCDAF6] flex justify-center p-9'>
    <div className='h-56 w-96 bg-white p-5 rounded-xl'>
      <div className='font-bold text-[25px] text-black font-serif text-center'><label>REPLY TO COMPLAINT</label></div>
      <div className='font-medium text-black mt-3'>REPLY:</div>
      <div><input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    </div>
    <div><button className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5">SUBMIT</button></div>
  </div>
  </div>
  )
}
