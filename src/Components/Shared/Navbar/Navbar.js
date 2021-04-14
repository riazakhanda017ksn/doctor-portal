import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto-menu">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to='/dashboard'>Dashboard</Link>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="#">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;