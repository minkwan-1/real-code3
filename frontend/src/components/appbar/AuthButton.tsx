import { Box, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { slide1, slide2, slide3, kakao, google, naver } from "../../images"; // Add the image imports
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [slide1, slide2, slide3];

  const handleSocialLogin = (provider: string) => {
    let url = "";
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

    switch (provider) {
      case "google":
        url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
          import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
        }&redirect_uri=${REDIRECT_URI}/callback&response_type=code&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&prompt=select_account`;
        break;
      case "kakao":
        url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
          import.meta.env.VITE_APP_KAKAO_CLIENT_ID
        }&redirect_uri=${REDIRECT_URI}/callback&prompt=select_account`;
        break;
      case "naver":
        url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
          import.meta.env.VITE_APP_NAVER_CLIENT_ID
        }&redirect_uri=${REDIRECT_URI}/callback&state=naverLoginState&auth_type=reauthenticate`;
        break;
    }

    window.location.href = url;
  };

  return (
    <>
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
        onClick={handleOpen}
      >
        시작하기
      </Box>

      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              width: "800px",
              height: "500px",
              display: "flex",
              bgcolor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexDirection: "column",
              }}
            >
              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  gap: 1,
                }}
              >
                <IconButton
                  disableRipple
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                  sx={{ color: "black" }}
                >
                  {"<"}
                </IconButton>
                {images.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: currentSlide === index ? "#333" : "#ccc",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
                <IconButton
                  disableRipple
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % images.length)
                  }
                  sx={{ color: "black" }}
                >
                  {">"}
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "#f8f8f8",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: 8, right: 8, color: "black" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>

              <Box
                sx={{
                  flex: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Typography sx={{ mb: 2, fontSize: "16px", color: "black" }}>
                  소셜 계정으로 3초만에 시작하세요
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  {/* Use IconButton with images */}
                  <Box
                    onClick={() => handleSocialLogin("naver")}
                    sx={{
                      cursor: "pointer",
                      width: "250px",
                      height: "40px",
                    }}
                  >
                    <img
                      src={naver}
                      alt="Naver"
                      style={{
                        width: "100%",
                        height: "100%",
                        // objectFit: "cover",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => handleSocialLogin("kakao")}
                    sx={{ cursor: "pointer", width: "250px", height: "40px" }}
                  >
                    <img
                      src={kakao}
                      alt="Kakao"
                      style={{
                        width: "100%",
                        height: "100%",
                        // objectFit: "cover",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => handleSocialLogin("google")}
                    sx={{
                      cursor: "pointer",
                      width: "250px",
                      height: "40px",
                    }}
                  >
                    <img
                      src={google}
                      alt="Google"
                      style={{
                        width: "100%",
                        height: "100%",
                        // objectFit: "cover",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1.5,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Box
                  onClick={() => navigate("/login")}
                  sx={{
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "#666",
                    height: "60px",
                    width: "100%",
                    fontSize: "16px",
                  }}
                >
                  이메일로 시작하시겠어요?
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#666",
                    mt: 2,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  로그인 관련 상세 도움말
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AuthButton;
