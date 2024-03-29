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
    <RouterProvider router={router} />
  </React.StrictMode>
);
