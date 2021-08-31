import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-body mt-5 pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <br />
                        <p className="f-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Important Links</h5>
                        <br />
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                    <div className="col-md-2">
                        <h5>Featured Service</h5>
                        <br />
                        <li><Link >SEO Marketing</Link></li>
                        <li><Link >SEO Services</Link></li>
                        <li><Link >Services</Link></li>
                        <li><Link >Pay-Per-Click</Link></li>
                        <li><Link >Social Media</Link></li>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <br />
                        <h6>Phone</h6>
                        <p className="f-p">+8801881805720</p>
                        <h6>Email</h6>
                        <p className="f-p">ibrahimkhalilik748@gmail.com</p>
                        <h6>Phone</h6>
                        <p className="f-p">1313, Bhakurta, Savar, Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;