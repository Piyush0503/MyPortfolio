// import React, { useEffect } from "react";
import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "A dynamic and ambitious individual driven by a passion for personal and professional development. I am actively seeking a role within an organization that values growth, offers challenging responsibilities, and promotes a culture of mutual respect. I am excited to contribute my skills and dedication to a team that nurtures continuous learning and advancement.",
    highlights: {
      bullets: ["React Js", "Web Development", "Networks", "OOPs", "MySQL"],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  // const handleGetResumeClick = () => {
  //   window.location.href = "/assets/Resume/piyush_resume.pdf";
  // };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-desc">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>

              <a
                href="../assets/Resume/piyush_resume.pdf"
                download="piyush_resume.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>

              {/* <a href="https:/#">
                <button
                  className="btn highlighted-btn"
                  href="../assets/Resume/piyush_resume.pdf"
                  download="piyush_resume.pdf"
                >
                  Get Resume
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
