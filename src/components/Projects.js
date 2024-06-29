import React from 'react';

const Projects = () => {
    return (
        <div className="container-fluid projects mt-5 pt-5" id='projects'>
            <div className="row pt-5">
                <div className="col-12">
                    <h5 className='fw-bold projects-heading'>projects</h5>
                    <hr className='line' />
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-12 ps-4'><p className='fw-bold text-start'>Restaurant Website — HTML5, CSS, JavaScript, Angular</p></div>
                        <div className='col-12 ps-4'>
                            <ul>
                                <li>Effortless booking experience available both online and offline.</li>
                                <li>Ensure secure payments facilitated through Razorpay.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 ps-4'><p className='fw-bold text-start'>Tour Management System — HTML5, CSS, JavaScript, PHP, MySQL</p></div>
                        <div className='col-12 ps-4'>
                            <ul>
                                <li>Seamless booking process designed for all age groups.</li>
                                <li>Guarantee secure payments via Paytm.</li>
                            </ul>
                        </div>                        
                    </div>
                    <div className='row'>
                        <div className='col-12 ps-4'><p className='fw-bold text-start'>Online Book Store — HTML5, CSS, JavaScript, PHP, MySQL</p></div>
                        <div className='col-12 ps-4'>
                            <ul>
                                <li>Facilitate a seamless booking experience, accessible both online and offline</li>
                                <li>Ensure payment security through Razorpay.</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;