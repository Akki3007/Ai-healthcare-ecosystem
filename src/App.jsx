import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DoctorsAvailability from "./pages/DoctorsAvailability";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/doctor-availability"
          element={<DoctorsAvailability />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;