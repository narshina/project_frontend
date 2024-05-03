import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const EmailOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const[verifyotp,setVerifyotp]=useState('')
  const navigate=useNavigate()

  const sendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:4000/User/sendOTP', { email });
      setMessage(response.data.message);
      console.log(response.data.otp,'--------------------');
      setVerifyotp(response.data.otp)
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
    }
  };

  const verifyOTP = async () => {
    try {
      console.log(verifyotp,otp);
      if(verifyotp==otp){
        alert('success')
        navigate(`/forgot/${email}`)
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
    }
  };

  return (
    <div className='w-full h-[690px] bg-[#CCDAF6] '>
      <div className='text-center pt-10 font-bold text-[20px]'>Email OTP Verification</div>
      <div className='flex fle-wrap justify-center mt-4'>
      <input className='rounded-md h-9 w-52'
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='bg-[#0F3053] text-white rounded-md' onClick={sendOTP}>Send OTP</button>
      <br></br>
      <input className='rounded-md h-9 w-52'
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button className='bg-[#0F3053] text-white rounded-md' onClick={verifyOTP}>Verify OTP</button>
      <p>{message}</p>
      </div>
      </div>
  );
};