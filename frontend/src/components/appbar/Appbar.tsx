import { Box, Container, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import { useColorScheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignOutButton from "./SignOutButton";
function Appbar() {
  const { mode, setMode } = useColorScheme();
  const [username, setUsername] = useState<string | null>(null);

  const navigate = useNavigate(); // navigate 훅을 추가

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // 로그인된 상태에서 localStorage에 저장된 username을 가져옴
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      // 실제 앱에서는 여기서 API 호출을 통해 사용자 정보를 가져올 수 있음
      // 예시로 username을 localStorage에서 가져옴 (백엔드에서 응답받은 username을 저장해야 함)
      setUsername(localStorage.getItem("username") || "User"); // 실제로는 서버에서 받은 값을 저장
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        top: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: mode === "dark" ? "grey.900" : "white",
        color: mode === "dark" ? "white" : "black",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {username ? (
            <>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                {username}
              </Typography>
              <SignOutButton />
            </>
          ) : (
            <AuthButton />
          )}

          <IconButton
            sx={{ cursor: "pointer", marginLeft: "10px" }}
            color="inherit"
          >
            <SearchIcon />
          </IconButton>

          <IconButton onClick={toggleMode} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate("/edit")}>
            <EditIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Appbar;
