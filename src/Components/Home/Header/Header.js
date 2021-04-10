import React from 'react';
import BussinessInfo from '../BusinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BussinessInfo></BussinessInfo>
            <Services></Services>
        </div>
    );
};

export default Header;