import React from 'react';
import './Home.css'

const Home = () => (
    <div id="gradient">
        <header className="text-center">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="brand-heading">Austin Wagner</h1>
                            <p className="intro-text">Full-Stack Web Developer.</p>
                            <a href="#about" className="btn btn-circle js-scroll-trigger">
                                <i className="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
);

export default Home;


