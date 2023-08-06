import './App.css'
import axios from "axios";

export default function App() {
  const onClickFetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => console.log(res))
  }

  return (
    <>
      <button onClick={onClickFetchData}>データ取得</button>
    </>
  )
}