import appDesign1 from "../assets/vueggie-1.png";
import appDesign2 from "../assets/vueggie-2.png";
import MeOnBoat from "../assets/meonboat2.png";
import Swing1 from "../assets/swing2.png";
import Swing2 from "../assets/swing3.png";
import BarChartVid from "../assets/data-vis-1.mp4";
import TextAnalysis from "../assets/text-analysis-1.png";
import HomeDesign from "../assets/home-design.png";
import ResponsiveAppBar from "../components/navbar_two";

import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import NavBar2 from "../components/navbar_two";

export default function Root() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const containerRefs = {
    homeRef,
    aboutRef,
    projectsRef,
    contactRef,
  };

  return (
    <div>
      <NavBar2 ref={containerRefs} />
      <section className="typewriter banner" id="home" ref={homeRef}>
        <div className="container">
          <div className="tagline">
            <h1>
              Hello, my name is <span className="blue">Danny Rusk</span>{" "}
            </h1>
            <p>
              I'm a <span className="blue">frontend developer</span> and a{" "}
              <span className="blue">data scientist</span> who has built
              websites, web apps and data visualizations that provide great
              <span className="blue"> user experiences</span>.
            </p>
            <div
              className="project-button"
              onClick={() => goToDiv("project-section")}
            >
              <h4>My Projects</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="banner" id="about" ref={aboutRef}>
        <div className="container" id="about-container">
          <div className="about-words">
            <div>
              <h1>About</h1>
              <p className="about-words-p">
                I am a senior Information Science major at Cornell University
                excited to graduate in <span className="blue">May 2023</span>. I
                am looking for positions in front end development and data
                science. Currently, I'm an intern at{" "}
                <a
                  href="https://www.teamworthy.com"
                  className="tw-link"
                  target="_blank"
                >
                  {" "}
                  Teamworthy Ventures{" "}
                </a>
                doing frontend development on their internal platform. Some of
                the technologies I utilize through my courses and work include:
              </p>
              <div className="tags">
                <div className="tag">
                  <p>JavaScript (ES6)</p>
                </div>
                <div className="tag">
                  <p>Python</p>
                </div>
                <div className="tag">
                  <p>Vue</p>
                </div>
                <div className="tag">
                  <p>React</p>
                </div>
                <div className="tag">
                  <p>Java</p>
                </div>
                <div className="tag">
                  <p>SQL</p>
                </div>
              </div>
              <p id="about-second" className="about-words-p">
                When I am not programming for the web, I enjoy playing
                basketball on the Cornell Club Men's team, going to the beach
                with my family and two dogs, and playing the guitar.
              </p>
            </div>
          </div>

          <div className="about-pic">
            <img src={MeOnBoat} />
          </div>
        </div>
      </section>

      <section className="projects" id="project-section" ref={projectsRef}>
        <div className="project-container">
          <h1>Projects</h1>
        </div>
        <div className="project-banner">
          <div className="project-left" id="project-left">
            <img src={appDesign2} />
            <img src={appDesign1} />
          </div>
          <div className="project-left" id="project-right">
            <h1>Vegetable Catalog PWA</h1>
            <p>
              Final Project made for App Prototype and Design. Used User
              Interviews to gather design requirements then built the app to
              meet user goals. User can search catalog for favorite vegetable
              varieties as well as learn the basics of gardening through the
              tutorial page.
            </p>
            <div className="tags">
              <div className="tag-1">
                <p>Vue.js</p>
              </div>
              <div className="tag-1">
                <p>Bootstrap</p>
              </div>
              <div className="tag-1">
                <p>JavaScript</p>
              </div>
              <div className="tag-1">
                <p>HTML</p>
              </div>
              <div className="tag-1">
                <p>CSS</p>
              </div>
            </div>
            <div
              className="project-button"
              onClick={() =>
                goToURL("https://github.com/DGR40/vue-ggie-tales-project-main")
              }
            >
              <h4>Github</h4>
            </div>
          </div>
        </div>

        <div className="project-banner" id="data-vis">
          <div className="project-left" id="project-left project-left-video">
            <video autoPlay loop controls>
              <source src={BarChartVid} type="video/mp4"></source>
            </video>
          </div>
          <div className="project-left" id="project-right">
            <h1>Interactive Data Visualization</h1>
            <p>
              Created a visualization of video game companies share of sales
              over time. User can hover over particular name to view just the
              sales of the given company.
            </p>
            <div className="tags">
              <div className="tag-1">
                <p>D3.js</p>
              </div>
              <div className="tag-1">
                <p>JavaScript</p>
              </div>
              <div className="tag-1">
                <p>HTML</p>
              </div>
              <div className="tag-1">
                <p>CSS</p>
              </div>
            </div>
            <div
              className="project-button"
              onClick={() =>
                goToURL("https://github.com/DGR40/data-driven-web-dev-project2")
              }
            >
              <h4>GitHub</h4>
            </div>
          </div>
        </div>

        <div className="project-banner">
          <div className="project-left" id="project-left">
            <img src={Swing1} />
            <img src={Swing2} />
          </div>
          <div className="project-left" id="project-right">
            <h1>Swing Campaign App</h1>
            <p>
              Worked as frontend developer on app to help inform voters on
              legislation being passed by their representatives at every level.
              App launched to over 100 initial users. App has since been
              discontinued.
            </p>
            <div className="tags">
              <div className="tag-1">
                <p>React.js</p>
              </div>
              <div className="tag-1">
                <p>JavaScript</p>
              </div>
              <div className="tag-1">
                <p>HTML</p>
              </div>
              <div className="tag-1">
                <p>CSS</p>
              </div>
            </div>
            <div
              className="project-button"
              onClick={() =>
                goToURL(
                  "https://play.google.com/store/apps/details?id=com.swingvote.swing&hl=en_US&gl=US"
                )
              }
            >
              <h4>Google Play Store</h4>
            </div>
          </div>
        </div>

        <div className="project-banner">
          <div className="project-left" id="project-left-center">
            <img src={TextAnalysis} id="double-wide-img" />
          </div>
          <div className="project-left" id="project-right">
            <h1>Historical Text Analysis</h1>
            <p>
              Analyzed change in sentiment relating to catholicism in hundreds
              of novels over time period 1820-1865. Used text analysis tools to
              test theory that anti-catholicism ideals were rampant throughout
              this time.
            </p>
            <div className="tags">
              <div className="tag-1">
                <p>Pandas</p>
              </div>
              <div className="tag-1">
                <p>Scikit-Learn</p>
              </div>
              <div className="tag-1">
                <p>Seaborn</p>
              </div>
            </div>
            <a href={`text-analysis`} target="_blank">
              <div className="project-button">
                <h4>Read Full Paper</h4>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="typewriter banner"
        id="contact-section"
        ref={contactRef}
      >
        <div className="container">
          <div className="tagline">
            <h1>Let's get in touch...</h1>
            <p>
              My email is{" "}
              <span
                className="blue"
                onClick={() => {
                  navigator.clipboard.writeText(this.state.textToCopy);
                }}
              >
                dgr73@cornell.edu
              </span>
            </p>
            <div className="project-button" onClick={() => openEmail()}>
              <h4>Send Me an Email</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="footer banner">
        <h1>Site designed and coded by Danny Rusk © 2023</h1>
      </section>
    </div>
  );
}

function scrollToProjects() {
  var target = $(window).height();
  console.log(target);
  $("html, body").animate({ scrollTop: target }, 1000);
}

function goToURL(url) {
  window.open(url, "_blank");
}

function goToURLSpecial(url) {
  let h = window.innerHeight;
  console.log(h);
  window.open(url, "_blank", "myWindowName", "resizable").resizeTo(445, h);
}

function goToDiv(divID) {
  var elem = document.getElementById(divID);
  elem.scrollIntoView({
    behavior: "smooth",
  });
}

function openEmail() {
  window.open("mailto:dgr73@cornell.edu", "_blank");
}

/*
function showDisclaimer() {
  var elem = document.getElementById("disc");
  elem.style.attr("display", "block");
}
*/
