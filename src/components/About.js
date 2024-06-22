import React from 'react';
const About = () => {
    return (
        <div className='about lh-1'>
            <h1 className='about-heading'>RAHUL KAR</h1>
            <p className='about-description '>+91-6290626683 <i class="bi bi-three-dots-vertical"></i> Kolkata, West Bengal, India</p>

            <div className='contact'>
                {/* <a href="mailto:rahulkar.996@gmail.com" className='m-2'><i class="bi bi-telephone-fill"></i> +91-6290626683</a>⋄ */}
                <a href="mailto:rahulkar.996@gmail.com" className='m-2'><i class="bi bi-envelope-fill"></i> <u>rahul-kar-gmail</u></a><i class="bi bi-three-dots-vertical"></i>
                <a href="https://www.linkedin.com/in/rahul-kar/" className='m-2'><i class="bi bi-linkedin"></i> <u>rahul-kar-linkedin</u></a><i class="bi bi-three-dots-vertical"></i>
                <a href="https://github.com/RAHUL-KAR-Kalyani" className='m-2'><i class="bi bi-github"></i> <u>rahul-kar-github</u></a>
            </div>
            
        </div>
    );
}

export default About;