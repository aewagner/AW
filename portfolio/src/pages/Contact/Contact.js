import React from 'react';
import './Contact.css'

const Contact = () => (
    <div id="gradient" className="text-center">
        <header className="text-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="brand-heading">Contact Me</h1>
                        <p>
                            (626) 386-3960
                        </p>

                        <a href="mailto:austin.e.wagner@gmail.com" target="new">
                            <p className="email-link">austin.e.wagner@gmail.com </p>
                        </a>


                    </div>
                </div>
            </div>

        </header>
        <div className="row">
            <div className="col-lg-4 mx-auto">
                <div className="container-fluid">
                    <div className="links">
                        <div className="row">
                            <div className="col-lg-3">
                                <a href="https://github.com/aewagner" target="new">
                                    <img src="images/github.svg" alt="GitHub" className="img-links img-fluid"></img>
                                </a>
                            </div>
                            <div className="col-lg-3">
                                <a href="https://www.linkedin.com/in/austinewagner/" target="new">
                                    <img src="images/linkedin.svg" alt="linkedIn" className="img-links img-fluid" id="img-linkedin"></img>
                                </a>
                            </div>
                            <div className="col-lg-3">
                                <a href="https://angel.co/aewagner" target="new">
                                    <img src="images/angellist-black.svg" alt="AngelList" className="img-links img-fluid"></img>
                                </a>
                            </div>
                            <div className="col-lg-3 email-icon">
                                <a href="mailto:austin.e.wagner@gmail.com" target="new">
                                    <img src="images/email.svg" alt="email" className="img-links img-fluid"></img>
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
