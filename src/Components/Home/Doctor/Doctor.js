import React from 'react';
import doctorOne from '../../../images/doctor_PNG15977.png'
import doctorTwo from '../../../images/doctor_PNG15990.png'
import doctorThree from '../../../images/doctor_PNG16040.png'
import Doctors from '../Doctors/Doctors';

import './Doctor.css'
const Doctor = () => {
    const doctors=[
      {
       name:"Dr Alexa",
       img:doctorOne,
       phone:'+000 999 456 1234'
    },
      {
       name:"Dr Jack",
       img:doctorTwo,
       phone:'+000 999 456 4321'
    },
      {
       name:"Dr Ema",
       img:doctorThree,
       phone:'+000 999 456 1234'
    }
]
    return (
        <div className='text-center Our-doctor'>
            <h6>Our Doctors</h6>
            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor=><Doctors doctorList={doctor}></Doctors>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctor;