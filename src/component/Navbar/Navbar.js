import React from 'react';
import Logo from '../images/icon-logo-png-11.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light pt-3">
                <div class="container-fluid">
                    <a class="navbar-brand ancor" href="#"><img src={Logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item"><a className="" href="#">Integration</a></li>
                            <li class="nav-item"><a className="" href="#">Pricing</a></li>
                            <li class="nav-item"><a className="" href="#">Blog</a></li>
                            <li class="nav-item"><a className="" href="#">About US</a></li>
                        </ul>
                        <button className="btn btn-outline-primary fw-bold rounded-pill">Get Early Access</button>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;