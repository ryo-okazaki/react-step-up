import {Route, Switch} from "react-router-dom";
import {Home} from "../Home.jsx";
import {Page2} from "../Page2.jsx";
import {page1Routes} from "./Page1Routes.jsx";

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
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )} />
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
}