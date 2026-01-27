import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Upload from "../pages/upload/page";
import About from "../pages/about/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";
import Verify from "../pages/verify/page";
import HowItWorks from "../pages/how-it-works/page";
import FAQ from "../pages/faq/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
