import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    useEffect(() => {
        const navBar = document.querySelectorAll('.nav-link');
        const navCollapse = document.querySelector('.navbar-collapse.collapse');
        
        const handleNavLinkClick = () => {
            navCollapse.classList.remove('show');
        };

        navBar.forEach(a => a.addEventListener('click', handleNavLinkClick));

        // Cleanup function to remove event listeners
        return () => {
            navBar.forEach(a => a.removeEventListener('click', handleNavLinkClick));
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid nav-banner">
                    <a className="navbar-brand text-white fs-3 text-center" href="#">Rahul Kar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link smooth to="#about" className="nav-link p-3 text-center">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#education" className="nav-link p-3 text-center">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#skills" className="nav-link p-3 text-center">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#experience" className="nav-link p-3 text-center">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#projects" className="nav-link p-3 text-center">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth to="#leadership" className="nav-link p-3 text-center">Leadership</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
