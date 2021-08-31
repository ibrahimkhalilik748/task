import React from 'react';
import Example from '../Mutual/Example/Example';
import Form from '../Mutual/Form/Form';
import Help from '../Mutual/Help/Help';
import Boosting from './Boosting/Boosting';
import Features from './Features/Features';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="home" >
            <Header></Header>
            <Features></Features>
            <Example></Example>
            <Help></Help>
            <Boosting></Boosting>
            <Form></Form>
        </div>
    );
};

export default Home;