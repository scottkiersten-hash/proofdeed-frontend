import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Auto from "../pages/Auto";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auto",
    element: <Auto />,
  },
];

export default routes;
