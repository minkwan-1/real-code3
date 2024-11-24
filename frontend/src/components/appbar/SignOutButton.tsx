import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();
  const handleSignOut = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: "64px",
        height: "28px",
        border: "1px solid #959595",
        borderRadius: "16px",
        color: "#666",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleSignOut}
    >
      로그아웃
    </Box>
  );
};

export default SignOutButton;
