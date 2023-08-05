import './App.css'
import {PrimaryButton} from "./components/atoms/buttons/PrimaryButton.jsx";
import {SecondaryButton} from "./components/atoms/buttons/SecondaryButton.jsx";
import {SearchInput} from "./components/molecules/SearchInput.jsx";
import {UserCard} from "./components/organisms/user/UserCard.jsx";

function App() {
  return (
    <div className="app">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br/>
      <SearchInput></SearchInput>
      <UserCard />
    </div>
  )
}

export default App
