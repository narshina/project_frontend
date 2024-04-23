import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Staffviewapplydetail = () => {
  let { id } = useParams();
  const [reason, setReason] = useState(false);
  const [data, setData] = useState({});
  const [reasons, setReasons] = useState('');
  const navigate=useNavigate()

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

  const handlechange = (event) => {
    setReasons({ ...reasons, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (statuss) => {
    navigate('/staff/staffviewapply')

    let response = await axios.put(`http://localhost:4000/Staff/manageapplication/${id}`, { status: statuss, reason: reasons.reason });

  };

  const reasondrop = () => {
    setReason(!reason);
  };
  let close=()=>{
    setReason(false)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };


  const renderTableData = () => {
    return Object.keys(data.application ?? {}).map((key) => {
      if (key === '_id' || key === 'serviceId' || key === 'userId') {
        return null;
      }
      return (
        <tr key={key}>
          <td className='py-2 px-4 border'>{key}</td>
          <td className='py-2 px-4 border'>
            {key === 'document' ? (
              <a download={true} href={`http://localhost:4000/download/${data.application[key]}`}>
                <button>{data.application[key]}</button>
              </a>
            ) : (
              key === 'applicationDate' ? formatDate(data.application[key]) : data.application[key]
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='w-screen '>
      <div className='flex justify-center w-screen  bg-[#CCDAF6]'>
        <div className='text-black leading-[30px] mt-4 '>
          <div className='text-[20px] underline'><b>{data?.services?.service}</b></div>
          <table className='border-collapse w-full mt-4'>
            <tbody>
              {renderTableData()}
            </tbody>
          </table>
          <div className='flex gap-12'>
            <div onClick={() => { handlesubmit('verified by staff') }} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>ACCEPT</div>
            <div>
              <span onClick={reasondrop} className='href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-[20px]'>REJECT</span>
              {reason &&
                <div className='absolute top-[430px] bg-white p-4 pt-2 w-[400px] h-[190px] rounded-lg'>
                  <div className='font-medium text-black mt-3'>REASON:</div>
                  <div><input onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='reason' type='text' id=''></input></div>
                  <div><button onClick={() => { handlesubmit('rejected by staff') }} type='submit' className="w-full text-white bg-[#0F3053] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-5">SUBMIT</button></div>
                  <div><button onClick={close} type='button' className="">Cancel</button></div>
                </div>
              }
            </div>
          </div>
          <div><h2 className='text-black font-bold underline'>USER DETAILS</h2></div>
          <table className='border-collapse w-full'>
            <tbody>
              <tr>
                <td className='py-2 px-4 border'>Name</td>
                <td className='py-2 px-4 border'>{data?.users?.name}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Photo</td>
                <td   className='py-2 px-4 border'>
                  <a target='_blank' href={`http://localhost:4000/uploads/${data.users?.photo}`}><img  className='h-16 w-16' src={`http://localhost:4000/uploads/${data.users?.photo}`} alt=''/>
                  </a>
               
                </td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Age</td>
                <td className='py-2 px-4 border'>{data?.users?.age}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Date of Birth</td>
                <td className='py-2 px-4 border'>{data?.users?.dob}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Gender</td>
                <td className='py-2 px-4 border'>{data?.users?.gender}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>ID Proof</td>
                <td className='py-2 px-4 border'>{data?.users?.idproof}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Ward Number</td>
                <td className='py-2 px-4 border'>{data?.users?.wardNumber}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Ward Name</td>
                <td className='py-2 px-4 border'>{data?.users?.wardName}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Phone Number</td>
                <td className='py-2 px-4 border'>{data?.users?.phoneNumber}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>email id</td>
                <td className='py-2 px-4 border'>{data?.users?.email}</td>
              </tr>
              <tr>Permenant Address</tr>
              <tr>
                <td className='py-2 px-4 border'>House name</td>
                <td className='py-2 px-4 border'>{data?.users?.houseName}</td>
              </tr>
              <tr>
                <td className='py-2 px-4 border'>Street</td>
                <td className='py-2 px-4 border'>{data?.users?.street}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
