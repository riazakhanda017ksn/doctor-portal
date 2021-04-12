import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Testimonials.css'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import doctor1 from '../../../images/Ellipse 1.png'
import doctor2 from '../../../images/Ellipse 2.png'
import doctor3 from '../../../images/Ellipse 3.png'
import Testomonial from '../Testomonial/Testomonial';
const Testimonials = () => {
    const testimonials=[
        {
            describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nisi dolore repudiandae? Dolore libero praesentium nulla dolores odio reprehenderit delectus doloribus. Necessitatibus cum quam delectus assumenda debitis obcaecati consequatur dolores, totam nobis, harum exercitationem adipisci? Sit, exercitationem maxime.',
            name:'winson Herry',
            img:doctor1,
            employment:'colifornia'
        },
        {
            describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nisi dolore repudiandae? Dolore libero praesentium nulla dolores odio reprehenderit delectus doloribus. Necessitatibus cum quam delectus assumenda debitis obcaecati consequatur dolores, totam nobis, harum exercitationem adipisci? Sit, exercitationem maxime.',
            name:'Alexa',
            img:doctor2,
            employment:'Senior Doctor'
        },
        {
            describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nisi dolore repudiandae? Dolore libero praesentium nulla dolores odio reprehenderit delectus doloribus. Necessitatibus cum quam delectus assumenda debitis obcaecati consequatur dolores, totam nobis, harum exercitationem adipisci? Sit, exercitationem maxime.',
            name:'Ema Waston',
            img:doctor3,
            employment:'junior Doctor'
        }
        
    ]
    return (
        <div className="container need-space" >
            <div className="row">
                <div className="col-lg-12 ">
                   <div className="d-flex">
                   <div className="testimonials">
                        <h6>Testimonial</h6>
                        <h1>What Our Patients <br/> Says </h1>
                    </div>
                    <div className="comma-section">
                        <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />

                        </span>
                    </div>
                   </div>
                </div>
                
                <div className="row">
                    {
                     testimonials.map(testimonial=><Testomonial Testomonial={testimonial}></Testomonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;