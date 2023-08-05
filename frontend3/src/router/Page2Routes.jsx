import {Page2} from "../Page2.jsx";
import {UrlParameter} from "../UrlParameter.jsx";

export const page2Routes = [
  {
    path: "",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
]