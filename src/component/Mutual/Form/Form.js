import React from 'react';
import IMG from '../../images/analysis-image.png';
import './Form.css'

const Form = () => {
    return (
        <div className="form mt-5"><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <img className="img-fluid" src={IMG} alt="" />
                    </div>
                    <div className="col-md-6 align">
                        <h6>ANALYSIS</h6>
                        <h2>Get Free SEO Analysis</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <form>
                            <input type="name" name="name" placeholder="Your Name *" />
                            <input type="email" name="email" placeholder="Email *" />
                            <br />
                            <input type="phone" name="phone" placeholder="Phone *" /> 
                            <input type="link" name="link" placeholder="Website *" /> 
                            <br />
                            <button className="button">Sent Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;