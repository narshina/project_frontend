import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import {FaEye,FaEyeSlash} from "react-icons/fa"


export const Usereditprofile = () => {
    

    let id=localStorage.getItem('id')
    const[userdata,setuserdata]=useState('')
    const[refresh,setrefresh]=useState(false)
    useEffect(()=>{
      let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:4000/User/viewprofile/${id}`)
        console.log(response.data)
        setuserdata(response.data)

      }
      fetchdata()
    }
    ,[]
    )

    const fileUploadPhoto = useRef(null);
    const fileUploadIdProof = useRef(null);
    const fileUploadpancard =useRef(null)
  
    const handleUploadFile = (type) => {
      if (type === 'photo') {
        fileUploadPhoto.current.click();
      } else if (type === 'idproof') {
        fileUploadIdProof.current.click();
      }
      else if (type === 'pancard'){
        fileUploadpancard.current.click();
      }
    };
    let handlefile=(event)=>{
      console.log(event.target.files);
      setdata({...data,[event.target.name]:event.target.files[0]})
      console.log(data);
    }
    
  
    const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  let handlesubmit=async(event)=>{
    event.preventDefault()
    const formData=new FormData()
    for(const key in data){
      if(data[key]){
        formData.append(key,data[key])
      }
    }
    
    console.log(formData,'formdata')
    setrefresh(!refresh)
    try{
    let response=await axios.put(`http://localhost:4000/User/editprofile/${id}`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type for FormData
      }
    })
    console.log(response.data);
    setuserdata(response.data)
  }catch(error){
    console.error('Error',error)
  }


    // const requiredFields = ['name','photo','age','dob','gender','idproof','wardNumber','wardName','email','houseNumber','houseName','street','district','pincode','phoneNumber','password'];
    // for (const field of requiredFields) {
    //     if (!data[field]) {
    //         return toast.error(`${field} is required`);
    //     }
    // }
    // let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    // console.log(passwordPattern.test(data.password));
    // if(!passwordPattern.test(data.password)){
    //   return toast.error('password is not matched')
    // }
    setdata(data)
    toast.success("Profile edited successfully")
    console.log(data);

    
  }

  

  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen h-screen bg-[#CCDAF6] pt-14'>
      <div className='font-bold font-serif text-[20px] m-auto text-center '>EDIT PROFILE</div>
      <div className="flex flex-wrap justify-center gap-8 " >
        <div className=' h-[400px] w-[450px] '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input onChange={handlechange} placeholder={userdata.name} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('photo')}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              Photo:

            </span>
            <input onChange={handlefile} ref={fileUploadPhoto} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='photo' />
            <div className="">  
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-3'>upload</p>
            </div>
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input onChange={handlechange} placeholder={userdata.age} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='age' type='text'/>
            
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE OF BIRTH:

            </span>
            <input onChange={handlechange} placeholder={userdata.dob} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='dob' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select onChange={handlechange}  className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('idproof')}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              ID PROOF:

            </span>
            <input onChange={handlefile} ref={fileUploadIdProof} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='idproof' />
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-3'>upload</p>
            </div>
            </div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NUMBER:

            </span>
            <input onChange={handlechange} placeholder={userdata.wardNumber} type='text' className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='wardNumber'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NAME:

            </span>
            <input onChange={handlechange} placeholder={userdata.wardName} type='text' className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='wardName' ></input></div>




        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input onChange={handlechange} placeholder={userdata.email} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='email' type='email'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE NUMBER:

            </span>
            <input onChange={handlechange} placeholder={userdata.houseNumber} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='houseNumber' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE NAME:

            </span>
            <input onChange={handlechange} placeholder={userdata.houseName} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='houseName' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input onChange={handlechange} placeholder={userdata.street} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='street' type='text'></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              POST OFFICE:

            </span>
            <input onChange={handlechange} placeholder={userdata.district} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='district' type='text' ></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input onChange={handlechange} placeholder={userdata.pincode} type='text' name='pincode' className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' maxLength={6}></input></div>


           
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input onChange={handlechange} placeholder={userdata.phoneNumber}  type='text' name='phoneNumber' className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' maxLength={10}></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('pancard')}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PANCARD:

            </span>
            <input onChange={handlefile} ref={fileUploadpancard} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='pancard' />
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-3'>upload</p>
            </div>
            </div>
            
            

        </div>
      </div>
      <div className='text-center'>
        <button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-20  m-auto'>SUBMIT</button></div>
    </div>
    </form>
  

  )
}
