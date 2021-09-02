import React from 'react';
import './App.css';
import Navbar from "../src/shared/navbar"
import MidComponent from "./shared/midComponent";
import Form from "./components/form"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MidComponent/>
      <Form/>
    </div>
  );
}

export default App;