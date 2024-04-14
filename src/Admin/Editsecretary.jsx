import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'


export const Editsecretary = () => {
  let {id}=useParams()
  
  const[userdata,setuserdata]=useState('')
  const[refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get('http://localhost:4000/President/viewsecs')
      console.log(response.data)
      setuserdata(response.data)
    }
    fetchdata()
  },[])


  // const fileUpload = useRef('')

  // const handleUploadFile = () => {
  //   fileUpload.current.click()
  // }
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

  const [data, setdata] = useState('')

  let handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }
  

  let handlesubmit =async (event) => {
    event.preventDefault()
    const formData = new FormData();
  
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
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
    setuserdata(response.data)
  }catch(error){
    console.error('Error',error);
  }

    // const requiredFields = ['name', 'photo', 'age', 'gender', 'email', 'qualification', 'houseName', 'street', 'district', 'pincode', 'phoneNumber'];
    // console.log(data);

    // for (const field of requiredFields) {
    //   if (!data[field]) {
    //     return toast.error(`${field} is required`);
    //   }
    // }


    console.log(data);


    toast.success('edited successfully')
    // setdata('')
    console.log(data);
  }


  return (
    <form onSubmit={handlesubmit}>
      <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5'>
        <div className='font-bold font-serif text-[20px] ml-[655px]'>SECRETARY</div>
        <div className="flex gap-8" >
          <div className=' h-[360px] w-[450px]  ml-60 '>


            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
                NAME:

              </span>
              <input onChange={handlechange} placeholder={userdata.name} className='text-black h-9 w-56 bg-white rounded-r-lg pl-2' name='name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('photo')}>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                PHOTO:

              </span>
              <input onChange={handlefile} ref={fileUploadPhoto} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg ' name='photo' />
              <div className="">
                <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-2'>upload photo</p>
              </div>
            </div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                AGE:

              </span>
              <input onChange={handlechange} placeholder={userdata.age}   className='pl-2 text-black  h-9 w-56 bg-white rounded-r-lg' name='age' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                GENDER:

              </span>
              <select onChange={handlechange} className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black pl-2 ' name='gender'>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='others'>Others</option>
              </select></div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                EMAIL ID:

              </span>
              <input onChange={handlechange} placeholder={userdata.email} type='email' className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='email' ></input></div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                QUALIFICATION:

              </span>
              <input onChange={handlechange} placeholder={userdata.qualification} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='qualification' type='text'></input></div>



          </div>
          <div className=' h-[360px] w-[450px]  '>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                HOUSE:

              </span>
              <input onChange={handlechange} placeholder={userdata.houseName} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='houseName' type='text'></input>
            </div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                STREET:

              </span>
              <input onChange={handlechange} placeholder={userdata.street} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='street' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                DISTRICT:

              </span>
              <input onChange={handlechange} placeholder={userdata.district} className=' text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='district' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                PINCODE:

              </span>
              <input onChange={handlechange} placeholder={userdata.pincode} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='pincode' type='text' maxLength={6}></input></div>

            <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                PHONE NUMBER:

              </span>
              <input onChange={handlechange} placeholder={userdata.phoneNumber} className='text-black  h-9 w-56 bg-white rounded-r-lg pl-2' name='phonNumber' type='text' maxLength={10}></input></div>
            {/* <div className='text h-9   text-white mt-4 flex'>
              <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
                PASSWORD:

              </span>
              <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center">
                <input onChange={handlechange} className='outline-none' name='password' type={showpassword}></input>
                {showpassword === 'text' ? <FaEye onClick={() => setshowpassword('password')} color='black' className='ms-2' /> :

                  <FaEyeSlash onClick={() => setshowpassword('text')} color='black' className='ms-2' />
                }
              </div>
            </div> */}




          </div>
        </div>
        <div><button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded -mt-10 ml-[590px]'>SUBMIT</button></div>
      </div>
    </form>
  )
}
