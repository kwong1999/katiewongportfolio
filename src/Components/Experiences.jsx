import React, { Component } from "react";
import "./Experiences.css";
import mslogo from "./images/mslogo.png";
import attlogo from "./images/attlogo.png";
import nibblelogo from "./images/nibble.png";
import hacksclogo from "./images/hacksclogo.png";
import snapchatlogo from "./images/snapchatlogo.png";
import ironridgelogo from "./images/ironridgelogo.png";
import equitaslogo from "./images/EquitasLogo.png";
import inoroutlogo from "./images/inorout.png";
import usclogo from "./images/usclogo.jpg";
import hackgirllogo from "./images/hackgirl.jpg";
import ledLogo from "./images/ledSpecLogo.png";

class Experiences extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="ExperienceBox">
          <link rel="stylesheet" href="Experiences.css" />
          <div style={{ paddingBottom: "2%", marginRight: "40%" }}>
            <svg viewBox="-30 -30 400 100" preserveAspectRatio="none">
              <text className="ExperienceTitle" y="50">
                Experiences ↯
              </text>
            </svg>
          </div>
          <div class="row" style={{ marginLeft: "5%" }}>
            <div class="column">
              <div class="row">
                <button
                  style={{ backgroundColor: "black", border: "none" }}
                  onClick={() => this.props.parentCallback("microsoft")}
                >
                  <img className="picLogoBox" src={mslogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("hacksc")}
                >
                  <img className="picLogoBox" src={hacksclogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("equitas")}
                >
                  <img className="picLogoBox" src={equitaslogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("ledspec")}
                >
                  <img className="picLogoBox" src={ledLogo}></img>
                </button>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <button
                  style={{ border: "none", backgroundColor: "black" }}
                  onClick={() => this.props.parentCallback("snapchat")}
                >
                  <img className="picLogoBox" src={snapchatlogo}></img>{" "}
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("att")}
                >
                  <img className="picLogoBox" src={attlogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black",
                    width: "100%"
                  }}
                  onClick={() => this.props.parentCallback("usc")}
                >
                  <img className="picLogoBox" src={usclogo}></img>
                </button>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <button
                  style={{ border: "none", backgroundColor: "black" }}
                  onClick={() => this.props.parentCallback("nibble")}
                >
                  <img className="picLogoBox" src={nibblelogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("ironridge")}
                >
                  <img className="picLogoBox" src={ironridgelogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("inorout")}
                >
                  <img className="picLogoBox" src={inoroutlogo}></img>
                </button>
              </div>
              <div class="row">
                <button
                  style={{
                    border: "none",
                    marginTop: "2%",
                    backgroundColor: "black"
                  }}
                  onClick={() => this.props.parentCallback("hackgirl")}
                >
                  <img className="picLogoBox" src={hackgirllogo}></img>
                </button>
              </div>
            </div>
            <div class="column" style={{ width: "10%" }}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experiences;
