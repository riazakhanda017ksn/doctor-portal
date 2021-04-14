import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppointmentsByDate.css'
const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            <h2 className='text-info py-3 borderItem'>Patient Information</h2>


            {
                appointments.length ?<div className="div">
                <div className='name'>
                    <h6>Name</h6>
                    {
                        appointments.map(app => <li key={app._id}>{app.option}</li>)
                    }
                </div>
                <div className='email'>
    
                    <h6>Email</h6>
                    {
                        appointments.map(app => <li key={app._id}>{app.email}</li>)
                    }
                </div>
                <div className='email'>
    
                    <h6>Action</h6>
                    {
                        appointments.map(app => <li key={app._id}>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Not Visited <FontAwesomeIcon icon={faArrowDown} />
                            </button>
    
                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h6>Action</h6>
                                            {
                                                appointments.map(app => <p key={app._id}>{app.problem}</p>)
                                            }
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-outline-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div></li>)
                    }
                </div>
            </div> :
            <div>
                <h4 className='text-danger text-transform mt-5'>No Appointments For This Date</h4>
            </div>
            }
        </div>
    );
};

export default AppointmentsByDate;