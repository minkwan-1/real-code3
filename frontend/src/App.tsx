import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  EditPage,
  LoginByEmailPage,
  SignInPage,
  BoardTestPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/login" element={<LoginByEmailPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/test" element={<BoardTestPage />} />
    </Routes>
  );
}

export default App;
