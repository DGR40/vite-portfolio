import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
/* existing imports */
import Root from "./routes/root";
import Resume from "./routes/resume";
import TextAnalysis from "./routes/text-mining-paper";
import HumanAI from "./routes/human-ai-paper";
import "./index.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/text-analysis",
    element: <TextAnalysis />,
  },
  {
    path: "/human-ai.pdf",
    element: <HumanAI />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <SideBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
