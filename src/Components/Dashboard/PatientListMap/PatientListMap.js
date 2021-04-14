import React from 'react';
import './PatientListMap.css'
const PatientListMap = (props) => {
    const { option, email, number, date,_id } = props.appointmentList


    console.log('data', props.appointmentList);
    return (


        <tr className='apply-css-for-table'>
            
           
            <td>{_id}</td>
           
            <td>{option}</td>
            <td>{email}</td>
            <td>{number}</td>
            <td>{date}</td>
        </tr>

    );
};

export default PatientListMap;