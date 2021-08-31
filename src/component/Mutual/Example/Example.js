import React from 'react';
import example from '../../images/about-image.png';
import './Example.css'


const Example = () => {
    return (
        <div className="example">
            <div className="row">
                <div className="col-md-6">
                    <img src={example} />
                </div>
                <div className="col-md-6 text">
                    <h6>ABOUT US</h6>
                    <h2 style={{ color: '#202647' }}>We are Dynamic Team of SEO Agency</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="color">1,165<span style={{ color: '#FF724E', fontSize: 50 }}>+</span></h3>
                            <p>Project Completed</p>
                        </div>
                        <div className="col-6">
                            <h3 className="color">2,665<span style={{ color: '#FF724E', fontSize: 50 }}>+</span></h3>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;