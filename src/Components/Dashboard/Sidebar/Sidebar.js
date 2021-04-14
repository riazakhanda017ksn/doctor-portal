import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faGripHorizontal, faPrescription, faSignOutAlt, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [isDoctor,setIsDoctor]=useState('false')
    useEffect(()=>{
        fetch('https://obscure-castle-99827.herokuapp.com/isDoctor',{
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify({email: loggedInUser.email})      
    })
    .then(res=>res.json())
    .then(data=>setIsDoctor(data))
    },[])
    
    
    return (
        <div className='sidebar-background-section'>
            <div className="side-bar-list pt-5">
                <ul>
                    <li>
                        <Link to='/dashboard'>
                           
                           <span className='mr-3'><FontAwesomeIcon icon={faGripHorizontal} /></span>
                            Dashboard

                        </Link>
                    </li>
                  
                   {
                       isDoctor && 
                       <div>
                            <li>
                        <Link to='/appointment'>
                           
                        <span className='mr-3'><FontAwesomeIcon icon={faCalendar} /></span>
                        Appointment
                        </Link>
                    </li>
                  
                    <li>
                        <Link to='/secondDashBoard/appointment'>
                           
                        <span className='mr-3'><FontAwesomeIcon icon={faUsers} /></span>
                        Patients
                        </Link>
                    </li>
                  
                    <li>
                        <Link>
                           
                        <span className='mr-3'><FontAwesomeIcon icon={faPrescription} /></span>
                        Prescription
                        
                        </Link>
                    </li>
                    <li>
                        <Link>
                           
                        <span className='mr-3'><FontAwesomeIcon icon={faUserAlt}/></span>
                         Add Doctor
                        
                        </Link>
                    </li>
                    <li>
                        <Link>
                           
                        <span className='mr-3'><FontAwesomeIcon icon={faCog} /></span>
                        Setting
                        
                        </Link>
                    </li>
                       </div>
                   }
                  
                </ul>
                <Link to='/home'><div className="logout mt-5">
                <span className='mr-2'><FontAwesomeIcon icon={faSignOutAlt} /></span>
                <p>Log Out</p>
                </div></Link>
            </div>
        </div>
    );
};

export default Sidebar;