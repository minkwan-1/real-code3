import { Box, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { slide1, slide2, slide3, google2 } from "../../images";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 구글 로그인 요청 함수
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:3000/auth/google`; // NestJS 구글 로그인 엔드포인트
  };

  // 슬라이더 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 슬라이더 이미지 배열
  const images = [slide1, slide2, slide3];

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
            {/* 왼쪽 이미지 슬라이더 */}
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

            {/* 오른쪽 콘텐츠 영역 */}
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

              {/* 위쪽 절반: 구글 로그인 버튼 */}
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
                  구글 아이디로 3초만에 시작해봐요!
                </Typography>
                <Box>
                  <img
                    src={google2}
                    alt="구글 로그인"
                    style={{
                      width: "100%",
                      height: "60px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={handleGoogleLogin}
                  />
                </Box>
              </Box>

              {/* 아래쪽 절반: 기타 옵션 */}
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
