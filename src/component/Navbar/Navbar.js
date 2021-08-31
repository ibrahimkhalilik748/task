import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import search from '../images/6346782.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar bg-light">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home"><img src={Logo} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto d-flex align-items-center">
                            <li class="nav-item"><Link to="/home">Home</Link></li>
                            <li class="nav-item"><Link to="/about">About us</Link></li>
                            <li class="nav-item"><Link to="/services">Services</Link></li>
                            <li class="nav-item"><Link to="/projects">Projects</Link></li>
                            <li class="nav-item"><Link to="/blog">Blog</Link></li>
                            <li class="nav-item"><Link to="/pages">Pages</Link></li>
                            <li class="nav-item"><Link to="/contact">Contact</Link></li>
                        </ul>
                        <form class="search">
                            <input class="" type="search" placeholder="Search" aria-label="Search" />
                            <img className="icon" src={search} alt="" />

                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;