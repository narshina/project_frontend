import React from 'react'

export const Addwardmember = () => {
  return (
    <div className=' w-screen h-[655px] bg-[#CCDAF6]  pt-5'>
      <div className='font-bold font-serif text-[20px] ml-[655px]'>WARD MEMBER</div>
      <div className="flex gap-8" >
        <div className=' h-[360px] w-[450px]  ml-60 '>


          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56 rounded-l-lg pl-5'>
              NAME:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHOTO:

            </span>
            {/* <input type="file" className='h-9 w-56 bg-white rounded-r-lg'/> */}
            <div className="">
              <p className=' text-slate-500 h-9 w-56 bg-white rounded-r-lg'>upload photo</p>
            </div>
            </div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              AGE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              GENDER:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              EMAIL ID:

            </span>
            <input type='email' className='h-9 w-56 bg-white rounded-r-lg'></input></div>
          <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NUMBER:

            </span>
           <select className='h-9 w-56 bg-white rounded-r-lg text-black'  name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
           </select>
           
           
           </div>
           <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              WARD NAME:

            </span>
           <select className='h-9 w-56 bg-white rounded-r-lg text-black'  name="" id="">
            <option disabled value="">select</option>
            <option value="">Kakkanchery</option>
            <option value="">koyakkad west</option>
            <option value="">koyakkad</option>
            <option value="">Oravil</option>
            <option value="">Ulliyeri North</option>
           </select>
           
           
           </div>




        </div>
        <div className=' h-[360px] w-[450px]  '>
        <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              HOUSE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              STREET:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              DISTRICT:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PINCODE:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>

            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PHONE NUMBER:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            <div className='text h-9   text-white mt-4 flex'>
            <span className='bg-[#0F3053] w-56  rounded-l-lg pl-5'>
              PASSWORD:

            </span>
            <input className='h-9 w-56 bg-white rounded-r-lg'></input></div>
            
            
            

        </div>
      </div>
      <div><button className='button text-white font-semibold bg-[#0F3053] w-48 h-9 rounded mt-7 ml-[590px]'>SUBMIT</button></div>
    </div>
  )
}
