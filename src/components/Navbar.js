import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon-96x96.png'

const Navbar = (prop) => {
    return (
        <nav className={`navbar navbar-expand-lg bg-${prop.mode} navbar-${prop.mode}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">{prop.title}</a> */}

                <Link className="navbar-brand " to="/">
                    <img src={Logo} alt="Logo" width="30" height="28" className="d-inline-block align-text-top" />
                    {prop.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{prop.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" style={{ height: '30px', width: '30px' }} onClick={() => {prop.toggleMode('primary')}}></div>
                        <div className="bg-success rounded mx-2" style={{ height: '30px', width: '30px' }} onClick={() => {prop.toggleMode('success')}}></div>
                        <div className="bg-danger rounded mx-2" style={{ height: '30px', width: '30px' }} onClick={() => {prop.toggleMode('danger')}}></div>
                        <div className="bg-warning rounded mx-2" style={{ height: '30px', width: '30px' }} onClick={() => {prop.toggleMode('warning')}}></div>
                    </div> */}
   
                    <div className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode} />
                        <label className={`form-check-label text-${prop.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;




Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}