import './App.css'
import {Router} from "./router/Router.jsx";
import {UserProvider} from "./providers/UserProvider.jsx";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  )
}

export default App
