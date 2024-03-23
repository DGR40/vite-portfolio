import { NavLink } from "react-router-dom";
import GitIcon from "../assets/github-icon.png";
import LinkedIcon from "../assets/linkedin-icon.png";
import ResumeIcon from "../assets/resume-icon.png";
import emailIcon from "../assets/email-icon.png";

export default function Links() {
  function openEmail() {
    window.open("mailto:dgr73@cornell.edu", "_blank");
  }
  return (
    <>
      <div className="links" id="links">
        <a
          href="https://www.github.com/DGR40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle" id="git">
            <img className="icon" src={GitIcon} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-rusk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle" id="in">
            <img className="icon" src={LinkedIcon} />
          </div>
        </a>
        <a href="/resume" target="_blank">
          <div className="icon-circle" id="res">
            <img className="icon" src={ResumeIcon} />
          </div>
        </a>
        <a>
          <div className="icon-circle" id="mail" onClick={() => openEmail()}>
            <img className="icon" src={emailIcon} />
          </div>
        </a>
      </div>
    </>
  );
}
