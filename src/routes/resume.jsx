import PDF from "../assets/Resume04182024.pdf";
import React, { useState, useEffect } from "react";

export default function Resume() {
  return (
    <>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}
