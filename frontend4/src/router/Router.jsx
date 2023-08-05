import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Top} from "../components/pages/Top.jsx";
import {Users} from "../components/pages/Users.jsx";
import {DefaultLayout} from "../components/templates/DefaultLayout.jsx";
import {HeaderOnly} from "../components/templates/HeaderOnly.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>

        <Route path='/users'>
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}