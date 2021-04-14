import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-40%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, AppointmentOn,date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service=AppointmentOn
        data.date = date;
        data.created = new Date();
        fetch('https://obscure-castle-99827.herokuapp.com/addAppointment',{
            method:"POST",
            headers:{'content-type' :'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
            closeModal()
            alert('database successfully')

            }
        })
        
    }


    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-center'>{AppointmentOn}</h2>
                <p className="text-secondary text-center mt-3"><small>On {date.toDateString()}</small></p>
                <span className='close' onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
                <div className="form-section-for-choose-doctor">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        
                        
                        <select class="form-select" name="selectionDoctor" defaultValue="test" {...register("selectionDoctor")} aria-label="Default select example">
                            <option >Select Doctor</option>
                            <option > Dr.Alexa</option>
                            <option >Dr.Ema Watson</option>
                            <option >Dr.marlo</option>

                        </select>

                          <div>
                          <input type='text' name='option' placeholder='Your Name' className='form-control mt-3' {...register("option", { required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <input type="number"  name='number' placeholder='Your Number' className='form-control mt-3' {...register("number", { required: true })} />
                        {errors.number && <span>This field is required</span>}

                        <input type="email" name='email'  placeholder='Email' className='form-control mt-3' {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}

                        <input type="date" name='date' className='form-control mt-3' {...register("date", { required: true })} />
                        {errors.date && <span className="text-danger">This field is required</span>}
                          </div>
                         <textarea name="problem" id="" cols="6" rows="6"   className='form-control mt-3' {...register("problem", { required: true })}></textarea>
                        <div className="button-div mt-3">
                        <button className=' btn btn-outline-info'>Send</button>
                        </div>
                    
                         
                    </form>
                </div>
            </Modal>

        </div>
    );
};

export default AppointmentForm;