import React, { useState } from 'react'
import Step2Interview from '../component/Step2Interview';
import Step3Report from '../component/Step3Report';
import Step1Setup from '../component/Step1Setup';

const InterviewPage = () => {
    const [step, setStep] = useState(1);
    const [interviewData, setInterviewData] = useState(null);

  return (
    <div className='min-h-screen bg-gray-50'>
      {step === 1 && <Step1Setup onStart={(data) => {
            setInterviewData(data)
            setStep(2)
        }}/>}
      {step === 2 && <Step2Interview interviewData={interviewData} onFinish={(report) => {
        setInterviewData(report)
        setStep(3)
      }} />
      }
      {
        step === 3 && <Step3Report />
      }
    </div>
  )
}

export default InterviewPage
