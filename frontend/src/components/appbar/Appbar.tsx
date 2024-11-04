import { Box, Container, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import { useColorScheme } from "@mui/material/styles";

function Appbar() {
  const { mode, setMode } = useColorScheme();

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

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
            gap: 2,
          }}
        >
          <AuthButton />
          <SearchIcon sx={{ cursor: "pointer" }} />
          <IconButton onClick={toggleMode} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Appbar;
