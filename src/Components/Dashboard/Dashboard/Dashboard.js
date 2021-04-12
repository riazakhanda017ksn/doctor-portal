import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppoinmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectDate,setSelectDate]=useState(new Date())
    const [appointments,setAppointments]=useState([])
    const handleDateChange=(date)=>{
       setSelectDate(date)
    }
    
    return (
     <section>
         <div className="container-style" className="container-fluid">
             <div className="row">
                 <div className="col-lg-2">
                     <Sidebar></Sidebar>
                 </div>
                 <div className="col-lg-5">
                 <Calendar
                            onChange={handleDateChange}
                            value={new Date()}/>
                 </div>
                 <div className="col-lg-5">
                     <AppointmentsByDate selectDate={selectDate}></AppointmentsByDate>
                 </div>
             </div>
         </div>
     </section>
    );
};

export default Dashboard;