import './App.css'
import {PrimaryButton} from "./components/atoms/buttons/PrimaryButton.jsx";
import {SecondaryButton} from "./components/atoms/buttons/SecondaryButton.jsx";
import {SearchInput} from "./components/molecules/SearchInput.jsx";
import {UserCard} from "./components/organisms/user/UserCard.jsx";

const user = {
  name: 'test',
  image: 'https://source.unsplash.com/ZCHj_2lJP00',
  email: 'test@example.com',
  phone: '090-1111-2222',
  company: {
    name: 'test株式会社',
  },
  website: 'https://google.com'
}

function App() {
  return (
    <div className="app">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br/>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  )
}

export default App
