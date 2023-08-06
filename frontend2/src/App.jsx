import { useState } from 'react'
import './App.css'
import { InlineStyle } from "./components/InlineStyle.jsx";
import { CssModules } from "./components/CssModules.jsx";
import {StyledJsx} from "./components/StyledJsx.jsx";
import {StyledComponents} from "./components/StyledComponents.jsx";
import {Emotion} from "./components/Emotion.jsx";
import axios from "axios";

function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}

export default App