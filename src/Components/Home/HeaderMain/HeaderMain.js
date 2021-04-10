import React from 'react';
import img1 from '../../../images/Mask-Group-1.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div>
            <main className="row d-flex align-items-center justify-content-center" style={{height:"600px"}}>
             <div className="col-lg-4 col-lg-offset-1">
                 <div className="bannerImages-heading">
                     <h1 >Your New Smile <br/>
                     Start Here</h1>
                     <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Tempore accusantium aspernatur reprehenderit labore,
                           officia quia.</p>

                           <button className='btn btn-primary'>GET APPOINTMENT</button>
                 </div>
             </div>
             <div className="col-lg-6">
                <img src={img1} alt="" className="img-fluid"/>
             </div>
            </main>
        </div>
    );
};

export default HeaderMain;