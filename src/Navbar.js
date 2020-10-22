import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Navbar() {
  return (
    <nav className=" nav_bar    navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/students">
              <button className="btn">Students </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teachers">
              <button className="btn">Teachers</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
