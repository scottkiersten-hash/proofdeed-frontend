import Home from "../pages/home/page";
import About from "../pages/about/page";
import FAQ from "../pages/faq/page";
import HowItWorks from "../pages/how-it-works/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";
import Upload from "../pages/upload/page";
import Verify from "../pages/verify/page";
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
