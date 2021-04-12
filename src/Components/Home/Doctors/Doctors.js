import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Doctors.css'
const Doctors = (props) => {
    const{name,img,phone}=props.doctorList
    return (
        <div className="col-lg-4">
        <div className="doctor-container">
        <div className="doctor-image">
            <img src={img} alt=""/>
        </div>
        <div className="doctor-contact">
            <h6>{name}</h6>
            <p> <span className='mr-3'><FontAwesomeIcon icon={faPhone} /></span>     {phone}</p>
        </div>
        </div>
        </div>
    );
};

export default Doctors;