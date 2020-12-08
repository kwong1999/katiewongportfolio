import "./App.css";
import Home from "./Components/Home";
import Experiences from "./Components/Experiences";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ScrollableAnchor from "react-scrollable-anchor";
import React, { Component } from "react";
import inclusion from "./Components/images/inclusion.png";
import NibbleSlide1 from "./Components/images/nibbleSlide1.png";
import NibbleSlide2 from "./Components/images/nibbleSlide2.png";
import NibbleSlide3 from "./Components/images/nibbleSlide3.png";

const ExperienceButton = (
  <a href="#Experiences">
    <button className="rotate">Experiences</button>
  </a>
);
const AboutButton = (
  <a href="#About">
    <button className="rotate">About</button>
  </a>
);

const ContactButton = (
  <a href="#Contact">
    <button className="rotate2">Contact</button>
  </a>
);

const CompanyTitle = title => {
  return (
    <div
      style={{
        backgroundColor: "white",
        fontSize: "400%",
        fontWeight: "bold",
        paddingLeft: "3%",
        paddingTop: "3%",
        textAlign: "left",
        fontFamily: "Circular Std Bold"
      }}
    >
      {title}
    </div>
  );
};
const PositionTitle = title => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          fontSize: "150%",
          paddingLeft: "5%",
          color: "grey",
          fontFamily: "Circular Std Bold",
          textAlign: "left"
        }}
      >
        {title}
      </div>
      <div
        style={{
          backgroundColor: "white",
          fontSize: "240%",
          fontWeight: "bold",
          paddingRight: "80%",
          paddingTop: "3%",
          fontFamily: "Circular Std Bold"
        }}
      >
        Overview
      </div>
    </div>
  );
};

