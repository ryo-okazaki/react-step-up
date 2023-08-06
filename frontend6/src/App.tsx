import './App.css'
import axios from "axios";
import {useState} from "react";
import {Todo} from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<any>([])

  const onClickFetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      })
  }

  return (
    <>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: any) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </>
  )
}