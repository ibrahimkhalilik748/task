import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../../../images/4.jpg';

const EmailMarketing = () => {
    return (
        <div className="row">
            <div className="col-md-5">
                <img src={IMG} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 second-box">
                <h5>EMAIL MARKETTING</h5>
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
    );
};

export default EmailMarketing;