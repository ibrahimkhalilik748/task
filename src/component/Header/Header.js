import React from 'react';
import img from '../images/faq.png'
import logo from '../images/unnamed.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container mt-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 text-start ">
                    <h1 className="fw-bold fs-1 ">Don't worry. <br /> We Are Here For <br /> every solution</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline-primary"><img src={logo} alt="" /> Watch Video</button>
                </div>
                <div className="col-md-6">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;