import React from 'react';
import './Services.css'
import fluoride from '../../../images/001-dental.png'
import fluorideTooth from '../../../images/toothMession.png'
import fluorideMessin from '../../../images/tooth.png'
import ServicesItem from '../ServicesItem/ServicesItem';

const Services = () => {
    const servicesData=[
        {
            treatment:'Fluoride',
            img:fluoride
        },
        {
            treatment:'Fluoride',
            img:fluorideTooth
        },
        {
            treatment:'Fluoride',
            img:fluorideMessin
        }
    ]
    return (
        <section className="services-container">
          <div className="text-center customize-of-heading">
              <h6>Our Services</h6>
              <h1>Services We Provide</h1>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
          <div className="row w-75">
            {
                servicesData.map(service=><ServicesItem servicesItems={service}></ServicesItem>)
            }
          </div>
          </div>
        </section>
    );
};

export default Services;