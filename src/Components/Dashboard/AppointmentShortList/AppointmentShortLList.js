import React from 'react';
import PatientListMap from '../PatientListMap/PatientListMap';
import './AppointmentsShortList.css'

const AppointmentShortLList = ({appointments}) =>{
    
    return (
        <div >
        <h4 className='text-info py-4'> Patients</h4>

            <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><span>Patient Serial</span></th>
      <th scope="col"><span>Name</span></th>
      <th scope="col"><span>Phone</span></th>
      <th scope="col"><span>email</span></th>
      <th scope="col"><span>Booking Date </span></th>
    </tr>
  </thead>
  {
           appointments.map((appointment)=><PatientListMap appointmentList={appointment}></PatientListMap>)
       }
  <tbody>
 
   
    
  </tbody>
</table>
        </div>
    );
};

export default AppointmentShortLList;