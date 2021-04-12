import React from 'react';
import Blog from '../Blog/Blog';
import BussinessInfo from '../BusinessInfo/BussinessInfo';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeatureServices from '../FeatureServices/FeatureServices';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BussinessInfo></BussinessInfo>
            <Services></Services>
            <FeatureServices></FeatureServices>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;