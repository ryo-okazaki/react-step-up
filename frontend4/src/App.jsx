import './App.css'
import {PrimaryButton} from "./components/atoms/buttons/PrimaryButton.jsx";
import {SecondaryButton} from "./components/atoms/buttons/SecondaryButton.jsx";

function App() {
  return (
    <div className="app">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  )
}

export default App
