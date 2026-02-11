import Home from "../pages/home/page";

import About from "../pages/about/index";
import FAQ from "../pages/faq/index";
import HowItWorks from "../pages/how-it-works/index";
import Privacy from "../pages/privacy/index";
import Terms from "../pages/terms/index";
import Upload from "../pages/upload/index";
import Verify from "../pages/verify/index";
import Auto from "../pages/Auto";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/how-it-works", element: <HowItWorks /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/upload", element: <Upload /> },
  { path: "/verify", element: <Verify /> },
  { path: "/auto", element: <Auto /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
