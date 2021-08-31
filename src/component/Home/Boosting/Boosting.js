import React from 'react';
import './Boosting.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RealTimeAnalytics from './Switch/RealTimeAnalytics';
import PayPerClick from './Switch/PayPerClick';
import OnlineMarketing from './Switch/OnlineMarketing';
import EmailMarketing from './Switch/EmailMarketing';
import SocialMarketing from './Switch/SocialMarketing';
import DigitalMarketing from './Switch/DigitalMarketing';


const Boosting = () => {
    return (
        <div className="boosting mt-5">
            <Router>
                <h6>BOOSTING</h6>
                <h1>Outstanding Digital Experience</h1>
                <div className="boxs">
                    <Link to="/RealTimeAnalytics" className="box one">
                        <h5>Real-Time-Analytics</h5>
                    </Link>
                    <Link to="/PayPerClick" className="box two">
                        <h5>Pay-Per-Click</h5>
                    </Link>
                    <Link to="/OnlineMarketing" className="box there">
                        <h5>Online Marketing</h5>
                    </Link>
                    <Link to="/EmailMarketing" className="box four">
                        <h5>Email Marketing</h5>
                    </Link>
                    <Link to="/SocialMarketing" className="box five">
                        <h5>Social Marketing</h5>
                    </Link>
                    <Link to="/DigitalMarketing" className="box six">
                        <h5>Digital Marketing</h5>
                    </Link>
                </div>
                <div className="big-box mt-4">
                    <Switch>
                        <Route exact path="/">
                            <RealTimeAnalytics></RealTimeAnalytics>
                        </Route>
                        <Route  path="/RealTimeAnalytics">
                            <RealTimeAnalytics />
                        </Route>
                        <Route  path="/PayPerClick">
                            <PayPerClick />
                        </Route>
                        <Route  path="/OnlineMarketing">
                            <OnlineMarketing />
                        </Route>
                        <Route  path="/EmailMarketing">
                            <EmailMarketing />
                        </Route>
                        <Route  path="/SocialMarketing">
                            <SocialMarketing />
                        </Route>
                        <Route  path="/DigitalMarketing">
                            <DigitalMarketing />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <br />
        </div>
    );
};

export default Boosting;