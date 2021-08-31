import React from 'react';
import Example from '../Mutual/Example/Example';
import Help from '../Mutual/Help/Help';
import Boosting from './Boosting/Boosting';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="home" >
            <Header></Header>
            <Example></Example>
            <Help></Help>
            <Boosting></Boosting>
        </div>
    );
};

export default Home;