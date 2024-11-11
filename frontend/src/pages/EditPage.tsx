import { useState } from "react"; // Import useState
import PageContainer from "../components/common/PageContainer";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import H1Icon from "@mui/icons-material/LooksOne";
import H2Icon from "@mui/icons-material/LooksTwo";
import H3Icon from "@mui/icons-material/Looks3";
import H4Icon from "@mui/icons-material/Looks4";
import LogoutIcon from "@mui/icons-material/ExitToApp"; // 나가기 버튼 아이콘
import SaveIcon from "@mui/icons-material/Save"; // 임시저장 버튼 아이콘
import PublishIcon from "@mui/icons-material/Publish"; // 출간하기 버튼 아이콘

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // State for content

  return (
    <PageContainer>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderRight: (theme) => ({
              ...theme.applyStyles("light", {
                borderRight: "1px solid #e0e0e0",
              }),
              ...theme.applyStyles("dark", {
                borderRight: "1px solid #30363d",
              }),
            }),
          }}
        >
          <Box
            sx={{
              borderBottom: (theme) => ({
                ...theme.applyStyles("light", {
                  borderBottom: "1px solid #e0e0e0",
                }),
                ...theme.applyStyles("dark", {
                  borderBottom: "1px solid #30363d",
                }),
              }),
              padding: "12px 48px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              value={title} // Bind title state
              onChange={(e) => setTitle(e.target.value)} // Update title state on change
              sx={{
                width: "100%",
                fontSize: "1.5rem",
              }}
              placeholder="제목을 입력하세요"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              padding: "12px 48px",
              height: "100px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
              borderBottom: (theme) => ({
                ...theme.applyStyles("light", {
                  borderBottom: "1px solid #e0e0e0",
                }),
                ...theme.applyStyles("dark", {
                  borderBottom: "1px solid #30363d",
                }),
              }),
            }}
          >
            {/* Tool icons */}
            <IconButton>
              <H1Icon />
            </IconButton>
            <IconButton>
              <H2Icon />
            </IconButton>
            <IconButton>
              <H3Icon />
            </IconButton>
            <IconButton>
              <H4Icon />
            </IconButton>
            <IconButton>
              <FormatBoldIcon />
            </IconButton>
            <IconButton>
              <FormatItalicIcon />
            </IconButton>
            <IconButton>
              <StrikethroughSIcon />
            </IconButton>
            <IconButton>
              <FormatQuoteIcon />
            </IconButton>
            <IconButton>
              <CodeIcon />
            </IconButton>
            <IconButton>
              <ImageIcon />
            </IconButton>
            <IconButton>
              <LinkIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              padding: "36px 48px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              multiline
              minRows={1} // 최소 줄 수
              maxRows={Infinity} // 최대 줄 수 (제한 없음)
              variant="outlined"
              value={content} // Bind content state
              onChange={(e) => setContent(e.target.value)} // Update content state on change
              placeholder="질문할 내용을 입력하세요..."
              sx={{
                flex: 1,
                width: "100%",
                border: "none",
                outline: "none",
                overflowY: "auto", // 세로 스크롤을 추가
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              height: "70px",
              display: "flex",
              padding: "0px 48px",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: (theme) => ({
                ...theme.applyStyles("light", {
                  borderTop: "1px solid #e0e0e0",
                }),
                ...theme.applyStyles("dark", {
                  borderTop: "1px solid #30363d",
                }),
              }),
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <LogoutIcon />
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                나가기
              </Typography>
            </Box>
            <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                  <SaveIcon />
                </IconButton>
                <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                  임시저장
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                  <PublishIcon />
                </IconButton>
                <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                  출간하기
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "150px",
                padding: "0px 48px",
              }}
            >
              <Box>
                <h1>{title}</h1>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                height: "100px",
                padding: "0px 48px",
              }}
            >
              <Box>
                <p>{content}</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default EditPage;
