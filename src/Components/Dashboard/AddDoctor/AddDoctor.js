import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info,setInfo]=useState({})
    const [file,setFile]=useState(null)
    const handleBlur=e=>{
        const newInfo={...info}
        newInfo[e.target.name]=e.target.value
        setInfo(newInfo)
    }

    const handleFileChange =(e)=>{
        const newInfo=e.target.files[0]
        setFile(newInfo)
    }

    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email )
        formData.append('number', info.number )
      
        fetch('https://obscure-castle-99827.herokuapp.com/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9">
                    <h5>add Doctor </h5>
                    <form onSubmit={handleSubmit} >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input  onBlur={handleBlur}   type="email" class="form-control" placeholder='Email' name='email'/>
                                
                                </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Mobile Number</label>
                            <input  onBlur={handleBlur}   type="number" class="form-control" placeholder='Number' name='number'/>
                                
                                </div>

                               

                            <div class="mb-3">
                                <label for="exampleInputPassword1"  class="form-label" >Name</label>
                                <input onBlur={handleBlur} placeholder='Name' name='name' type="name" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Upload An Image</label>
                                <input onChange={handleFileChange} type="file"  class="form-control" id="exampleInputPassword1" placeholder='Upload an image'/>
                                    </div>
                                
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                  </form>
                            </div>
                        </div>
        </div>
    );
};

export default AddDoctor;