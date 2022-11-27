import React from "react";
import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/styles/pages/Landing.scss";

function Landing() {
  return (
    <React.Fragment>
      <div className="hero flex">
        <div className="container med">
          <div className="text-center icon-huge">
            <FaLanguage />
          </div>
          <h1 className="text-center logo-text">OpenLingvo</h1>
          <p className="text-center">
            <Link to="/language">
              <button className="btn primary">Select Your Language</button>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
