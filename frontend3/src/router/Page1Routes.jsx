import {Page1} from "../Page1.jsx";
import {Page1DetailA} from "../Page1DetailA.jsx";
import {Page1DetailB} from "../Page1DetailB.jsx";

export const page1Routes = [
  {
    path: "",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
]