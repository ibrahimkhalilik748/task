import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'

const Features = () => {
    return (
        <div className="features mt-5">
            <div className="row">
                <div className="col-md-5 text">
                    <h6>CARE FEATURES</h6>
                    <h2 style={{ color: '#202647' }}>Create Awesome Service With Our Tools</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <br />
                    <Link className="more">More Details</Link>
                </div>
                <div className="col-md-7">
                    <div className="boxes">
                        <div className="first-box m-0 p-0 d-flex">
                            <div style={{backgroundColor:'#f1eff8'}} className="box-s">
                                <h5>Seo Consultancy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div style={{backgroundColor: '#fbe6d4'}} className="box-s mt-4">
                                <h5>Seo Consultancy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="second-box m-0 p-0 d-flex">
                            <div style={{backgroundColor: '#f0fffc'}} className="box-s">
                                <h5>Seo Consultancy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div style={{backgroundColor: '#f8e1eb'}} className="box-s mt-4">
                                <h5>Seo Consultancy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;