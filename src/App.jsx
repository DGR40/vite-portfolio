import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import swing from "./assets/swing2.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 onClick={() => click()}>Deploy Test</h1>
      <img src={swing} />
    </div>
  );
}

function click() {
  console.log("click!");
}

export default App;
