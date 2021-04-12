import React, { useState } from 'react';
import LogIn from '../../LogIn/LogIn';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({bookingData,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className='col-lg-4 '>
            <div className="card-container-rules">
                <div className="card-container-header-and-description">
                    <h5>{bookingData. subject}</h5>
                    <h6>{bookingData.visitingHour}</h6>
                    <p>{bookingData.totalSpace} SPACE AVAILABLE</p>
               
                    <button onClick={openModal}>BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} AppointmentOn={bookingData.subject} date={date} closeModal={closeModal}></AppointmentForm>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingCard;