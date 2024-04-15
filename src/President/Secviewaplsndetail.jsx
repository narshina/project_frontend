import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Secviewaplsndetail = () => {
  let { id } = useParams();
  const [reason, setReason] = useState(false);
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [upload, setUpload] = useState(false);
  const [reasons, setReasons] = useState('');
  const fileUpload = useRef(null);

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
        const response = await axios.get(`http://localhost:4000/Staff/applydetail/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handlesubmit = async (statuss) => {
    setRefresh(!refresh);
    let formData = new FormData();
    formData.append('finalDocument', data.certificate);
    formData.append('ResultDate', new Date());
    formData.append('status', statuss);
   
    let response = await axios.put(`http://localhost:4000/Staff/manageapplicationpresident/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type for FormData
      }
    });
    console.log(response);
    setData('');
  };

  const handlereason = async (statuss) => {
    let response = await axios.put(`http://localhost:4000/Staff/reject/${id}`, { reason: reasons.reason, status: statuss });
    console.log(response);
    setData('');
  };

  const reasondrop = () => {
    setReason(!reason);
  };

  const uploaddrop = () => {
    setUpload(!upload);
  };

  const downloadDocument = () => {
    window.open(`http://localhost:4000/download/${data.application.document}`, '_blank');
  };

  const renderTableData = () => {
    return Object.keys(data.application ?? {}).map((key) => (
      (key !== '_id' && key !== 'serviceId' && key !== 'userId') && (
        <tr key={key}>
          <td>{key}</td>
          <td>
            {key === 'document' ? (
              <button onClick={downloadDocument}>{data.application[key]}</button>
            ) : (
              data.application[key]
            )}
          </td>
        </tr>
      )
    ));
  };

  return (
    <div className='w-screen h-[655px]'>
      <div className='flex justify-center w-screen h-[655px] bg-[#CCDAF6]'>
        <div className='text-black leading-[30px] mt-4 '>
          <div className='text-[20px] underline'><b>{data?.services?.service}</b></div>
          <table>
            <tbody>
              {renderTableData()}
            </tbody>
          </table>
          <div className='flex gap-12'>
              <button onClick={() => { handlesubmit('accepted by secretary') }} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>ACCEPT</button>
              <input onChange={handlefile} name='certificate' type='file' required></input>
            <div>
              <span onClick={reasondrop} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>REJECT</span>
              {reason &&
                <div className='absolute top-[430px] bg-white p-4 pt-2 w-[400px] h-[170px] rounded-lg'>
                  <div className='font-medium text-black mt-3'>REASON:</div>
                  <div><input onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='reason' type='text' id=''></input></div>
                  <div><button onClick={() => { handlereason('rejected by secretary') }} type='submit' className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5">SUBMIT</button></div>
                </div>
              }
            </div>
          </div>
          <div><h2 className='text-black font-bold underline'>USER DETAILS</h2></div>
          <div>Name:{data?.users?.name}</div>
          <div>Age:{data?.users?.age}</div>
          <div>Date of Birth:{data?.users?.dob}</div>
          <div>House name:{data?.users?.houseName}</div>
          <div>Ward Number:{data?.users?.wardNumber}</div>
          <div>Ward Name:{data?.users?.wardName}</div>
          <div>Phone Number:{data?.users?.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};
