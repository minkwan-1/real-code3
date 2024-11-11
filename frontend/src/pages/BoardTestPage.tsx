import { useState } from "react";
import axios from "axios";
import PageContainer from "../components/common/PageContainer";

const BoardCreateTestPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createBoard = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setError("로그인이 필요합니다.");
      return;
    }

    if (title && description) {
      try {
        console.log("1111111111", token);
        const response = await axios.post(
          "http://localhost:3000/boards",
          { title, description },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Board created:", response.data);
        setTitle("");
        setDescription("");
        setError(null);
      } catch (error) {
        console.error("Error creating board:", error);
        setError("게시판 생성 중 오류가 발생했습니다.");
      }
    } else {
      setError("제목과 설명을 모두 입력하세요.");
    }
  };

  return (
    <PageContainer>
      <h2>Create a New Board</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={createBoard}>Add Board</button>
    </PageContainer>
  );
};

export default BoardCreateTestPage;
