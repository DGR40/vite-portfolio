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
  return (
    <main id="container">
      <Sidebar />
      <Main />
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
