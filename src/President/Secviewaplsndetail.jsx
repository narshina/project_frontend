import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Secviewaplsndetail = () => {
  const[upload,setupload]=useState(false)

  let uploaddrop=()=>{
    setupload=(!upload)
  }
  return (
    <div className='w-screen h-[655px]'>
    <div className=' flex justify-center w-screen h-[655px]  bg-[#CCDAF6] '>
        <div className='text-black leading-[30px] mt-4 '>
          <div className='text-[20px]'><b>APPLICATION FOR CERTIFICATE TO GET NEW RATION CARD</b></div>
          <tr>
            <td>name:</td>
            <td>anbfhgvnvnvngfhgfhgfhgf</td>
          </tr>
          <tr>
            <td>fathers name:</td>
            <td>gggggggggg</td>
          </tr>
          <tr>
            <td>ward number:</td>
            <td>6</td>
          </tr>
          <tr>
            <td>House number:</td>
            <td>259</td>
          </tr>
          <tr>
            <td>corrently covered under any ration card?if yes information about it:</td>
            <td>no</td>
          </tr>
          <tr>
            <td>how many years you have settled in the panchayath limits:</td>
            <td>5</td>
          </tr>
          <tr>
            <td>information about which office to present:</td>
            <td>yyyyyyyyy</td>
          </tr>
          <tr>
            <td>document:</td>
            <td><input type='file'/></td>
          </tr>
          <tr>
            <td>status:</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>payment status:</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>rejected reason:</td>
            <td>pending</td>
          </tr>

        
         
     {  upload ? <div>

      <input type="file" /><br />
      <div  className='text-center'>

      <button className='button m-auto w-[50%] text-black font-semibold bg-green-500 h-9 -ml-9 rounded mt-7' >submit</button>
      </div>
      </div> :       <div className='flex gap-12 text-center m-auto w-fit'><button className='button text-black font-semibold bg-green-500 w-40 h-9 -ml-9 rounded mt-7' onClick={()=>setupload(true)}>ACCEPT</button>
  <Link to='/president/secreject' ><button className='button text-black font-semibold bg-red-600 w-40 h-9 -ml-9 rounded mt-7'  onClick={()=>setupload(false)}>REJECT</button></Link>
      
      </div>
      }
              </div>
            
    </div>
  </div>
  )
}
