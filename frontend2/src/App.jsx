import { useState } from 'react'
import './App.css'
import { InlineStyle } from "./components/InlineStyle.jsx";
import { CssModules } from "./components/CssModules.jsx";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}

export default App