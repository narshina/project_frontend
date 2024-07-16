import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Secviewaplsndetail = () => {
  const [idd,setid]=useState(false)
  
  let { id } = useParams();
  const [reason, setReason] = useState(false);
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [upload, setUpload] = useState(false);
  const [reasons, setReasons] = useState('');
  const fileUpload = useRef(null);
  const navigate=useNavigate()

  const handleUploadFile = (type) => {
    if (type === 'document') {
      fileUpload.current.click();
    }
  };

  const handlechange = (event) => {
    setReasons({ ...reasons, [event.target.name]: event.target.value });
  };

  const handlefile = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://project-backend-2i9b.onrender.com/Staff/applydetail/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handlesubmit =  (statuss) => {
    
    console.log(data.certificate,'---------------------------------');
    if (!data.certificate) {
      // If no file is selected, prevent form submission
      return alert('Please select a file.');
    }
    setRefresh(!refresh);
    let formData = new FormData();
    formData.append('finalDocument', data.certificate);
    formData.append('ResultDate', new Date());
    formData.append('status', statuss);
    if (reasons.reason) {
      formData.append('reason', reasons.reason);
    }
    let response =  axios.put(`https://project-backend-2i9b.onrender.com/Staff/manageapplicationpresident/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type for FormData
      }
    });
    navigate('/president/secviewapllcsn')
    console.log(response);
    setData('');
  };

  const handlereason =  (statuss) => {
    let response =  axios.put(`https://project-backend-2i9b.onrender.com/Staff/reject/${id}`, { reason: reasons.reason, status: statuss });
    console.log(response);
    navigate('/president/secviewapllcsn')

  };

  const reasondrop = () => {
    setReason(!reason);
  };
  let close=()=>{
    setReason(!reason)
  }

  const downloadDocument = () => {
    window.open(`https://project-backend-2i9b.onrender.com/download/${data.application.document}`, '_blank');
  };

  return (
    <div className='w-screen h-[1000px]'>
      <div className='flex justify-center w-screen  bg-[#CCDAF6]'>
        <div className='text-black leading-[30px] mt-4 '>
          <div className='text-[20px] underline'><b>{data?.services?.service}</b></div>
          <table className='border-collapse w-full mt-4'>
            <tbody>
              {Object.keys(data.application ?? {}).map((key) => (
                (key !== '_id' && key !== 'serviceId' && key !== 'userId') && (
                  <tr key={key}>
                    <td className='py-2 px-4 border text-[20px]'>{key}</td>
                    <td className='py-2 px-4 border text-[20px]'>{key === 'document' ? <button onClick={downloadDocument}>{data.application[key]}</button> : data.application[key]}</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
          
          <div><h2 className='text-black font-bold underline'>USER DETAILS</h2></div>
          <table className='border-collapse w-full'>
            <tbody>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Name</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.name}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Photo</td>
                <td   className='py-2 px-4 border'>
                  <a target='_blank' href={`https://project-backend-2i9b.onrender.com/uploads/${data.users?.photo}`}><img  className='h-16 w-16' src={`https://project-backend-2i9b.onrender.com/uploads/${data.users?.photo}`} alt=''/>
                  </a>
               
                </td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Age</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.age}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Date of Birth</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.dob}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Gender</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.gender}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>ID Proof</td>
                <td className='py-2 px-4 border text-[20px]'><a href={`https://project-backend-2i9b.onrender.com/uploads/${data?.users?.idproof}`} target='_blank'>{data?.users?.idproof}</a></td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Pancard</td>
                <td className='py-2 px-4 border text-[20px]'><a href={`https://project-backend-2i9b.onrender.com/uploads/${data?.users?.pancard}`} target='_blank'>{data?.users?.pancard}</a></td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Ward Number</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.wardNumber}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Ward Name</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.wardName}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>House number</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.houseNumber}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Phone Number</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.phoneNumber}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>email id</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.email}</td>
              </tr>
              <tr>Permenant Address</tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>House name</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.houseName}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Street</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.street}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Post office</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.district}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Pincode</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.pincode}</td>
              </tr>
              <tr>Current Address</tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>House</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.currenthouse}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Street</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.currentstreet}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Post office</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.currentpost}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border text-[20px]'>Pincode</td>
                <td className='py-2 px-4 border text-[20px]'>{data?.users?.currentpin}</td>
              </tr>
              
            </tbody>
          </table>
            
          <div className='flex gap-12 mt-4'>
          {reason  ? <span></span> :
          <form onSubmit={(e) => { e.preventDefault(); handlesubmit('accepted by secretary') }}>
              <button type="submit" className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>ACCEPT</button>
              <input ref={fileUpload} onChange={handlefile} name='certificate' type='file' ></input>
              {/* <button type="button" onClick={() => handleUploadFile('document')} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>UPLOAD</button> */}
              </form>
              }
            <div>
              <span onClick={reasondrop} className='font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>REJECT</span>
              {reason &&
                <div className='absolute top-[730px] bg-white p-4 pt-2 w-[400px] h-[180px] rounded-lg'>
                  <div className='font-medium text-black mt-3'>REASON:</div>
                  <div><input onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='reason' type='text' id=''></input></div>
                  <div><button onClick={() => { handlereason('rejected by secretary') }} type='submit' className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5">SUBMIT</button></div>
                  <div><button onClick={close} type='button' className="">Cancel</button></div>
                </div>
              }
            </div>
          </div>
              
        </div>
        
      </div>
      
    </div>
  );
};
