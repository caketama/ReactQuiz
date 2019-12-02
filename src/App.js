import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NumberDisplay from "./components/NumberDisplay";

function App() {
  /*const numberDisplay = numbers.map((number, key) => (
    <p key={key}>
      {p.key}
      </p>*/
   
  return (
    <div className="App">
      <Header>This is my awesome header!!</Header>
      <div className="Number">
        <button onClick={NumberDisplay}>Test</button>
      </div>
    </div>
  );
}

export default App;
