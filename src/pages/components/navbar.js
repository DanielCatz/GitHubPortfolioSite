import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark mb-4"
        style={{ padding: "0px" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Daniel Caterson
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/daniel-caterson-8243583a/"
                >
                  LinkedIn
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://github.com/DanielCatz">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
