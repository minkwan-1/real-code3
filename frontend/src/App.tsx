import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import LoginByEmailPage from "./pages/LoginByEmailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/login" element={<LoginByEmailPage />} />
    </Routes>
  );
}

export default App;
