import React from 'react';
import './Contact.css'

const Contact = () => (
    <div id="gradient">
        <header className="text-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="brand-heading">Contact Me</h1>
                        <p>
                            (626) 386-3960
                        </p>
                        <p>
                            austin.e.wagner@gmail.com
                        </p>

                    </div>
                </div>
            </div>

        </header>
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
);

export default Contact;
