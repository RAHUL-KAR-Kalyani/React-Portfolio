import React from 'react';

const Education = () => {
    return (        
        <div className="container-fluid education mt-5">
            <div className="row">  
                <div className="col-12">
                    <h5 className='fw-bold education-heading'>education</h5>
                    <hr className='line' />
                </div>
                <div className="col-12">
                    <div className='row'>
                        <div className='col-10 educations ps-4'><span className='fw-bold'>Master of Computer Applications, </span><span>Brainware University</span></div>
                        <div className='col-2 text-end educations pe-4'><span>2018 - 2021</span></div>
                        {/* <div className='col-12'><span>Relevant Coursework: Advance Diploma in Software Technologies (2013 - 2015)</span></div> */}
                    </div>
                    <div className='row'>                        
                        <div className='col-10 mt-2 educations ps-4'><span className='fw-bold'>Bachelor of Commerce, </span><span>University of Kalyani</span></div>
                        <div className='col-2 text-end educations pe-4'><span>2018 - 2021</span></div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Education;
