import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a
                href="https://www.linkedin.com/in/piyush-prajapati-b68181259/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Piyush0503"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://instagram.com/piyush_5.7?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100055226211528&mibextid=2JQ9oc"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Piyush</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer",
                    1000,
                    "Programmer",
                    1000,
                    "Web Developer",
                    1000,
                    "Problem Solver",
                    1000,
                    "NetWorking",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                A driven and passionate individual eager to enhance my skills
                and broaden my career horizons.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="https:/#">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
