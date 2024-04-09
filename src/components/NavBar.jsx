import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                    <div className="d-none d-lg-flex ms-2">
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-facebook-f text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-twitter text-primary"></small>
                            </a>
                            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                                <small className="fab fa-linkedin-in text-primary"></small>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small><a href=''><i className="fa fa-envelope text-primary me-2"></i>pujakarnpknv30@gmail.com</a></small>
                        <small className="ms-4"><a href='tel:9643632767'><i className="fa fa-phone text-primary me-2"></i>+91-9643632767</a></small>
                        <small className="ms-4"><a href='https://wa.me/9643632767' target='_blank'><i className="fa fa-whatsapp text-primary me-2"></i>9643632767</a></small>

                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="display-5 text-primary m-0">Ecommerce</h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>


                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Shivangi</Link>
                                <div className="dropdown-menu border-light m-0">
                                    <Link to="project.html" className="dropdown-item">Profile</Link>
                                    <Link to="feature.html" className="dropdown-item">Cart</Link>
                                    <Link to="team.html" className="dropdown-item">Checkout</Link>
                                    <Link to="testimonial.html" className="dropdown-item">Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}

        </>
    )
}

export default NavBar