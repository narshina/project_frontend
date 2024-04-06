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
        <div className='w-screen h-[655px]'>
            <div className='flex justify-center w-screen h-[655px] bg-[#CCDAF6]'>
                <div className='text-black leading-[30px] mt-4 '>
                    <div className='text-[20px] underline'><b>{data?.services?.service}</b></div>
                    {Object.keys(data.application ?? {}).map((key) => {
                        // Check if the key is _id, serviceId, or userId and skip displaying them
                        if (key === '_id' || key === 'serviceId' || key === 'userId') {
                            return null;
                        }
                        // Display other keys and their values
                        return (
                            <div key={key}>
                                {key === 'finalDocument' ? (
                                    <a download={true} href={`http://localhost:4000/download/${data.application[key]}`}>
                                        <div className='text-center'> <button className='bg-[#0F3053] text-white w-28 rounded-xl h-10'>Download</button> </div>
                                    </a>
                                ) : (
                                    <label>
                                        {key === 'applicationDate' ? 'Date: ' + formatDate(data.application[key]) : `${key}: ${data.application[key]}`}

                                    </label>
        
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
