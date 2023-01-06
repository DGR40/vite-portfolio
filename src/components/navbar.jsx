import { NavLink } from "react-router-dom";
import MeOnBoat from "../assets/meonboat2.png";

export default function NavBar() {
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="navbar-left">
          <img src={MeOnBoat} className="prof-pic-img" />
        </div>
        <div className="navbar-right">
          <h5 className="hotlink" onClick={() => goToDiv("home")}>
            Home
          </h5>
          <h5 className="hotlink" onClick={() => goToDiv("about")}>
            About
          </h5>
          <h5 className="hotlink" onClick={() => goToDiv("project-section")}>
            Projects
          </h5>
          <h5 className="hotlink" onClick={() => goToDiv("contact-section")}>
            Contact
          </h5>
          <a href={`resume`} target="_blank">
            <h5 className="hotlink" id="resume-hotlink">
              Resume
            </h5>
          </a>
        </div>
      </div>
    </>
  );

  function goToDiv(divID) {
    var elem = document.getElementById(divID);
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }

  function goToURL(url) {
    window.open(url, "_blank");
  }
}
