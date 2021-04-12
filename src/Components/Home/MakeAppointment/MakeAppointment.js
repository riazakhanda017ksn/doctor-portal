import React from 'react';
import './MakeAppointment.css'
import mrdoctor from '../../../images/5790-removebg.png'
const MakeAppointment = () => {
    return (
        <section className='need-padding'>
        <div className="banner">
            <div className="container ">
              <div className="row">
              <div className="col-lg-5">
                    <div className="doctor-img">
                    <img src={mrdoctor} alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                 <div className="appointment-part">
                     <h6>APPOINTED</h6>
                     <h1>Make an Appointment <br/> Today</h1>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur earum deserunt eveniet at, enim molestias praesentium cupiditate quod doloribus rem?</p>

                     <button>Learn More</button>
                 </div>
                </div>
              </div>
            </div>
        </div>
        </section>
    );
};

export default MakeAppointment;