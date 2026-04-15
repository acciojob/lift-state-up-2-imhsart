
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import ChildComponent from "./ChildComponent";


const App = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <div>{inputValue}</div>
        <ChildComponent inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  )
}

export default App
