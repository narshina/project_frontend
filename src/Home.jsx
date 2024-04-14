import React, { useEffect, useState } from 'react'
import App from './App'
import './Home.css';
import icon from './abc.png'
import walk from './walking.png'
import clg from './ulliyeri1.webp'
import palam from './palam.png'
import ul3 from './ulliyery2.jpg'
import ul4 from './enteulliyeri.webp'
import ul1 from './field.avif'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ScrollButton from './ScrollButton';
import axios from 'axios';

export default function Home() {
    const[userdata,setuserdata]=useState([''])
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/User/vnews');
                const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setuserdata(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

  return (

    <>
    

                <Carousel className='h-6 ' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000}>
                <div id='top'>
                    <img src={ul3} className='h-[600px] opacity-40'   />
                    
                </div>
                <div>
                    <img src={ul1} className='h-[600px] opacity-40' />
                    
                </div>
                <div>
                    <img src={clg} className='h-[600px] opacity-40' />
                    
                </div>
                
            </Carousel>
            <div className='absolute sm:left-[20%] sm:top-[15%] sm:p-40 text-center'><label className='  text-black font-serif font-bold text-[40px]'>GET YOUR SERVICES FROM HERE</label><br></br><span className='text-[25px] text-center'>Empowering you with easy access to solutions.</span>
      </div>
  <div className='flex flex-wrap justify-around gap-14'>        
<div className='bg-slate-50 h-96 w-[50%] overflow-y-scroll text-white mt-[600px]'>
<div className='border-b-4 border-cyan-900   text-black font-bold font-serif text-center p-6 text-[25px]'><h2>ANNOUNCEMENT</h2></div>
{userdata.map((item)=>(
<div className='text-blue-700 pl-5'><li>{item.news}, {(new Date(item.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
</li>
</div>
))}
</div>
<div className=' h-96 w-[500px] text-white mt-[600px] '>
  <img className='h-[300px] w-[450px] mt-6  ' src={ul4} alt=''></img>
</div>
</div>
<div className='text-center mt-4'>
 <div><label className='text-black font-serif font-semibold text-[25px]'>WARD NAMES</label></div>   

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400 bg-slate-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-slate-400 dark:bg-gray-800">
                    No
                </th>
                <th scope="col" class="px-6 py-3">
                    Ward name
                </th>
                <th scope="col" class="px-6 py-3 bg-slate-400 dark:bg-gray-800">
                    Ward number
                </th>
                <th scope="col" class="px-6 py-3 ">
                    LGD code
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    1
                </th>
                <td class="px-6 py-4">
                    Kakkanchary
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    1
                </td>
                <td class="px-6 py-4">
                1478046
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    2
                </th>
                <td class="px-6 py-4">
                    koyakkad west
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    2
                </td>
                <td class="px-6 py-4">
                1478047
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    3
                </th>
                <td class="px-6 py-4">
                    Theruvath kadav
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    3
                </td>
                <td class="px-6 py-4">
                1478048
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    4
                </th>
                <td class="px-6 py-4">
                    ulliyeri west
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    4
                </td>
                <td class="px-6 py-4">
                1478049
                </td>
            </tr>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    5
                </th>
                <td class="px-6 py-4">
                    Oravil
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    5
                </td>
                <td class="px-6 py-4">
                1478050
                </td>
            </tr>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    6
                </th>
                <td class="px-6 py-4">
                    Ulliyeri north
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    6
                </td>
                <td class="px-6 py-4">
                1478051
                </td>
            </tr>
            
            <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    7
                </th>
                <td class="px-6 py-4">
                    mamboyil
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    7
                </td>
                <td class="px-6 py-4">
                1478052
                </td>
            </tr>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    8
                </th>
                <td class="px-6 py-4">
                    Ulliyeri south
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    8
                </td>
                <td class="px-6 py-4">
                1478053
                </td>
            </tr>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    9
                </th>
                <td class="px-6 py-4">
                    Mundoth
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    9
                </td>
                <td class="px-6 py-4">
                1478054
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>
<div className='flex justify-end pr-4'>
    
<ScrollButton/>
</div>


<footer class="bg-[#0F3053] dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 pl-3">
              <a href="https://flowbite.com/" class="flex items-center">
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> */}
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">ULLIYERI-E-PANCHAYAT PORTAL</span>
              </a>
          </div>
          <div class="">
              
              
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact as</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">2653456</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">secretaryulliyerigp@gmail.com</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">ULLIYERI-E-PANCHAYAT</a>. All Rights Reserved.
          </span>
          {/* <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div> */}
      </div>
    </div>
</footer>


    {/* <div className='bg-[#7E9BD5] h-[350px]'>
      <div className='p-40 text-center'><label className='hover:text-white  text-[#0F3053]  font-bold text-[40px]'>GET YOUR SERVICES FROM HERE</label><br></br><span className='text-[25px] text-center'>Empowering you with easy access to solutions.</span>
      <div>
       <Link to='/Login'><button className='bg-[#0F3053] text-white h-9 w-28 rounded-3xl hover:bg-[#77A4FA]  mt-5'>LOGIN</button>
       </Link></div>
      <div className='mt-[300px] h-64 w-[100%]'>
        <h3 className='font-bold text-[20px] '><u>ABOUT US</u></h3>
        <label className='text-black text-[18px]'>This website is to provide panchayat services easily to the people.Without coming to the panchayat, the people can fulfil their 
        needs through this website. The president can convey the information from panchayat to the people. Ward member are able to control the gram sabhas of their wards.Through this ,the problems
        due to congestion in the panchayat can be avoided.
        </label>
      </div>


 

      <div className=' justify-center flex flex-wrap'>
        <div className=''>
          <img  className='h-[380px] w-[350px]' src={walk}></img>
        </div>
        
        <div className=' '>
        <img className='h-[380px] w-[460px]'  src={clg}></img>
        </div>
        <div className=' '>
        <img className='h-[380px] w-[380px]'  src={palam}></img>
        </div>
      </div>
      </div>
     
      <div>
        

        
        
              </div>
              <footer class="bg-[#0F3053] w-[100%] text-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span class="text-sm  sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">ULLIYERI E PANCHAYATH</a>. All Rights Reserved.
            </span>
            
            </div>
        </footer>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7E9BD5" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,181.3C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     
    </> */}
    </>
   

  )
}
