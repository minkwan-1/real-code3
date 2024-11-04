import React, { useState } from "react"; // Import useState
import PageContainer from "../components/common/PageContainer";
import { Box, TextField, IconButton } from "@mui/material";
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

const EditPage = () => {
  const [title, setTitle] = useState(""); // State for title
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
              minRows={10}
              variant="outlined"
              value={content} // Bind content state
              onChange={(e) => setContent(e.target.value)} // Update content state on change
              placeholder="내용을 입력하세요"
              sx={{
                flex: 1,
                width: "100%",
                border: "none",
                outline: "none",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "36px 48px",
          }}
        >
          {/* Preview area */}
          <h1>{title}</h1> {/* Display title */}
          <p>{content}</p> {/* Display content */}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default EditPage;
