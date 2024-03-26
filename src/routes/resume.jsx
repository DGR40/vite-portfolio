import PDF from "../assets/dgrResume2023-Spring.pdf";
import React, { useState, useEffect } from "react";

export default function Resume() {
  return (
    <>
      <iframe src={PDF} style={{ width: "100vw", height: "100vh" }} />
    </>
  );
}
