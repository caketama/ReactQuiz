import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NumberButton from './components/NumberButton'
import HomePage from './components/Homepage'

function App() {

const [showComp, setShowComp] = useState(true);
  return <div className="App">
    <button onClick={ e => setShowComp(!showComp)}>Toggle</button>
    { showComp ? <HomePage/> : <NumberButton/>}
    </div>
}
export default App;
