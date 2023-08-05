import {Route, Switch} from "react-router-dom";
import {Home} from "../Home.jsx";
import {Page1} from "../Page1.jsx";
import {Page1DetailA} from "../Page1DetailA.jsx";
import {Page1DetailB} from "../Page1DetailB.jsx";
import {Page2} from "../Page2.jsx";

export const Router = () => {
  return (
    <Switch>
      {/* Linkで定義したpathに一致するものをここで定義。一致したらそのコンポーネントを返す */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: {url} }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )} />
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
}