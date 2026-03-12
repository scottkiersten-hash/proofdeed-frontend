import type { RouteObject } from "react-router-dom";

import Success from "../pages/Success";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Upload from "../pages/upload/page";
import About from "../pages/about/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";
import Verify from "../pages/verify/page";
import HowItWorks from "../pages/how-it-works/page";
import FAQ from "../pages/faq/page";

import Document from "../pages/document/page";
import DocumentIntake from "../pages/document/intake/page";

import Auto from "../pages/auto/page";
import AutoIntake from "../pages/auto/intake/page";

import Government from "../pages/government/page";
import GovernmentUseCases from "../pages/government/use-cases/page";
import GovernmentSecurity from "../pages/government/security/page";

import Affiliates from "../pages/affiliates/page";
import Blockchain from "../pages/blockchain/page";
import Procurement from "../pages/procurement/page";
import Contact from "../pages/contact/page";
import Inquiry from "../pages/inquiry/page";
import TechnicalPackage from "../pages/technical-package/page";
import RfpFramework from "../pages/rfp-framework/page";

import DocumentCertificate from "../pages/certificate/document/page";
import AutomotiveCertificate from "../pages/certificate/automotive/page";
import GovernmentCertificate from "../pages/certificate/government/page";

import TechnicalProcess from "../pages/technical-process/page";
import Signup from "../pages/Signup";

const routes: RouteObject[] = [

  /* CORE */
  { path: "/", element: <Home /> },
  { path: "/upload", element: <Upload /> },
 { path: "/verify", element: <Verify /> },
{ path: "/verify/:certId", element: <Verify /> },
  { path: "/success", element: <Success /> },

  /* INFORMATION */
  { path: "/about", element: <About /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/how-it-works", element: <HowItWorks /> },
  { path: "/blockchain", element: <Blockchain /> },

  /* INDUSTRIES */

  /* DOCUMENT / INSTITUTIONAL */
  { path: "/document", element: <Document /> },
  { path: "/document/intake", element: <DocumentIntake /> },

  /* AUTOMOTIVE */
  { path: "/auto", element: <Auto /> },
  { path: "/auto/intake", element: <AutoIntake /> },

  /* GOVERNMENT */
  { path: "/government", element: <Government /> },
  { path: "/government/use-cases", element: <GovernmentUseCases /> },
  { path: "/government/security", element: <GovernmentSecurity /> },

  /* CERTIFICATES */
  { path: "/certificate/document", element: <DocumentCertificate /> },
  { path: "/certificate/automotive", element: <AutomotiveCertificate /> },
  { path: "/certificate/government", element: <GovernmentCertificate /> },

  /* BUSINESS */
  { path: "/affiliates", element: <Affiliates /> },
  { path: "/procurement", element: <Procurement /> },
  { path: "/contact", element: <Contact /> },
  { path: "/inquiry", element: <Inquiry /> },

  /* ENTERPRISE */
  { path: "/technical-package", element: <TechnicalPackage /> },
  { path: "/rfp-framework", element: <RfpFramework /> },
  { path: "/technical-process", element: <TechnicalProcess /> },

  /* AUTH */
  { path: "/signup", element: <Signup /> },

  /* FALLBACK */
  { path: "*", element: <NotFound /> }

];

export default routes;
