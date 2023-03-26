import { useState } from 'react'
import './App.css'
import { InlineStyle } from "./components/InlineStyle.jsx";
import { CssModules } from "./components/CssModules.jsx";
import {StyledJsx} from "./components/StyledJsx.jsx";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}

export default App