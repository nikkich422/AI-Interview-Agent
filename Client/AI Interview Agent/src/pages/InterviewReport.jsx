import React, { useEffect, useState } from 'react'
import { ServerUrl } from '../App';
import Step3Report from '../component/Step3Report';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InterviewReport = () => {
  const [report, setReport] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const fetchRoport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, {
          withCredentials: true,
        })

        console.log(result.data);
        setReport(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRoport();
  }, []);

  if(!report){
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-500 text-lg'>
          Loading Report...
        </p>
      </div>
    )
  }

  return <Step3Report report={report} />;
}

export default InterviewReport;