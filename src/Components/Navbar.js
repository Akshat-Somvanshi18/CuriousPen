import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";

export default function Navbar(props) {

  let navigate = useNavigate();

  // --------------LOG OUT FUNCTION--------------------
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      localStorage.setItem("alertMsg","You have been successfully logged out!");
      props.setAlertMsg("You have been successfully logged out!");
      localStorage.setItem("alertColor","lightgreen");
      props.setAlertColor("lightgreen");
      navigate("/Login");
    });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-light shadow"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <Link to="/">
            <img src="./Logo.png" alt="..." id="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link fw-bold home-btn" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold read-btn"
                  aria-current="page"
                  to="/BlogHome"
                  data-toggle="collapse" 
                >
                  Read-Blogs
                </Link>
              </li>

              <li className="nav-item">
                {!props.authenticated ? (
                  <Link className="nav-link fw-bold create-btn" to="/Login">
                    Create-New-Blog
                  </Link>
                ) : (
                  <Link className="nav-link fw-bold create-btn" to="/CreateBlog">
                    Create-New-Blog
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.authenticated ? (
                  <Link className="nav-link fw-bold log-btn" onClick={signUserOut}>
                    Log Out
                  </Link>
                ) : (
                  <Link className="nav-link fw-bold log-btn" to="/Login">
                    Log In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
