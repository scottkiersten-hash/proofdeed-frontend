import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./router";

export default function App() {

  return (

    <Router>

      <Routes>

        {/* ALL SITE ROUTES */}
        <Route path="/*" element={<AppRoutes />} />

      </Routes>

    </Router>

  );

}
