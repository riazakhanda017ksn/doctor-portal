import React,{useEffect, useState} from 'react';

const AppointmentsByDate = ({selectDate}) => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/appointmentsByDate", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({date: selectDate.toDateString()})
        })
        .then(res => res.json())
        .then(data => {
            setAppointments(data)
        })
    }, [selectDate])
    return (
        <div>
         <h3>hello{appointments.length}</h3>
        </div>
    );
};

export default AppointmentsByDate;