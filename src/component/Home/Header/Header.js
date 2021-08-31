import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/main-image.png'
import logo from '../../images/unnamed.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 text-start ">
                    <h1 className="head-text">Digital Agency with Excellence Service</h1>
                    <p style={{color: 'gray'}} className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                    <Link className="first-btn">More About Us</Link>
                    <Link className="second-btn">Watch Video <img src={logo} alt="" /></Link>
                </div>
                <div className="col-md-6">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <h1 className="blank-header">SEO</h1>
            </div>
            
        </div>
    );
};

export default Header;