import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppoinmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [appointments, setAppointments] = useState([])
    const [selectDate, setSelectDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectDate(date)
        console.log(date);
    }

    useEffect(() => {
        fetch('https://obscure-castle-99827.herokuapp.com/appointmentsByDate', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectDate, email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
        console.log('setAppointments', selectDate);

    }, [selectDate])

    return (
        <section>
            <div className="container-fluid container-style">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-4">
                        <div className="prescription">
                            <h4 className='py-3 ml-5'>Prescription</h4>
                            
                        </div>
                         <div>
                         <Calendar
                                onChange={handleDateChange}
                                value={new Date()} />
                         </div>
                    </div>
                    <div className="col-lg-5">
                        <AppointmentsByDate appointments={appointments} ></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;