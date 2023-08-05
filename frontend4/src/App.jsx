import './App.css'
import {Router} from "./router/Router.jsx";

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
    <Router />
  )
}

export default App
