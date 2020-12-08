import React, { Component } from "react";
import "./Contact.css";
import spotify from "./images/spotify.png";
import mail from "./images/mail.png";
import resumeIcon from "./images/resumeIcon.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="contactPage">
          <link rel="stylesheet" href="Contact.css" />
          <div className="row">
            <div className="col" style={{ width: "55%" }}>
              <svg viewBox="-50 -50 800 150" preserveAspectRatio="none">
                <text style={{ strokeWidth: "1.3px" }} y="50">
                  Let's Get In Touch!
                </text>
              </svg>
              <div
                style={{
                  fontFamily: "Circular Std Bold",
                  fontSize: "110%",
                  marginRight: "25%",
                  marginLeft: "5%",
                  marginBottom: "10%"
                }}
              >
                I love meeting new people. Please don't hesitate to reach out
                for collab or chat!
              </div>
            </div>
            <div
              className="col"
              style={{
                width: "45%"
              }}
            >
              <div className="row" style={{ marginTop: "20%" }}>
                <div className="col" style={{ width: "15%" }}>
                  <a className="contactButtons" href="mailto:wongkh@usc.edu">
                    {" "}
                    <img src={mail} className="picLogoBox" />
                  </a>
                </div>
                <div className="col" style={{ width: "15%" }}>
                  <a
                    className="contactButtons"
                    href="https://github.com/kwong1999"
                    target="_blank"
                  >
                    {" "}
                    <img src={github} className="picLogoBox" />
                  </a>
                </div>
                <div className="col" style={{ width: "15%" }}>
                  <a
                    className="contactButtons"
                    target="_blank"
                    href="https://www.linkedin.com/in/katherine-wong-04938216b/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACh0qbkBaKkNPkEn7XeloTi9gyiew5UYRHE,1600045555013)/"
                  >
                    <img src={resumeIcon} className="picLogoBox" />
                  </a>
                </div>
                <div className="col" style={{ width: "15%" }}>
                  <a
                    className="contactButtons"
                    href="https://www.linkedin.com/in/katherine-wong-04938216b/"
                    target="_blank"
                  >
                    {" "}
                    <img src={linkedin} className="picLogoBox" />
                  </a>
                </div>
                <div className="col" style={{ width: "15%", marginLeft: "1%" }}>
                  <a
                    className="contactButtons"
                    href="https://open.spotify.com/user/katie_wong?si=BOYD_8tOQzSkDD6vt-VxoQ"
                    target="_blank"
                  >
                    {" "}
                    <img src={spotify} className="picLogoBox" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col" style={{ width: "15%" }}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
