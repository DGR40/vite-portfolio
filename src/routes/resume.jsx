import PDF from "../assets/dgrResume2023pdf-1.pdf";
import React, { useState, useEffect } from "react";

export default function Resume() {
  useEffect(() => hideNavbar());
  return (
    <>
      <h1>resume</h1>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}

function hideNavbar() {
  $("#navbar").hide();
  $("#sidebar").hide();
}
