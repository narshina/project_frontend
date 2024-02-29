import React from 'react'
import App from './App'
import './Home.css';
import icon from './abc.png'
import walk from './walking.png'
import clg from './ulliyeri1.webp'
import palam from './palam.png'

export default function Home() {
  return (
    <>
    <div className='bg-[#7E9BD5] h-[350px]'>
      <div className='p-40 text-center'><label className='hover:text-white text-[#0F3053]  font-bold text-[40px]'>GET YOUR SERVICES FROM HERE</label><br></br><span className='text-[25px] text-center'>Empowering you with easy access to solutions.</span>
      <div><button className='bg-[#0F3053] text-white h-9 w-28 rounded-3xl hover:bg-[#77A4FA] mt-5'>contact</button></div>
      <div className='mt-[300px] h-64 w-[100%]'>
        <h3 className='font-bold text-[20px] '><u>ABOUT US</u></h3>
        <label className='text-black text-[18px]'>This website is to provide panchayat services easily to the people.Without coming to the panchayat, the people can fulfil their 
          needs through this website. The president can convey the information from panchayat to the people. Ward member are able to control the gram sabhas of their wards.Through this ,the problems
          due to congestion in the panchayat can be avoided.
        </label>
      </div>
      <div className='w-[100%] h-96  flex flex-wrap'>
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
     
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7E9BD5" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,181.3C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      
    </>
    
   

  )
}
