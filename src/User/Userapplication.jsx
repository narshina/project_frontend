import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { LangContext } from './LanguageContext'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'
import "./index.css"
import toast from 'react-hot-toast'
export const Userapplication = () => {
  // const fileUpload = useRef(null)
  // const handleUploadFile = (type) => {
  //   fileUpload.current.click()
  // }
  let { id } = useParams()
  let userId = localStorage.getItem('id')
  const [fetchData, setFetchData] = useState([''])
  const navigate=useNavigate()
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:4000/Staff/vform/${id}`);
        if (!response.data || response.data.length === 0) {
          console.log('Data not found');
          toast.error('not ready to apply')
          navigate('/user/userviewservice');
          return;
        }
        console.log(response.data);
        setFetchData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };
    fetchData();
  }, [id, navigate]);

  const [data, setdata] = useState('')
  let handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
    console.log(data)
  }
  let handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();

    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }
    formData.append('userId', userId);
    formData.append('serviceId', id);
    formData.append('status', 'pending');
    try {

      let response = await axios.post('http://localhost:4000/User/submitform', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      navigate('/user/userviewapplication')
    } catch (error) {
      console.error(error);
    }
  };

  let value = useContext(LangContext)

  let handlefile = (event) => {
    setdata({ ...data, [event.target.name]: event.target.files[0] })
    console.log(data)
  }
  return (

    <div className='bg-[#CCDAF6] w-[100%] pt-10 h-[655px]'>


      <div className='text-center'>

        <h2 className='text-[30px] font-bold'>{fetchData[0].service ? <span>{fetchData[0].service?.service}</span> : <span>No services</span>}</h2>

      </div>

      <form onSubmit={handleSubmit} class=" w-[50%] m-auto ">
        {fetchData?.map((item) => (

          <div class="relative z-0  mb-5 h-fit group ">
            <label for="floating_email" class="w-48">{value.lang ? <span className=''>{item?.field?.fieldMalayalam}</span> : <span>{item?.field?.fieldEnglish}</span>}</label><br />
            <input required onChange={handlechange} type="text" name={item?.field?.fieldEnglish} id="floating_email" class="input_field w-[600px]" placeholder=" " />
            
          </div>
          
        ))}
        <div><div>{fetchData[0]?.service?.requirement}</div>
          <input required onChange={handlefile}  name='photo' type='file'></input>
        </div>
        


        <div className='text-center'>
          <button type="submit" class="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></div>
      </form>


     
    </div>
  )
}
