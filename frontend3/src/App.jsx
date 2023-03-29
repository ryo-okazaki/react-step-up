import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import './App.css'
import { Page1DetailA } from "./Page1DetailA.jsx";
import { Page1DetailB } from "./Page1DetailB.jsx";

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
        <Route
          path="/page1"
          render={() => (
            <Switch>
              <Route exact path='/page1'>
                <Page1 />
              </Route>
              <Route path='/page1/detailA'>
                <Page1DetailA />
              </Route>
              <Route path='/page2/detailB'>
                <Page1DetailB />
              </Route>
            </Switch>
          )} />
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App
