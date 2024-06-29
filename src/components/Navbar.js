import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid nav-banner">
                    {/* <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link smooth to="#about" className='nav-link p-3 text-center'>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="#education" className='nav-link p-3 text-center'>Education</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link smooth to="#skills" className='nav-link p-3 text-center'>Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="#experience" className='nav-link p-3 text-center'>Experience</Link>
                            </li>
                            <li class="nav-item">
                                <Link smooth to="#projects" className='nav-link p-3 text-center'>Projects</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link smooth to="#leadership" className='nav-link p-3 text-center'>Leadership</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;