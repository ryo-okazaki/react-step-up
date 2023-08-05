import './App.css'
import {PrimaryButton} from "./components/atoms/buttons/PrimaryButton.jsx";
import {SecondaryButton} from "./components/atoms/buttons/SecondaryButton.jsx";
import {SearchInput} from "./components/molecules/SearchInput.jsx";

function App() {
  return (
    <div className="app">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br/>
      <SearchInput></SearchInput>
    </div>
  )
}

export default App
