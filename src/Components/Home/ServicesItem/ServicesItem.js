import React from 'react';
import './ServicesItem.css'
const ServicesItem = ({servicesItems}) => {
    return (
      <div className="col-lg-4">
          <div className="main-div-for-treatment-option text-center">
            <div className="img-div">
                <img src={servicesItems.img} alt=""/>
            </div>
            <div className="treatment-heading">
                <h5>{servicesItems.treatment}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi repellendus at consequuntur quos, dignissimos aliquam!</p>
            </div>
          </div>
      </div>
    );
};

export default ServicesItem;