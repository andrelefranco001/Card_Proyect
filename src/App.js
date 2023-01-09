import React from "react";
import Cards from "./Components/Cards";
import "./App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="NavB">
      <NavBar />
      <div className="App">
        <Cards />
      </div>
    </div>
  );
}

export default App;
