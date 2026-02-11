import { Navigate } from "react-router-dom";

// Pages
import Home from "../pages/home";
import About from "../pages/about";
import FAQ from "../pages/faq";
import HowItWorks from "../pages/how-it-works";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Upload from "../pages/upload";
import Verify from "../pages/verify";
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

  // Auto / Dealer vertical
  { path: "/auto", element: <Auto /> },

  // Redirect legacy or unknown paths
  { path: "*", element: <NotFound /> },
];

export default routes;
