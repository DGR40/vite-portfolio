import React, { useState, useEffect } from "react";
import PDF from "../assets/text-analysis.pdf";

export default function TextAnalysis() {
  return (
    <>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}
