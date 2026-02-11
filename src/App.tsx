import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";

/**
 * Scroll page to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Document Type Selector
 * Controls navigation only
 */
function DocumentTypeSelector() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "12px",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <label style={{ marginRight: 8 }}>Document type:</label>
      <select
        defaultValue="property"
        onChange={(e) => {
          if (e.target.value === "auto") {
            navigate("/auto");
          }
        }}
      >
        <option value="property">Property Deed</option>
        <option value="auto">Auto Title (Dealer)</option>
      </select>
    </div>
  );
}

/**
 * App Root
 */
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <DocumentTypeSelector />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
