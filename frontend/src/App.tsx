import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  EditPage,
  LoginByEmailPage,
  SignInPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/login" element={<LoginByEmailPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
