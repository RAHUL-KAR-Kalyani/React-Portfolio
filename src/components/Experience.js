import React from 'react';

const Experience = () => {
    return (
        <div className="container-fluid experience mt-5 pt-5" id='experience'>
            <div className="row pt-5">
                <div className="col-12">
                    <h5 className='fw-bold experience-heading'>experience</h5>
                    <hr className='line' />
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-9 experiences ps-4'><span className='fw-bold text-start'>Customer Support Executive at Meesho</span></div>
                        <div className='col-3 text-end experiences pe-4'><span>Feb 2023 - Nov 2023</span></div>
                        <div className='col-9 experiences ps-4'><span className=''>Fusion Bpo Services</span></div>
                        <div className='col-3 text-end experiences pe-4'><span>Remote - India</span></div>                        
                        <div className='col-12 experiences ps-4'>
                            <ul>
                                <li>Interact with customers through chat to address their inquiries, concerns, and requests.</li>
                                <li>Deliver precise and timely information to ensure a positive and satisfying customer experience</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-9 experiences ps-4'><span className='fw-bold text-start'>Frontend Developer - Intern</span></div>
                        <div className='col-3 text-end experiences pe-4'><span>July 2021 - Jan 2022</span></div>
                        <div className='col-9 experiences ps-4'><span className=''>Kashmiri Geeks Pvt. Ltd.</span></div>
                        <div className='col-3 text-end experiences pe-4'><span>Remote - India</span></div>                        
                        <div className='col-12 experiences ps-4'>
                            <ul>
                                <li>Engaged in code development and front-end tasks, including planning and testing activities.</li>
                                <li>Collaborated closely with documentation and project analysis teams, actively coding and contributing diligently
                                to projects throughout the development process</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
