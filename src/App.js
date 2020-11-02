import React from "react";
import Core from "./components/Core";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <BrowserRouter>
        <h3 style={{ color: "darkgray" }}>Supervisor view grid</h3>
        <Core />
      </BrowserRouter>
    </div>
  );
}
export default App;
