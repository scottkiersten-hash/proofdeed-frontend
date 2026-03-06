import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

/* ===========================
SCROLL TO TOP ON ROUTE CHANGE
=========================== */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ===========================
APP
=========================== */

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>

        <ScrollToTop />

        <Routes>

          {/* Existing Site Routes */}
          <Route path="/*" element={<AppRoutes />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
