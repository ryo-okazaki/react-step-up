import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to='/page1'>Page1</Link>
        <br />
        <Link to='/page2'>Page2</Link>
      </div>
      <Switch>
        {/* Linkで定義したpathに一致するものをここで定義。一致したらそのコンポーネントを返す */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App
