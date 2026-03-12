import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Success from "./pages/Success";
import Registry from "./pages/registry/Registry";

function App() {
return ( <BrowserRouter> <Routes>

```
    <Route path="/*" element={<AppRoutes />} />

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/success" element={<Success />} />

    <Route path="/registry" element={<Registry />} />

  </Routes>
</BrowserRouter>
```

);
}

export default App;
