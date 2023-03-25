import { useState, useCallback, useMemo } from 'react'
import './App.css'
import {ChildArea} from "./components/ChildArea.jsx";

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onchangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  // アロー関数で定義した関数は、毎回新しい関数を生成していると判断している
  // propsとしては毎回違う関数と認定するので、propsが変わっているという判定になる
  // そのため、ChildAreaが毎回更新されてしまう

  // useCallbackはuseEffectと一緒で、第二引数に監視したい値を入れる
  // useCallbackを使うと、最初に生成した関数をずっと使うという意味

  const temp = useMemo(() => 1 + 3, []);
  // 再レンダリングの度に計算しなくて済むようになる
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onchangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea
        open={open}
        onClickClose={onClickClose}
      />
    </div>
  )
}

export default App