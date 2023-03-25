import { useState } from 'react'
import './App.css'
import {ChildArea} from "./components/ChildArea.jsx";

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onchangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onchangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  )
}

export default App