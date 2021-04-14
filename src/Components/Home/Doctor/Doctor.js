import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

import './Doctor.css'
const Doctor = () => {
//     const doctors=[
//       {
//        name:"Dr Alexa",
//        img:doctorOne,
//        phone:'+000 999 456 1234'
//     },
//       {
//        name:"Dr Jack",
//        img:doctorTwo,
//        phone:'+000 999 456 4321'
//     },
//       {
//        name:"Dr Ema",
//        img:doctorThree,
//        phone:'+000 999 456 1234'
//     }
// ]
const[doctors,setDoctor]=useState([])
useEffect(()=>{
    fetch('https://obscure-castle-99827.herokuapp.com/doctors')
    .then(res=>res.json())
    .then(data=>setDoctor(data))
},[0])
    return (
        <div className='text-center Our-doctor'>
            <h6>Our Doctors</h6>
            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor=><Doctors doctor={doctor}></Doctors>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctor;