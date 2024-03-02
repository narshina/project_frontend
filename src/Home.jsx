import React from 'react'
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

export default function Home() {
  return (

    <>
    

                <Carousel className='h-6 ' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000}>
                <div>
                    <img src={ul3} className='h-[600px] opacity-40'   />
                    
                </div>
                <div>
                    <img src={ul1} className='h-[600px] opacity-40' />
                    
                </div>
                <div>
                    <img src={clg} className='h-[600px] opacity-40' />
                    
                </div>
                
            </Carousel>
            <div className='absolute sm:left-[20%] sm:top-[15%] sm:p-40 text-center'><label className='  text-[#0F3053]  font-bold text-[40px]'>GET YOUR SERVICES FROM HERE</label><br></br><span className='text-[25px] text-center'>Empowering you with easy access to solutions.</span>
      </div>
            
<div className='bg-slate-200 h-96 w-[100%] text-white mt-[600px]'>
<div className='border-b-4 border-cyan-900 text-black font-bold text-center p-6 text-[25px]'><h2>NEWS</h2></div>
<div className='text-blue-700 pl-5'><li>English is a very popular language that is spoken all around the world. To communicate effectively in English, it is important to have strong reading comprehension skills. These skills will allow you to read English language newspapers, vocabulary books, and novels! This blog provides readers with English paragraphs for reading, followed by practice exercises to test their comprehension</li></div>
</div>


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
