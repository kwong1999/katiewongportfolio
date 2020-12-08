import React, { Component } from "react";
import "./About.css";
import greenHike from "./images/greenHike.jpg";
import cookie from "./images/cookie.JPG";
import sandDude from "./images/sandDude.jpg";
import cage from "./images/cage.JPG";
import horseshoe from "./images/horseshoe.JPG";
import eyes from "./images/eyes.JPG";
import skateboard from "./images/skateboard.png";
import bubbles from "./images/bubbles.JPG";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="aboutPage">
          <link rel="stylesheet" href="About.css" />
          <img
            src={bubbles}
            style={{
              width: "40%",
              marginTop: "5%"
            }}
          />
          <svg viewBox="-50 20 400 70" preserveAspectRatio="none">
            <text
              y="70"
              style={{
                stroke: "hotpink",
                strokeWidth: "1.3px",
                fontSize: "150%"
              }}
            >
              hello world! i'm katie 👋🏼
            </text>
          </svg>
          <div
            style={{
              marginRight: "10%",
              marginLeft: "10%",
              fontFamily: "Circular Std Bold",
              fontSize: "130%"
            }}
          >
            I'm currently a third year CS student at the{" "}
            <b>University of Southern California</b>, in the heart of Los
            Angeles. I am an aspiring software engineer who loves tackling
            challenging problems with creativity and enthusiasm. I strive to
            create accessible products that connect and inspire people.
            <br /> <br />
            Previously, I interned on the data engineering team at <b>
              AT&T
            </b>{" "}
            and as a full stack developer at <b>Microsoft</b>. I am fortunate to
            attend USC on a full-ride for my academic achievements: I am a
            Presidential, Viterbi, SCion, Prock/Roberson scholar. While at USC,
            I like to keep busy whether its running 800 person hackathons and
            creating USC's first diversity and inclusion hackathon or TA-ing
            intro computer science classes or working as a developer for USC's
            premier startup incubator, LavaLab, where I co-developed the
            startup, <b>Nibble</b>.
            <br /> <br />I am always trying to learn new things and grow. I can
            be found skateboarding{" "}
            <img src={skateboard} style={{ width: "3%", marginRight: "2px" }} />
            around Los Angeles, collecting modern-art post-cards ✉️, seeking new
            hiking adventures 🌎 , or deep diving into my Spotify discover
            playlists
            <br /> <br />☆ Currently, I am open to exploring opportunities for
            full-time software engineering positions starting May 2022. Please
            don't hesitate to reach out! I am happy to connect about work or
            play!
          </div>

          <div
            class="row"
            style={{ marginLeft: "15%", marginTop: "5%", marginRight: "15%" }}
          >
            <div class="column" style={{ width: "30%" }}>
              <div class="row">
                <img className="picLogoBox" src={greenHike}></img>
              </div>
              <div class="row">
                <img className="picLogoBox" src={cookie}></img>
              </div>
            </div>
            <div class="column" style={{ width: "30%" }}>
              <div class="row">
                <img
                  className="picLogoBox"
                  style={{ width: "95%" }}
                  src={sandDude}
                ></img>
              </div>
              <div class="row">
                <img
                  className="picLogoBox"
                  style={{ width: "95%" }}
                  src={eyes}
                ></img>
              </div>
            </div>
            <div class="column" style={{ width: "30%" }}>
              <div class="row">
                <img className="picLogoBox" src={cage}></img>
              </div>
              <div class="row">
                <img className="picLogoBox" src={horseshoe}></img>
              </div>
            </div>
            <div class="column" style={{ width: "10%" }}></div>
          </div>
          <div className="row">
            <svg viewBox="0 20 650 100" preserveAspectRatio="none">
              <text
                y="70"
                style={{
                  stroke: "hotpink",
                  strokeWidth: "1.2px",
                  fontSize: "200%"
                }}
              >
                Latest and Greatest
              </text>
            </svg>
            <div class="column" style={{ width: "10%" }}></div>
            <div class="column" style={{ width: "30%" }}>
              <div
                style={{
                  fontSize: "150%",
                  textDecoration: "underline",
                  textDecorationColor: "hotpink"
                }}
              >
                What I am watching:
              </div>
              <div
                style={{
                  fontFamily: "Circular Std Bold",
                  textAlign: "left",
                  marginLeft: "30%"
                }}
              >
                ☆ Midsommar
                <br />
                ☆ Moonrise Kingdom <br />
                ☆ Eternal Sunshine of the Spotless Mind <br />
                ☆ Stuck In Love <br />
                ☆ Portlandia <br />
                ☆ Like Crazy <br />
              </div>
            </div>
            <div class="column" style={{ width: "30%" }}>
              <div
                style={{
                  fontSize: "150%",
                  textDecoration: "underline",
                  textDecorationColor: "hotpink"
                }}
              >
                What I am listening to:
              </div>
              <div
                style={{
                  fontFamily: "Circular Std Bold",
                  textAlign: "left",
                  marginLeft: "30%"
                }}
              >
                ☆ Two door cinema club <br />
                ☆ Cage the elephant <br />
                ☆ Still Woozy <br />
                ☆ Backseat Lovers <br />
                ☆ Slenderbodies <br />
                ☆ The Black Keys <br />
                ☆ Alt-J <br />
                ☆ Mac Miller <br />
              </div>
            </div>
            <div class="column" style={{ width: "30%" }}>
              <div
                style={{
                  fontSize: "150%",
                  textDecoration: "underline",
                  textDecorationColor: "hotpink"
                }}
              >
                Where I love to hike:
              </div>
              <div
                style={{
                  fontFamily: "Circular Std Bold",
                  textAlign: "left",
                  marginLeft: "30%"
                }}
              >
                ☆ Bright Angel Trail (Grand Canyon) <br />
                ☆ Koko Head Crater (Oahu) <br />
                ☆ Steep Ravine (Mt. Tam) <br />
                ☆ Grouse Grind (Vancouver) <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
