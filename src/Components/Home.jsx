import React, { Component } from "react";
import "./Home.css";
import seven from "./images/colorRocks.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="mainDiv">
          <link rel="stylesheet" href="Home.css" />
          <div className="row">
            <div className="col" style={{ width: "5%", marginTop: "7%" }}>
              <div className="button1">{this.props.experienceTag}</div>
              <div className="button2">{this.props.aboutTag}</div>
            </div>
            <div className="col" style={{ width: "60%", marginTop: "5%" }}>
              <svg viewBox="-30 -30 400 100" preserveAspectRatio="none">
                <text y="50">Katie Wong</text>
              </svg>
              <div className="name">Katie Wong</div>
              <svg viewBox="-30 -10 400 100" preserveAspectRatio="none">
                <text y="50">Katie Wong</text>
              </svg>
              <div className="bio">
                Junior @ USC, Incoming SWE Intern @ Snapchat, <br />
                Previously @ Microsoft, Co-Founder @ Nibble, President @ HackSC
              </div>
            </div>
            <div className="col" style={{ width: "30%", marginTop: "8%" }}>
              <img style={{ width: "100%", marginTop: "5%" }} src={seven} />
            </div>
            <div className="col" style={{ width: "5%", marginTop: "7%" }}>
              <div className="button1">{this.props.contactTag}</div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/katherine-wong-04938216b/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACh0qbkBaKkNPkEn7XeloTi9gyiew5UYRHE,1600045555013)/"
              >
                <div className="button2">
                  <button
                    className="rotate2"
                    onclick="location.href='http://www.example.com'"
                    type="button"
                  >
                    Resume
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
