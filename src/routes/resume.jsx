import PDF from "../assets/resume05102024.pdf";
import React, { useState, useEffect } from "react";

export default function Resume() {
  return (
    <>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}
