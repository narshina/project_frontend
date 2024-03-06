import React, { useRef,useState } from 'react'
import {FaEye,FaEyeSlash} from "react-icons/fa"
import toast from 'react-hot-toast'

export const Userreg = () => {
  const fileUploadPhoto = useRef(null);
  const fileUploadIdProof = useRef(null);

  const handleUploadFile = (type) => {
    if (type === 'photo') {
      fileUploadPhoto.current.click();
    } else if (type === 'idproof') {
      fileUploadIdProof.current.click();
    }
  };


  const[data,setdata]=useState('')
  const[showpassword,setshowpassword]=useState('password')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  
  let handlesubmit=(event)=>{
    event.preventDefault()
    const requiredFields = ['name','photo','age','dob','gender','idproof','ward number','ward name','email','house number','house name','street','district','pincode','password'];

    for (const field of requiredFields) {
        if (!data[field]) {
            return toast.error(`${field} is required`);
        }
    }
    let mobileNumberPattern = /^[6-9]\d{9}$/
    if(!mobileNumberPattern.test(data.phonenumber)){
     return toast.error('mobile number not matched')
    }
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    console.log(passwordPattern.test(data.password));
    if(!passwordPattern.test(data.password)){
      return toast.error('password is not matched')
    }
    setdata(data)
    toast.success("successfully registered")
    console.log(data);

  }

  return (
    <form onSubmit={handlesubmit}>
    <div className=' w-screen h-screen bg-[#CCDAF6] pt-14'>
      <div className='font-bold font-serif text-[20px] m-auto text-center '>REGISTRATION FORM</div>
      <div className="flex flex-wrap justify-center gap-8 " >
        <div className=' h-[400px] w-[450px] '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('photo')}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              Photo:

            </span>
            <input onChange={handlechange} ref={fileUploadPhoto} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='photo' />
            <div className="">  
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-3'>upload</p>
            </div>
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='age' type='text'/>
            
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DATE OF BIRTH:

            </span>
            <input onChange={handlechange} className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='dob' type='date'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <select onChange={handlechange} className='placeholder:select h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='gender'>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='others'>Others</option>
              </select></div>
            <div className='text h-9   text-white mt-4 flex' onClick={() => handleUploadFile('idproof')}>
            <span  className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              ID PROOF:

            </span>
            <input onChange={handlechange} ref={fileUploadIdProof} type="file" className='hidden h-9 w-56 bg-white rounded-r-lg text-black ' name='idproof' />
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg pl-3'>upload</p>
            </div>
            </div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NUMBER:

            </span>
            <input onChange={handlechange}  type='text' className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='ward number'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NAME:

            </span>
            <input onChange={handlechange} type='text' className='text-black h-9 w-56 bg-white rounded-r-lg pl-3' name='ward name' ></input></div>




        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='email' type='email'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE NUMBER:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='house number' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE NAME:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='house name' type='text'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='street' type='text'></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input onChange={handlechange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' name='district' type='text' maxLength={6}></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input onChange={handlechange} type='text' name='pincode' className='h-9 w-56 bg-white rounded-r-lg text-black pl-3'></input></div>


            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <div className="flex text-black  h-9 w-56 bg-white rounded-r-lg justify-center items-center pl-3">
            <input onChange={handlechange} className='outline-none' name='password' type={showpassword}></input>
           { showpassword === 'text' ?  <FaEye onClick={()=> setshowpassword('password') } color='black' className='ms-2'/> :
           
           <FaEyeSlash  onClick={()=> setshowpassword('text') } color='black' className='ms-2'/>
           }
            </div>
            </div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input onChange={handlechange} type='text' name='phonenumber' className='h-9 w-56 bg-white rounded-r-lg text-black pl-3' maxLength={10}></input></div>
            
            
            

        </div>
      </div>
      <div className='text-center'>
        <button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-20  m-auto'>SUBMIT</button></div>
    </div>
    </form>
  )
}
