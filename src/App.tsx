import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/page";

import Government from "./pages/government/page";
import Automotive from "./pages/auto/page";
import Document from "./pages/document/page";

import About from "./pages/about/page";
import Blockchain from "./pages/blockchain/page";
import FAQ from "./pages/faq/page";
import Contact from "./pages/contact/page";
import Privacy from "./pages/privacy/page";
import Procurement from "./pages/procurement/page";

import Registry from "./pages/registry/page";
import Verify from "./pages/verify/page";

export default function App() {

  return (

    <Router>

      <Routes>

        {/* Main Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/government" element={<Government />} />

        <Route path="/auto" element={<Automotive />} />

        <Route path="/document" element={<Document />} />


        {/* Information */}

        <Route path="/about" element={<About />} />

        <Route path="/blockchain" element={<Blockchain />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/procurement" element={<Procurement />} />


        {/* Certification System */}

        <Route path="/registry" element={<Registry />} />

        <Route path="/verify/:certId" element={<Verify />} />


      </Routes>

    </Router>

  );

}
