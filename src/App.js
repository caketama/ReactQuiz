import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NumberDisplay from "./components/NumberDisplay";
import NumberList from "./components/NumberDisplay";

function App() {
  /*const numberDisplay = numbers.map((number, key) => (
    <p key={key}>
      {p.key}
      </p>
  const [number, setNumber] = useState([...20]);
  const addToNumbers = newNumber => {
    setNumber([...number, newNumber]);
  };*/
  const numbers=[1,2,3,4]
  return (
    <div className="App">
      <Header>This is my awesome header!!</Header>
      <div className="Number">
        <NumberList numbers={numbers}/>
      </div>
    </div>
  );
}

export default App;
