import React from 'react';
import './AppointmentHeader.css'
import img1 from '../../../images/Mask-Group-1.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div>
            <main className="row d-flex align-items-center justify-content-center" style={{ height: "600px" }}>
                <div className="col-lg-4 col-lg-offset-1">
                    <div className="bannerImages-heading">
                        <h1>Appointment </h1>

                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />

                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={img1} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;