import './App.css'
import {Router} from "./router/Router.jsx";
import {UserProvider} from "./providers/UserProvider.jsx";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
