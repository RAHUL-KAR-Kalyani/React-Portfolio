import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='d-flex flex-row list-inline'>
                    <li><Link to="/about" className='p-3 text-center'>About</Link></li>
                    <li><Link to="/education" className='p-3 text-center'>Education</Link></li>
                    <li><Link to="/skills" className='p-3 text-center'>Skills</Link></li>
                    <li><Link to="/experience" className='p-3 text-center'>Experience</Link></li>
                    <li><Link to="/projects" className='p-3 text-center'>Projects</Link></li>
                    <li><Link to="/leadership" className='p-3 text-center'>Leadership</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;