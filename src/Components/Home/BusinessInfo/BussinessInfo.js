import React from 'react';
import {faClock,faMapMarker,faPhone} from '@fortawesome/free-solid-svg-icons'
import InfoCardData from '../InfoCardData/InfoCardData';

const BussinessInfo = () => {
    const infosData=[
        {
            title:"Opening Hours",
            description:"Lorem ipsum dolor sit  amet .",
            icon:faClock,
            bg:'primary'
            
        },
        {
            title:"Visit Our Location",
            description:'Brooklyn.NY10036,United States',
            icon:faMapMarker,
            bg:'dark'
        },
        {
            title:"Contact us now",
            description:"000 967 757767",
            icon:faPhone,
            bg:'primary'
            
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infosData.map(infoData=><InfoCardData infoDataItem={infoData}></InfoCardData>)
            }
        </div>
        </section>
    );
};

export default BussinessInfo;