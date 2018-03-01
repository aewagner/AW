import React from 'react';
import './Home.css'

const Home = () => (
    <div>

        <div className="container text-center">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="brand-heading-home">Austin Wagner</h1>
                    <p className="intro-text">Full-Stack Web Developer.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mx-auto">
                    <div className="container-fluid">
                        <div className="links">
                            <div className="row">
                                <div className="col-lg-4">
                                    <a href="https://github.com/aewagner" target="new">
                                        <img src="images/github.svg" alt="GitHub" className="img-links img-fluid"></img>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="https://www.linkedin.com/in/austinewagner/" target="new">
                                        <img src="images/linkedin.svg" alt="linkedIn" className="img-links img-fluid" id="img-linkedin"></img>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="mailto:austin.e.wagner@gmail.com" target="new">
                                        <img src="images/email2.svg" alt="email" className="img-links img-fluid"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default Home;


