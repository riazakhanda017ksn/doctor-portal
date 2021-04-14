import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Doctors.css'
const Doctors = ({doctor}) => {
    // const{name,img,number}=props.doctorInformation
    // console.log(img);
    return (
        <div className="col-lg-4">
        <div className="doctor-container">
        <div className="doctor-image">
          {doctor.image? <img src={`data:image/png;base64,${doctor.image.img}`}/>:
            <img src={`https://obscure-castle-99827.herokuapp.com/${doctor.img}`} alt=""/>
            
          }
        </div>
        <div className="doctor-contact">
            <h6>{doctor.name}</h6>
            <p> <span className='mr-3'><FontAwesomeIcon icon={faPhone} /></span>{doctor.number}</p>
        </div>
        </div>
        </div>
    );
};

export default Doctors;