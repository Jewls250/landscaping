import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light ml-auto">
                    <Link className="navbar-brand py-4" href="#"
                    ></Link>
                    <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                        <Link className="nav-link" href="#"
                            >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Review</Link>
                        </li>
                        <li>
                        <Link className="nav-link text-danger" href="tel:713-992-0916"
                            ><b>Phone Number</b></Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;