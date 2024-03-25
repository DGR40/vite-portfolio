import { forwardRef } from "react";
import Project from "./project";
import SlouchApp from "../assets/slouch-app.jpeg";
import IvyApp from "../assets/ivy-app.jpeg";
import TextApp from "../assets/TextAppTall.jpg";
import GitIcon from "../assets/github-icon.png";
import MePic from "../assets/me-lake.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// icons import

export default forwardRef(function Main({ handleScroll, activeSection }, ref) {
  const { aboutSectionRef, projectSectionRef, contactSectionRef } = ref;

  function openEmail() {
    window.open("mailto:dgr73@cornell.edu");
  }

  return (
    <div id="main" onScroll={handleScroll}>
      <div className="section-marker">about</div>
      <div className="main-section" ref={aboutSectionRef} id={0}>
        <p className="paragraph">
          I began programming in highschool when I started making websites just
          for fun. Once I learned Javascript, the flood gates opened. I
          continued my passion for development at{" "}
          <a
            href="https://infosci.cornell.edu/"
            className="text-highlight"
            target="_blank"
            id="cornell"
          >
            Cornell University
          </a>{" "}
          where I studied Information Science. Throughout my time, I first
          learned
          <span className="text-highlight-subtle"> Python </span> then Object
          Oriented Programming with{" "}
          <span className="text-highlight-subtle">Java</span>, and later{" "}
          <span className="text-highlight-subtle">PHP</span> and{" "}
          <span className="text-highlight-subtle">SQL</span>. I learned not just
          how to program, but also about the value of the{" "}
          <span className="text-highlight-subtle"> user experience</span> we
          cultivate. I became fascinated with the thousands of small design
          choices that combine to deliver the seamless encounters we have with
          tech everyday. I took classes on{" "}
          <span className="text-highlight-subtle">
            Human Computer Interaction
          </span>{" "}
          and learned design principles as well as how to implement them. I also
          excelled in classes such{" "}
          <span className="text-highlight-subtle">
            Data Driven Web Development
          </span>{" "}
          and{" "}
          <span className="text-highlight-subtle">
            Interactive Data Visualization.
          </span>
        </p>
        <br />
        <p className="paragraph">
          While studying, I was able to put the theory into practice when I
          worked part-time as a Frontend Developer for the venture capital firm{" "}
          <a
            className="text-highlight text-link"
            href="https://teamworthy.com"
            target="_blank"
          >
            Teamworthy Ventures
          </a>
          . I gathered requirements from investment analysts, and iteratively
          built internal tools to help the team make investment insight.
        </p>
        <br />
        <p className="paragraph">
          Now, I am a data analyst at{" "}
          <a
            href="https://www.northwell.edu/"
            className="text-highlight"
            target="_blank"
          >
            Northwell Health
          </a>
          . I create programs to automate the daily tasks of the business teams
          using Python. I pride myself on saving analysts hours upon hours of
          manual work with my code. I also learned to wrangle data sources with
          over 100,000 employees, cleaning, prepping, and extracting meaning.
        </p>
        <br />
        <p className="paragraph">
          Outside of coding, I enjoy playing basketball (go Knicks!), hanging
          with my two dogs, and going to the beach.
        </p>
        <br />
        <p className="paragraph text-link">
          {" "}
          <a
            className="text-highlight text-link underline"
            href="/resume"
            target="_blank"
          >
            Read more in my resume{" "}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="project-header-icon"
            />
          </a>
        </p>
      </div>

      <div className="section-marker" ref={projectSectionRef} id={1}>
        projects
      </div>

      <Project
        title={"SIT UP: SLOUCH DETECTOR"}
        projectId={"situp"}
        description={
          "I created a productivity tool that uses the browser's webcam and a pose estimation Machine Learning model to monitor the user's posture in real time. It pings the user when they are slouching and provides a dashboard analyzing their sitting habits."
        }
        tagList={["Tensorflow.js", "React", "HTML", "CSS", "Javascript"]}
        image={SlouchApp}
        url={"https://dgr40.github.io/slouch-app/"}
      />

      <Project
        title={"ARE IVIES WORTH IT? INTERACTIVE ARTICLE"}
        projectId={"ivies"}
        description={
          "My partner and I produced an article researching whether or not an ivy league education is worth it. I created the interactive exploratory chart that allows users to look at the relationship between cost, median debt, median earnings, etc of the top 100 universities. I also built the compare feature: the user can select two schools of interest and quickly see a quantitative comparison of their stats."
        }
        tagList={["D3.js", "HTML", "CSS", "Javascript"]}
        image={IvyApp}
        url={"https://are-ivies-worth-it.netlify.app/"}
      />

      <Project
        title={"SENTIMENT ANALYSIS OF CLASSIC AMERICAN NOVELS: NLP"}
        projectId={"sentiment"}
        description={
          "For my final project in Text Mining Literature, I investigated the sentiment surrounding catholicism during the time period 1820-1865. I parsed out any word that was included of my list of catholic-associated words. I then scored the positive and negative sentiment of the words surrounded the target word and compiled my results in this paper. Click to read more... "
        }
        tagList={["Python", "Seaborn", "SciPy", "Sklearn", "NLTK"]}
        image={TextApp}
        url={"/text-analysis"}
      />

      <div className="section-marker" ref={contactSectionRef} id={2}>
        contact
      </div>

      <div className="project" id="contact">
        <div className="project-info">
          <h1 className="project-header">CONTACT</h1>
          <p className="paragraph">
            Thanks for checking out my website. If you are interested, let's
            stay in touch!
          </p>
          <button className="contact-button" onClick={() => openEmail()}>
            SEND ME AN EMAIL
          </button>
        </div>
        <div className="project-image">
          <img src={MePic} id={"contact"} className="project-thumbnail" />
        </div>
      </div>

      <div className="section-marker" id={5}>
        footer
      </div>

      <div className="project" id="info">
        <div className="project-info">
          <p className="paragraph text-center">
            This site was coded from scratch with HTML, CSS, and Javascript
            using the React framework. Danny Rusk © 2024
          </p>
        </div>
      </div>
    </div>
  );
});
