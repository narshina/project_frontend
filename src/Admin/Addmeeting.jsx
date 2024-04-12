import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const Addmeeting = () => {
  const [data, setData] = useState({
    agenda: '',
    date: '',
    time: '',
    venue: ''
  });

  let handlechange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  let handlesubmit = async (event) => {
    event.preventDefault();
    let id = localStorage.getItem('id');
    try {
      const response = await axios.post('http://localhost:4000/President/addmeeting', { ...data, userid: id });
      console.log(response);
      const requiredFields = ['agenda', 'date', 'time', 'venue'];
      for (const field of requiredFields) {
        if (!data[field]) {
          return toast.error(`${field} is required`);
        }
      }
      setData({
        agenda: '',
        date: '',
        time: '',
        venue: ''
      });
      toast.success('Submitted successfully');
      console.log(data);
    } catch (error) {
      console.error('Error submitting data', error);
      toast.error('Failed to submit data');
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className='w-screen bg-[#CCDAF6] sm:h-[660px] pt-5'>
      <div className='font-bold font-serif text-[20px] m-auto text-center'>MEETING</div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className='h-[360px] w-[450px]'>
          <form onSubmit={handlesubmit}>
            <div className='text h-9 text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>AGENDA:</span>
              <input onChange={handlechange} value={data.agenda} className='pl-3 h-9 w-56 bg-white text-black rounded-r-lg' name='agenda' type='text'></input>
            </div>
            <div className='text h-9 text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>DATE:</span>
              <input onChange={handlechange} value={data.date} className='pl-3 h-9 w-56 bg-white rounded-r-lg text-black' name='date' type='date' min={currentDate}></input>
            </div>
            <div className='text h-9 text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>TIME:</span>
              <input onChange={handlechange} value={data.time} className='pl-3 h-9 w-56 bg-white rounded-r-lg text-black' name='time' type='time'></input>
            </div>
            <div className='text h-9 text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>VENUE:</span>
              <input onChange={handlechange} value={data.venue} className='pl-3 h-9 w-56 bg-white rounded-r-lg text-black' name='venue' type='text'></input>
            </div>
            <div className='text-center'>
              <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-5 m-auto'>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
