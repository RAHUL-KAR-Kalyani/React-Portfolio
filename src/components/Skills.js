import React from 'react';

const Skills = () => {
    return (
        <div className="container-fluid skill mt-5">
            <div className="row">  
                <div className="col-12">
                <h5 className='fw-bold skill-heading'>skills</h5>
                    <hr className='line' />
                </div>
                <div className="col-12">
                    <div className='row'>                        
                        <div className='col-3 fw-bold skills ps-4'>Technical Skills</div>
                        <div className='col-9 skills'>HTML5, JavaScript, CSS3, Sass, React, Java, PHP, Oracle</div>
                        <div className='col-3 fw-bold skills ps-4'>Soft Skills</div>
                        <div className='col-9 skills'>Initiative, Team Collaboration, Time Management, Adaptability</div>
                        <div className='col-3 fw-bold skills ps-4'>Developer Tools</div>
                        <div className='col-9 skills'>VS Code, GitHub, Figma</div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Skills;