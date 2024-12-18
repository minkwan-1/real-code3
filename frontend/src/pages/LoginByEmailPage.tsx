import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// interface SignUpCredentials {
//   username: string;
//   password: string;
// }

const LoginByEmailPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/signup", {
        username,
        password,
      });
      alert("회원가입이 완료되었습니다.");
      navigate("/signin"); // 로그인 페이지로 이동
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1>회원가입 테스트</h1>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default LoginByEmailPage;
