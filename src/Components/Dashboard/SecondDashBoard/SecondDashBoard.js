import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppoinmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import './SecondDashBoard.css'
import AppointmentShortLList from '../AppointmentShortList/AppointmentShortLList';


const SecondDashBoard = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('https://obscure-castle-99827.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [0])

    return (
        <section>
            <div className="container-fluid container-style">
                <div className="row">
                    <div className="col-lg-3 col-md-12 ">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <AppointmentShortLList appointments={appointments}></AppointmentShortLList>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondDashBoard;