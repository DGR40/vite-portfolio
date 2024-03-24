import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tags from "./tags.jsx";
import SlouchApp from "../assets/slouch-app.jpeg";

// icons import

export default forwardRef(function Main({ handleScroll }, ref) {
  const { aboutSectionRef, projectSectionRef, contactSectionRef } = ref;

  function goToURL(url) {
    window.open(url, "_blank");
  }

  return (
    <div id="main" onScroll={handleScroll}>
      <div className="main-section" ref={aboutSectionRef} id={0}>
        <p className="paragraph">
          I began in highschool when I started making websites just for fun. I
          continued this passion at
          <span className="text-highlight"> Cornell University </span>where I
          studied Information Science. Throughout my time, I first learned
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
          <span className="text-highlight">Northwell Health</span>. I created
          programs to automate the daily tasks of the business teams using
          Python. One project I am most proud of is my automated scheduler.
          Instead of a business analyst taking hours to assign trainers to
          classes by week, my program does it by month in seconds, ensuring no
          trainer is assigned too many classes and there is variety in the
          classes they are assigned.
        </p>
      </div>

      <div
        className="project"
        ref={projectSectionRef}
        id={1}
        onClick={() => goToURL("https://dgr40.github.io/slouch-app/")}
      >
        <div className="project-info">
          <h2 className="project-header">
            SIT UP: SLOUCH DETECTION TOOL{" "}
            <span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </h2>
          <p className="paragraph">
            I created a productivity tool that uses the browser's webcam and a
            pose estimation Machine Learning model to monitor the user's posture
            in real time. It pings the user when they are slouching and provides
            a dashboard analyzing their sitting habits.
          </p>
          <div className="tag-container">
            <Tags
              tagList={["Tensorflow.js", "React", "HTML", "CSS", "Javascript"]}
            />
          </div>
        </div>
        <div className="project-image">
          <img src={SlouchApp} className="project-thumbnail" />
        </div>
      </div>

      <div className="project" ref={contactSectionRef} id={2}>
        <h1>CONTACT</h1>
      </div>
    </div>
  );
});
