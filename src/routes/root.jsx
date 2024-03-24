import appDesign1 from "../assets/vueggie-1.png";
import appDesign2 from "../assets/vueggie-2.png";
import MeOnBoat from "../assets/meonboat2.png";
import Swing1 from "../assets/swing2.png";
import Swing2 from "../assets/swing3.png";
import BarChartVid from "../assets/data-vis-1.mp4";
import TextAnalysis from "../assets/text-analysis-1.png";
import HomeDesign from "../assets/home-design.png";
import { useRef, useEffect, useState } from "react";
import Name from "../components/name";
import Sidebar from "../components/sidebar.jsx";
import Main from "../components/main.jsx";

export default function Root() {
  // Add onScroll event listener to window
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let sectionRefList = [
        aboutSectionRef,
        projectSectionRef,
        contactSectionRef,
      ];
      sectionRefList.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.current.offsetTop;
        let height = sec.current.offsetHeight;
        let id = sec.current.getAttribute("id");
        console.log("here", top, offset, height, id);
        console.log(sec.current);

        if (top >= offset && top < offset + height) {
          setActiveMenuId(id);
        }
      });
    });
  }, []);

  function handleNavClick(index) {
    console.log("got index", index);
    switch (index) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveMenuId(0);
        break;
      case 1:
        projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveMenuId(1);
        break;
      case 2:
        contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveMenuId(2);
        break;
    }
  }

  //// REFS /////////////////////////////////////////////////////////////////////

  // Section Refs
  const aboutSectionRef = useRef();
  const projectSectionRef = useRef();
  const contactSectionRef = useRef();
  const sectionRefs = { aboutSectionRef, projectSectionRef, contactSectionRef };

  // Nav Menu Refs
  const menuItemRefs = useRef([]);

  const [activeMenuItemId, setActiveMenuId] = useState(0);

  return (
    <main id="container">
      <Sidebar
        handleNavClick={handleNavClick}
        ref={menuItemRefs}
        activeMenuItemId={activeMenuItemId}
      />
      <Main ref={sectionRefs} />
    </main>
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
