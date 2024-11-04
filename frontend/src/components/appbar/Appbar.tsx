import { Box, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // SearchIcon 추가
import Logo from "./Logo";
import AuthButton from "./AuthButton";

function Appbar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        // bgcolor: "white",
        top: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
            justifyContent: "center",
            gap: 1,
          }}
        >
          <AuthButton />
          <SearchIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Container>
    </Box>
  );
}

export default Appbar;
