import {Route, Switch} from "react-router-dom";
import {Home} from "../Home.jsx";
import {page1Routes} from "./Page1Routes.jsx";
import {page2Routes} from "./Page2Routes.jsx";

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
      <Route
        path="/page2"
        render={({ match: {url} }) => (
          <Switch>
            {page2Routes.map((route) => (
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
      >
    </Switch>
  );
}