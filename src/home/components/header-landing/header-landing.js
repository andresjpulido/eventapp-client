import React from "react";
import { Link } from "react-router-dom";
import "./header-landing.css";
import logoh from "../../../assets/images/logoh.png";
import logoOff from "../../../assets/images/logoOff.svg";

export default function Headerlanding() {
  return (
    <div className="header-landing">
      <div className="header-landing-fistline">
        <div>Tesfe</div>
        <div>
          <span>
            <Link className="header-landing-link" to="/login">signIn </Link>
            or
            <Link className="header-landing-link" to="/signup"> signUp</Link>
          </span>
        </div>
      </div>

      <img src={logoh} alt="n" width="400px" />

      <div className="note-float"> 
      <img
              src={logoOff}
              alt="logo"
              style={{
                width: "50px",
                height: "50px"
              }}
            />esta jods</div>
    </div>
  );
}
