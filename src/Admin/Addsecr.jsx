import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import {FaEye,FaEyeSlash} from "react-icons/fa"
import axios from 'axios'

export const Addsecr = () => {


  const fileUpload = useRef('')
  const fileUploadPhoto = useRef(null);
  

   const handleUploadFile = (type) => {
    if (type === 'photo') {
      fileUploadPhoto.current.click();
    }
  }
  

  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')

  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  let handlefile=(event)=>{
    console.log(event.target.files);
    setdata({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
  

  let handlesubmit=async(event)=>{
    event.preventDefault()
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('photo', data.photo);
    formData.append('age', data.age);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('qualification', data.qualification);
    formData.append('houseName', data.houseName);
    formData.append('street', data.street);
    formData.append('district', data.district);
    formData.append('pincode', data.pincode);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('password', data.password);
    formData.append('usertype', 'secretary');
console.log(formData,'formdata');

try {
  let response = await axios.post('http://localhost:4000/User/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data' // Set the content type for FormData
    }
  });
  console.log(response.data);
  toast.success('submit successfully')

} catch (error) {
  console.error('Error:', error);
  toast.error('secretary already added');
}

    // const requiredFields = ['name', 'photo', 'age', 'gender', 'email', 'qualification', 'houseName', 'street', 'district', 'pincode', 'phoneNumber', 'password'];

    // for (const field of requiredFields) {
    //     if (!data[field]) {
    //         return toast.error(`${field} is required`);
    //     }
    // }
    

    // let mobileNumberPattern = /^[6-9]\d{9}$/
    // if(!mobileNumberPattern.test(data.phonenumber)){
    //  return toast.error('mobile number not matched')
    // }
    // let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    // console.log(passwordPattern.test(data.password));
    // if(!passwordPattern.test(data.password)){
    //   return toast.error('password is not matched')
    // }

    console.log(data);


    // setdata('')
    console.log(data);
  }
  



  return (
    <form onSubmit={handlesubmit}>

    <div className=' w-screen  bg-[#CCDAF6] sm:h-[660px] pt-5'>
      <div  className='font-bold font-serif text-[20px] m-auto text-center'>SECRETARY</div>
      <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px]  '>



          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input required onChange={handlechange} pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed"  className='h-9 w-56 text-black bg-white rounded-r-lg pl-2' name='name' type='text' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHOTO:

            </span>
            <input required onChange={handlefile}  type="file" className=' h-9 w-56 bg-white rounded-r-lg ' name='photo' />
            
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input required onChange={handlechange} className='text-black pl-2  h-9 w-56 bg-white rounded-r-lg ' name='age' type='number' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select required onChange={handlechange} className='placeholder:select  h-9 w-56 bg-white rounded-r-lg text-black ' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input required onChange={handlechange} type='email' className='text-black  pl-2 h-9 w-56 bg-white rounded-r-lg ' name='email' id=''></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              QUALIFICATION:

            </span>
            <input required onChange={handlechange}  className='text-black h-9 w-56 pl-2 bg-white rounded-r-lg' name='qualification'></input></div>



        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE:

            </span>
            <input required onChange={handlechange}   className='text-black pl-2  h-9 w-56 bg-white rounded-r-lg' name='houseName' type='text' id=''></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input required onChange={handlechange}   className='text-black h-9 pl-2 w-56 bg-white rounded-r-lg' name='street' type='text' id=''></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input required onChange={handlechange} pattern="[A-Za-z]+"  title="Only alphabets are allowed"  className='text-black pl-2 h-9 w-56 bg-white rounded-r-lg' name='district' type='text' id=''></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input required onChange={handlechange} className='text-black h-9 w-56 pl-2 bg-white rounded-r-lg' name='pincode' type='text' id='' maxLength={6} pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" ></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input required onChange={handlechange} className='text-black h-9 w-56 pl-2 bg-white rounded-r-lg' name='phoneNumber' type='text' pattern='[0-9]{10}' title='please enter a valid phone number' maxLength={10} ></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center">
            <input required onChange={handlechange} className='outline-none pl-2' name='password' type={showpassword} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.'></input>
           { showpassword === 'text' ?  <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
           }
            </div>
            </div>
            
          

        </div>
        
      </div>
  
      <div className='text-center'>

    <button  type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded -mt-10 m-auto'>SUBMIT</button>
      </div>
    {/* {
              JSON.stringify(data)
            } */}
    </div>

          </form>
  )
}
