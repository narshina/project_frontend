import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Viewaplcationdetail = () => {
    let { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Staff/applydetailuser/${id}`);
                console.log(response.data);
                // Convert the date format if it exists in data.application
                if (response.data.application && response.data.application.date) {
                    response.data.application.date = formatDate(response.data.application.date);
                }
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Format the date as needed (for example: YYYY-MM-DD)
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
    };

    return (
        <div className='w-screen h-[655px] text-[20px]'>
            <div className='flex justify-center w-screen h-[655px] bg-[#CCDAF6]'>
                <table className='text-black leading-[30px] mt-4 m-auto'>
                    <div className='text-center  underline mx-auto '><b>{data?.services?.service}</b></div>
                    <tbody>
                        {/* <tr>
                            <td><b>{data?.services?.service}</b></td>
                        </tr> */}
                        {Object.keys(data.application ?? {}).map((key) => {
                            // Check if the key is _id, serviceId, or userId and skip displaying them
                            if (key === '_id' || key === 'serviceId' || key === 'userId') {
                                return null;
                            }
                            // Display other keys and their values
                            return (
                                <tr key={key}>
                                    {key === 'finalDocument' ? (
                                        <td>
                                            <a download={true} href={`http://localhost:4000/download/${data.application[key]}`}>
                                                <button><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</a></button>
                                            </a>
                                        </td>
                                    ) : (
                                        <React.Fragment>
                                            <td>{key === 'applicationDate' ? 'Date: ' + formatDate(data.application[key]) : key}</td>
                                            <td>{key !== 'applicationDate' && data.application[key]}</td>
                                        </React.Fragment>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
