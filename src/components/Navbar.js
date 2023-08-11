import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary ">
                <div className="container-fluid ">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler mx-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbarnew" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-light " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light " aria-current="page" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light " to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light " href="https://www.datumdecipher.com/">Main Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );

}
export default Navbar;