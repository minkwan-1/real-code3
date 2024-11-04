import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate("/")}
      sx={{ fontWeight: "bold", fontSize: "20px" }}
    >
      RealCode_
    </Box>
  );
};

export default Logo;
