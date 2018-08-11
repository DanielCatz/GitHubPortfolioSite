import React, { Component } from "react";
import DATA from "./data";
import Navbar from "./components/navbar";
import ProjectList from "./components/projectList";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="portfolio">
        <Navbar />

        <div className="portfolio-intro" style={{ height: "90%" }}>
          <h2 className="single-page-header portfolio-intro-header">
            I like to develop software.
          </h2>
        </div>

        <ProjectList data={DATA} />

        <div className="contact-card">
          <h2 className="section-header">Say hi.</h2>

          <div className="contact-info">
            <a className="case-item-header" href="mailto:caterson.daniel.com">
              caterson.daniel<br />@gmail.com
            </a>

            <p className="case-item-text">
              I'm a <strong>Software Engineer</strong> with a passion for full stack web development, specializing in web services. <br /> <a href="https://Linkedin.com">Say hi!</a>
              <br />
              <br />
              Daniel Caterson <br />Redmond, Washington
            </p>

            <div className="contact-links">
              <a className="contact-link" href="https://github.com/DanielCatz">
                <svg
                  className="contact-icon"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="60"
                  viewBox="0 0 62 60"
                >
                  <path d="M31 0a30.7 30.7 0 0 0-9.8 59.9c1.55.3 2.116-.6 2.116-1.4s-.026-2.7-.042-5.3c-8.622 1.9-10.44-4.1-10.44-4.1-1.414-3.5-3.448-4.5-3.448-4.5-2.815-1.9.213-1.9.213-1.9a6.74 6.74 0 0 1 4.747 3.2c2.766 4.7 7.254 3.3 9.023 2.6a6.3 6.3 0 0 1 1.967-4.1c-6.88-.8-14.12-3.5-14.12-15.2a11.964 11.964 0 0 1 3.193-8.3 10.9 10.9 0 0 1 .3-8.1s2.6-.9 8.526 3.1a30.617 30.617 0 0 1 15.522 0c5.92-4 8.517-3.1 8.517-3.1a10.886 10.886 0 0 1 .308 8.1 11.946 11.946 0 0 1 3.186 8.3c0 11.8-7.248 14.4-14.155 15.1a7.52 7.52 0 0 1 2.1 5.7c0 4.1-.04 7.5-.04 8.5 0 .8.56 1.7 2.13 1.4A30.708 30.708 0 0 0 31 0" />
                </svg>
              </a>
            </div>

            <div data-image="profile.jpg" className="contact-picture">
              <div
                className="case-item-bg"
                style={{
                  backgroundImage:
                    "url('" + require("./assets/images/me.jpg") + "')"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//<div className="case-item-bg" style="{background-image: url('./images/cat.png');}"></div>
export default Home;
