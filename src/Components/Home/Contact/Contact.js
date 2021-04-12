import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
  <section className='background-section'>
   <div className="container">
       <div className="row d-flex justify-content-center ">

           <div className="col-lg-8">
               <div className="contact-section">
                   <div className="contact-heading py-4 text-center">
                       <h6>Contact Us</h6>
                       <h2>Always Connect With Us</h2>
                   </div>
                  <div className="form-section text-center">
                  <form action="">
                    <input type="email" name="" id="" placeholder='Email Address * '/><br/>
                    <input type="text" name="" id="" placeholder='Subject* '/> <br/>
                    <textarea name="" id="" cols="6" rows="4" placeholder='Message *'></textarea><br/>
                    <input type="submit" className='extra-edit' value="Send Message"/>
                   </form>
                  </div>
               </div>
           </div>
       </div>
   </div>
  </section>
    );
};

export default Contact;