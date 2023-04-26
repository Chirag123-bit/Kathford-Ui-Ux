import React from 'react'
import "./nav.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">Mi<span className='highlighted'>Casa</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav m-auto">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Featured</a>
                        <a className="nav-link" href="#">Packages</a>
                        <a className="nav-link">Contact Us</a>
                    </div>

                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar