import React from 'react';
import './Testomonial.css'
const Testomonial = (props) => {
    const {describe, name,img,employment}=props.Testomonial
    return (
        <div className='col-lg-4 mt-3'>
            <div className="cards-container mt-5 mb-5">
              <div className="card-text">
              <p>{describe}</p>
              <div className="flex-container">
              <div className="doctor-images">
                  <img src={img} alt=""/>
              </div>
              <div className="doctor-information">
              <h6>{name}</h6>
              <span>{employment}</span>
              </div>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Testomonial;