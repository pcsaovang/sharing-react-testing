import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
