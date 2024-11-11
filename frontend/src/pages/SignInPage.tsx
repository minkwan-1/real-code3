import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// interface SignInCredentials {
//   username: string;
//   password: string;
// }

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        username,
        password,
      });

      // 로그인 성공 시 토큰을 로컬 스토리지에 저장
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("username", username);
      alert("로그인 성공!");
      navigate("/"); // 로그인 후 랜딩 페이지로 이동
    } catch (error) {
      console.log(error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1>로그인 테스트</h1>
      <form onSubmit={handleSignIn}>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignInPage;
