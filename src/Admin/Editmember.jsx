import React, { useEffect, useRef,useState } from 'react'
import toast from 'react-hot-toast'
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Editmember = () => {
  let {id}=useParams()  
  const fileUpload = useRef('')

  // const handleUploadFile = ()=>{
  //   fileUpload.current.click()
  // }

  const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
      console.log(response.data)
      setdata(response.data)
    }
    fetchdata()
  },[])

  const fileUploadPhoto = useRef(null);
  const handleUploadFile = (type) => {
    if (type === 'photo') {
      fileUploadPhoto.current.click();
    }
  }
  let handlefile=(event)=>{
    console.log(event.target.files);
    setdata({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

const[usedata,setuserdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=async(event)=>{
    event.preventDefault()
    const formData=new FormData()
    for(const key in data){
      if(data[key]){
        formData.append(key,data[key])
      }
    }
    console.log(formData,'formdata');
    setrefresh(!refresh)
    try{
      let response=await axios.put(`http://localhost:4000/User/editprofile/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type for FormData
        }
      })
      console.log(response.data);
      setdata(response.data)
    }catch(error){
      console.error('Error',error);
    }
      

    // const requiredFields = ['name', 'photo', 'age', 'gender', 'email','ward number','ward name','house','street','district','pincode','phone number','password'];

    // for (const field of requiredFields) {
    //     if (!data[field]) {
    //         return toast.error(`${field} is required`);
    //     }
    // }
    // let mobileNumberPattern = /^[6-9]\d{9}$/
    // if(!mobileNumberPattern.test(data.phonenumber)){
    //  return toast.error('mobile number not matched')
    // }
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    console.log(passwordPattern.test(data.password));
    if(!passwordPattern.test(data.password)){
      return toast.error('password is not matched')
    }
    setdata(data)
    toast.success('submit successfully')
    console.log(data);

  }

  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen sm:h-[660px] bg-[#CCDAF6]  pt-5'>
      <div className='font-bold font-serif text-[20px] m-auto text-center'>WARD MEMBER</div>
      <div className="flex flex-wrap justify-center gap-8" >
        <div className=' h-[360px] w-[450px] '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input onChange={handlechange} placeholder={data.name} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={handleUploadFile}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHOTO:

            </span>
            <input onChange={handlefile} ref={fileUpload} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='photo' />
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg'>upload</p>
            </div>
            </div>
          
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input onChange={handlechange} placeholder={data.age}  className='text-black h-9 w-56 bg-white rounded-r-lg' name='age' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select onChange={handlechange} className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black ' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input onChange={handlechange} placeholder={data.email}  type='email' className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='email' ></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NUMBER:

            </span>
           <select onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black'  name="ward number" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
           </select>
           
           
           </div>





        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NAME:

            </span>
           <select onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black'  name="ward name" id="">
            <option disabled value="">select</option>
            <option value="kakkanchery">Kakkanchery</option>
            <option value="koyakkad west">koyakkad west</option>
            <option value="koyakkad">koyakkad</option>
            <option value="oravil">Oravil</option>
            <option value="ulliyeri north">Ulliyeri North</option>
           </select>
           
           
           </div>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE:

            </span>
            <input onChange={handlechange} placeholder={data.houseName} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='house' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input onChange={handlechange} placeholder={data.street} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='street' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input onChange={handlechange} placeholder={data.district} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='district' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input onChange={handlechange} placeholder={data.pincode} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='pincode' type='text' maxLength={6}></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input
  onChange={handlechange} placeholder={data.phoneNumber} className='pl-3 text-black h-9 w-56 bg-white rounded-r-lg' name='phoneNumber' type='number'  
/>

            </div>
            {/* <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center">
            <input onChange={handlechange} className='outline-none' name='password' type={showpassword}></input>
           { showpassword === 'text' ?  <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
           }
            </div>
            </div> */}
            
            
            

        </div>
      </div>
      <div className='text-center'>
        <button type='submit' className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-7 m-auto'>SUBMIT</button></div>
    </div>
    </form>
  )
}
