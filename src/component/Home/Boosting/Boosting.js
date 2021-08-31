import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../../images/1.jpg'
import './Boosting.css'

const Boosting = () => {
    return (
        <div className="boosting">
            <h6>BOOSTING</h6>
            <h1>Outstanding Digital Experience</h1>
            <div className="boxs">
                <div className="box one">
                    <h5>Real-Time-Analytics</h5>
                </div>
                <div className="box two">
                    <h5>Real-Time-Analytics</h5>
                </div>
                <div className="box there">
                    <h5>Real-Time-Analytics</h5>
                </div>
                <div className="box four">
                    <h5>Real-Time-Analytics</h5>
                </div>
                <div className="box five">
                    <h5>Real-Time-Analytics</h5>
                </div>
                <div className="box six">
                    <h5>Real-Time-Analytics</h5>
                </div>
            </div>
            <div className="big-box mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <img src={IMG} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6 second-box">
                        <h5>REAL-TIME ANALYTICS</h5>
                        <br />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <div className="row">
                            <div className="col-6">
                               <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</small></p>
                            </div>
                            <div className="col-6">
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</small></p>
                            </div>
                        </div>
                        <br />
                        <Link className="more">Discover More</Link>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Boosting;