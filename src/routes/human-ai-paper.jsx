import React, { useState, useEffect } from "react";
import PDF from "../assets/human-ai.pdf";

export default function TextAnalysis() {
  useEffect(() => hideNavbar());
  return (
    <>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}

function hideNavbar() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
}