const HomeText = (
  <div
    style={{
      textDecoration: "underline",
      fontSize: "200%",
      fontFamily: "Circular Std Bold"
    }}
  >
    Katie Wong
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
  }

  handleCallback = childData => {
    this.setState({ currentPage: childData });
    window.scrollTo(0, 0);
  };
  componentWillMount() {
    this.setState({ currentPage: "home" });
  }
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        <link
          href="//db.onlinewebfonts.com/c/961a181da27e7cbc072ec2fb5bbfe2a9?family=Circular+Std+Bold"
          rel="stylesheet"
          type="text/css"
        />
        {currentPage === "home" && (
          <div>
            <Home
              experienceTag={ExperienceButton}
              aboutTag={AboutButton}
              contactTag={ContactButton}
            ></Home>
            <ScrollableAnchor id={"Experiences"}>
              <Experiences parentCallback={this.handleCallback} />
            </ScrollableAnchor>
            <ScrollableAnchor id={"About"}>
              <About />
            </ScrollableAnchor>
            <ScrollableAnchor id={"Contact"}>
              <Contact />
            </ScrollableAnchor>
          </div>
        )}
        {currentPage === "microsoft" && (
          <div>
            <div className="coverExperienceMicrosoft">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Microsoft")}
            {PositionTitle("software engineering intern (full stack)")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              After my sophomore year of college, I interned at Microsoft as a
              <b style={{ color: "black" }}> full stack developer</b> on the
              <b style={{ color: "black" }}>
                {" "}
                Core Services and Engineering Operations Team.
              </b>{" "}
              I worked on internal tools that connected Microsoft employees
              allowing for professional development and enhanced learning
              through mentorship. I created{" "}
              <b style={{ color: "black" }}>fully accessible features</b> that
              integrated new data from Microsoft subsidiaries and contributed to
              software packages that would be shipped across the company. <br />{" "}
              <br />I developed accessible customer service features complete
              with click telemetry insights to improve product design and user
              experience. I executed this with{" "}
              <b style={{ color: "black" }}>
                React JS Typescript, Accessibility Insights, Color Contrast,
                NVDA for accessibility, Kusto queries
              </b>{" "}
              for visualizing telemetric insights. <br /> <br /> I developed a
              feature on a{" "}
              <b style={{ color: "black" }}>
                profile package (shipped across the company)
              </b>{" "}
              that merges data from a new Microsoft acquisition and provides
              more profile context to promote internal collaboration. For the
              front-end, I executed this with React Typescript and added a
              complete click telemetry suite. For the back-end, I developed my
              own{" "}
              <b style={{ color: "black" }}>
                Azure cloud-hosted .NET Core Web API (C#)
              </b>{" "}
              to interface with the another data team in Microsoft{" "}
              <b style={{ color: "black" }}>(secured with Azure Key Vault)</b>,
              creating a data-processing back-end and a full testing suite
              (Moq). <br /> <br />I took full ownership of my products,
              collaborating with design/PM. <br /> <br />
              Using Azure DevOps, I served as a{" "}
              <b style={{ color: "black" }}>scrum master</b> for a sprint.
              <br /> <br />I also collaborated with a different team for the
              hackathon to <b style={{ color: "black" }}>
                improve NLP models
              </b>{" "}
              for help ticket classification. I utilized{" "}
              <b style={{ color: "black" }}>
                Azure Translator API to write python scripts
              </b>{" "}
              for text augmentation, increasing the dataset for training the NLP
              models. <br /> <br /> I also uploaded an intern/new hire
              dictionary to allow new hires to on-board quicker, alleviate
              confusion, and hopefully mitigate imposter syndrome <br /> <br />{" "}
              I also developed a web app for the C&AI hackathon to support the
              BLM movement. Users could post email templates to representatives
              and others can view the templates and automatically send or
              customize those emails. I deployed this with Azure cloud and mail
              integration.{" "}
              <b style={{ color: "black" }}>Used React, Node JS, Azure SQL</b>
            </div>
          </div>
        )}
        {currentPage === "snapchat" && (
          <div>
            <div className="coverExperienceSnapchat">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Snapchat")}
            {PositionTitle("software engineering intern (summer 2021)")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              During summer 2021, I will be interning at Snapchat as a software
              engineering intern. I am very excited for the opportunity to work
              on such an impactful and connecting product.
            </div>
          </div>
        )}
        {currentPage === "nibble" && (
          <div>
            <div className="coverExperienceNibble">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Nibble")}
            {PositionTitle("co-founder and co-lead developer")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              3 friends and I created this startup to{" "}
              <b style={{ color: "black" }}>combat food waste</b> and offer
              cheaper dining options for students. Nibble is an application that
              allows restaurants to add leftover food items for a discounted
              price during the last hour of operation. Nibble is also a social
              food application: users can gift food to friends and see what
              friends are eating! <br /> <br />
              Our team met in{" "}
              <b style={{ color: "black" }}>
                Lavalab, USC's premier startup incubator
              </b>
              , where we developed our product,{" "}
              <b style={{ color: "black" }}>pitched to VC CEOs</b> and won{" "}
              <b style={{ color: "black" }}>first place prize</b> for Spring
              2020. <br /> <br />
              In addition to contributing to the development of the idea, I
              worked as one of two developers on the Nibble prototype. We
              utilized <b style={{ color: "black" }}>React Native</b>, as it is
              multi-platform (can work on iOS and Android), and{" "}
              <b style={{ color: "black" }}>Google Firebase </b>
              to develop a functional mobile application.
              <br /> <br />
              This was a growing experience for my team as we tackled{" "}
              <b style={{ color: "black" }}>
                creating a start-up during a global pandemic with team members
                in differing time zones.
              </b>
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img src={NibbleSlide1} style={{ height: "80%", width: "80%" }} />
              <img src={NibbleSlide2} style={{ height: "80%", width: "80%" }} />
              <img src={NibbleSlide3} style={{ height: "80%", width: "80%" }} />
            </div>
          </div>
        )}
        {currentPage === "hacksc" && (
          <div>
            <div className="coverExperienceHackSC">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("HackSC")}
            {PositionTitle("president")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              As the president of <a href="https://hacksc.com"> HackSC</a>, I am
              responsible for leading the team that organizes USC's premier
              hackathon. We create a 36-hour, 800-person, MLH-certified event
              that aims to promote innovation and learning. <br />
              <br />
              As a freshman, I joined the{" "}
              <b style={{ color: "black" }}> first organizing team </b> and
              worked to create the perfect hacker experience for the first
              annual HackSC in 2019. We quickly became one of the{" "}
              <b style={{ color: "black" }}>top hackathons in the nation.</b>{" "}
              <br />
              <br />
              As a sophomore, I was the{" "}
              <b style={{ color: "black" }}>
                {" "}
                first and only female underclassman{" "}
              </b>
              on the board. I became head of Hacker Experience and HR for the
              organization. I{" "}
              <b style={{ color: "black" }}>
                {" "}
                tackled discrimination issues, passionately ensuring that all
                had a voice
              </b>{" "}
              and felt comfortable.
              <br />
              <br />
              As a junior, I am now the{" "}
              <b style={{ color: "black" }}> President</b> of HackSC. I will be
              leading the team that runs our{" "}
              <b style={{ color: "black" }}>
                {" "}
                first, large-scale virtual hackathon
              </b>
              . As president, I felt HackSC needed to act in support of the BLM
              movement and the push for diversity and inclusion in technology.
              Thus, I fought to create{" "}
              <a href="https://viterbischool.usc.edu/news/2020/11/how-do-you-innovate-inclusion/">
                USC's first D&I hackathon.
              </a>{" "}
              I sought out engineering diversity organizations to drive the
              event and HackSC acted as a guiding resource for the creation of
              the event.
            </div>
            <div style={{ backgroundColor: "white" }}>
              <img src={inclusion} style={{ height: "50%", width: "50%" }} />
            </div>
          </div>
        )}
        {currentPage === "att" && (
          <div>
            <div className="coverExperienceAtt">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("AT&T")}
            {PositionTitle("software engineering intern")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              After my freshman year in college, I interned at AT&T as a
              software engineering intern. This was my first industry experience
              as a software engineer and I was{" "}
              <b style={{ color: "black" }}>one of two freshman</b> in my intern
              cohort. At times it was challenging to compete with other interns
              who had 2 more years of experience but I worked hard and
              persevered to make my deliverables and contribute impactful
              software to{" "}
              <b style={{ color: "black" }}>AT&T's data engineering team</b>.{" "}
              <br /> <br /> During my internship, I{" "}
              <b style={{ color: "black" }}>
                increased data retrieval efficiency
              </b>{" "}
              for internal configuration tools by implementing new{" "}
              <b style={{ color: "black" }}>
                GraphQL, interservice/database communication metadata
                microservices
              </b>{" "}
              in the
              <b style={{ color: "black" }}> Java Springboot Framework</b>. I
              ensured functionality by creating a{" "}
              <b style={{ color: "black" }}>full test suite</b> for my new micro
              services using{" "}
              <b style={{ color: "black" }}>J-Unit/Mockito/SonarQube</b> for
              optimal code coverage and efficiency. <br />
              <br /> Throughout my internship, I gained experience working in an
              <b style={{ color: "black" }}>
                {" "}
                Agile Software Environment
              </b>. <br />
              <br />I also{" "}
              <b style={{ color: "black" }}>
                enhanced AT&T wireless customer experience
              </b>{" "}
              by developing an <b style={{ color: "black" }}>AR application</b>{" "}
              to direct users to the nearest cellular service using a
              distance/signal strength algorithm and crowdsourced data. In the
              future, this can be used to{" "}
              <b style={{ color: "black" }}>optimize cell tower placement</b>,
              as AT&T will be able to see where users need more cell coverage,
              and can{" "}
              <b style={{ color: "black" }}>provide emergency response data</b>,
              detecting which cell towers are down. I worked in a team of 4 to
              develop this with{" "}
              <b style={{ color: "black" }}>
                Android Studio, Google AR Core, Google Firebase. I worked as the
                lead AR programmer.
              </b>{" "}
              <br />
              <br /> In addition, during my time at AT&T, I immersed myself into
              the volunteer culture by serving as{" "}
              <b style={{ color: "black" }}>Girls Who Code Panelist</b>,
              supporting diversity in computer science through tech talks
              (something I am very passionate about).
            </div>
          </div>
        )}
        {currentPage === "ironridge" && (
          <div>
            <div className="coverExperienceIronridge">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("IronRidge")}
            {PositionTitle("mechanical engineering intern")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              During summer 2016, I worked as a mechanical engineering intern at
              Ironridge. I worked in the lab as a mechanical engineering testing
              intern. I tested solar mounting products for{" "}
              <b style={{ color: "black" }}>durability</b> and
              <b style={{ color: "black" }}> environmental conditions </b> using
              an
              <b style={{ color: "black" }}> Instron </b> and{" "}
              <b style={{ color: "black" }}>Skidmore </b> for higher quality
              assurance in solar mounting products. I produced comprehensive
              results.
            </div>
          </div>
        )}
        {currentPage === "usc" && (
          <div>
            <div className="coverExperienceUsc">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("University of Southern California")}
            {PositionTitle("computer science B.S. student")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              I'm currently a third year CS student at the University of
              Southern California, in the heart of Los Angeles. I am fortunate
              to attend USC on a full-ride for my academic achievements: I am a
              <b style={{ color: "black" }}>
                {" "}
                Presidential, Viterbi, SCion, Prock/Roberson scholar
              </b>
              . <br />
              <br />I am very committed to my academics and have a{" "}
              <b style={{ color: "black" }}>4.0 GPA</b>. While at USC, I like to
              keep busy! I am the president of HackSC, I{" "}
              <b style={{ color: "black" }}>TA intro computer science</b>, I
              work as a developer and a mentor for USC's premier startup
              incubator, LavaLab, and I am a part of the{" "}
              <b style={{ color: "black" }}>
                Tau Beta Pi Honors Engineering Society
              </b>
              . I am also an{" "}
              <b style={{ color: "black" }}>avid hackathon attendee</b>
              and love meeting other passionate innovators!
              <br />
              <br />I am{" "}
              <b style={{ color: "black" }}>
                published in USC's academic journal
              </b>{" "}
              for my{" "}
              <a href="http://scribe.usc.edu/the-homeless-drug-addled-indolence-or-unfortunate-disadvantages/">
                writing thesis
              </a>{" "}
              on the Los Angeles homeless population. <br />
              <br /> When I stepped onto USC's campus and had the chance to
              interact with passionate, diverse, intelligent individuals, I knew
              I had to attend USC. I love USC's environment as it has allowed to
              grow not only my technical skills but also my communication skills
              and passions. Everyday, I am so inspired by the artists,
              innovators, and athletes that I get to converse and learn from.
            </div>
          </div>
        )}
        {currentPage === "equitas" && (
          <div>
            <div className="coverExperienceEquitas">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Equitas")}
            {PositionTitle("co-lead software engineer")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              During TreeHacks, Stanford's hackathon, my partner and I decided
              to learn how to develop{" "}
              <b style={{ color: "black" }}>Swift iOS applications</b>. We
              wanted to learn and also make something socially impactful to the
              current climate. Thus, we created Equitas. <br /> <br />
              In today's political climate, people on Medicaid are quickly
              losing insurance coverage on a variety of things, including{" "}
              <b style={{ color: "black" }}>sexual health</b>. People generally
              know very little about sexual health as well. We decided to create
              an intuitive iOS application for users to{" "}
              <b style={{ color: "black" }}>
                learn more about common sexually transmitted diseases
              </b>{" "}
              and{" "}
              <b style={{ color: "black" }}>
                locate nearby clinics that provide insurance-covered testing
                services to Medicaid patients.
              </b>{" "}
              <br />
              <br />
              Check out our{" "}
              <a href="https://github.com/kwong1999/treeHacks2020">
                Github Repo
              </a>
              !
            </div>
          </div>
        )}
        {currentPage === "inorout" && (
          <div>
            <div className="coverExperienceInorout">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("In-Or-Out")}
            {PositionTitle("co-lead software engineer")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              With a surge in consumer interest in cooking/restaurants, 3
              friends and I decided to create a{" "}
              <b style={{ color: "black" }}> dynamic web application </b> that
              allows users to{" "}
              <b style={{ color: "black" }}>
                {" "}
                find recipes as well as restaurants
              </b>{" "}
              that serve their favorite foods. Users can also rate/see ratings
              of each restaurant and recipe. <br />
              <br /> If a user cannot find a recipe or restaurants, no problem!
              In-or-out delivers tailored{" "}
              <b style={{ color: "black" }}>recommendations</b> to our users.
              The application has{" "}
              <b style={{ color: "black" }}>full login/register capabilities</b>
              . I worked on the front-end for this project working with{" "}
              <b style={{ color: "black" }}>
                {" "}
                HTML, CSS, Javascript, JSP files, AJAX, Bootstrap, and SQL
              </b>
              . Check out our{" "}
              <a href="https://github.com/chloetanlimco/inORout">Github Repo</a>
              !
            </div>
          </div>
        )}
        {currentPage === "hackgirl" && (
          <div>
            <div className="coverExperienceHackgirl">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Hack Like A Girl")}
            {PositionTitle("co-founder")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              <b style={{ color: "black" }}>
                “The field of technology is war, a brutal war. Women are not
                strong enough to face this,” my history teacher lectured
              </b>
              . Little did the teacher know, this “insight” would not deter me
              from technology, but rather prompt me to declare war on the
              prejudices dictating technology today. <br />
              <br />
              Thus, I embarked on a crazy journey to{" "}
              <b style={{ color: "black" }}> create an all-female hackathon </b>
              to encourage women to pursue technology; however,{" "}
              <b style={{ color: "black" }}>
                {" "}
                as a junior in high school, I had never even been to a hackathon
              </b>
              . <br />
              <br />
              Nevertheless, I created Hack Like a Girl hackathon. I found myself
              confronted with obstacles, wondering how I could gain unsupervised
              access to a facility for my hackathon, if my driver’s license
              qualified as a tax ID, and how to handle our Google grant money.
              Despite the barriers and hurdles, I persevered and Hack Like A
              Girl was a victory. <br />
              <br /> Check out the event{" "}
              <a href="https://hacklikeagirl.weebly.com"> here</a>!
            </div>
          </div>
        )}
        {currentPage === "ledspec" && (
          <div>
            <div className="coverExperienceLedspec">
              <button
                style={{
                  position: "fixed",
                  left: "1%",
                  top: "1%",
                  backgroundColor: "#aaf0d1",
                  border: "none",
                  height: "9%",
                  width: "12%"
                }}
                onClick={() => this.setState({ currentPage: "home" })}
              >
                {HomeText}
              </button>
            </div>
            {CompanyTitle("Arduino LED Spectrophotometer")}
            {PositionTitle("co-creator/high school gordon research fellow")}
            <div
              style={{
                backgroundColor: "white",
                fontSize: "150%",
                textAlign: "left",
                color: "grey",
                paddingLeft: "5%",
                paddingTop: "1%",
                paddingBottom: "5%",
                paddingRight: "3%",
                fontFamily: "Circular Std Bold"
              }}
            >
              Tick tock… It’s 3pm. Our group has been working on the project for
              three hours and so far we have someone’s calculus homework, a
              drawing of a cartoon dog, and no project idea on the board. Two
              days prior, two hundred students and I started{" "}
              <b style={{ color: "black" }}>COSMOS, an engineering camp</b>.
              Immediately, we were thrown into groups and tasked to complete
              “the final project” on{" "}
              <b style={{ color: "black" }}> photonics </b> for the competition.{" "}
              <br />
              <br />
              Since none of us knew photonics, we sat staring off into space.
              Feeling that I had nothing to lose, I began approaching group
              members, asking them about themselves. I learned about everyone’s
              passions and talents and their profound love-hate relationship
              with AP Chemistry. Thus, I began a chemistry conversation that led
              to friendships and our project idea. <br />
              <br />
              When commiserating about{" "}
              <b style={{ color: "black" }}> spectrophotometry</b>, someone
              suggested making our own spectrophotometer. We debated and pushed
              each other to improve the idea. In the end, we decided on a design
              of <b style={{ color: "black" }}>3 LEDs and an Arduino</b>. Using
              all of our talents, we created an{" "}
              <b style={{ color: "black" }}>
                {" "}
                9cm by 5cm LED spectrophotometer with only $100 - comparable
                systems were on the market for $1000
              </b>
              . We were named{" "}
              <b style={{ color: "black" }}>High School Gordon Fellows</b> for
              creating the best project in our cluster. When diverse people
              collaborate, you can make something great for practically nothing
              that means everything.
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
