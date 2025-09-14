import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

function FileUpload({ label, onChange, name }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }

    if (onChange) onChange(e);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1} my={2}>
      {/* Upload Button */}
      <Button
        variant="contained"
        component="label"
        sx={{
          textTransform: "none",
          borderRadius: 3,
          px: 3,
          py: 1,
          fontWeight: 600,
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          color: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 14px rgba(0,0,0,0.25)",
          },
        }}
      >
        {label}
        <input type="file" hidden name={name} onChange={handleFileChange} />
      </Button>

      {/* File Info */}
      {file && (
        <Box display="flex" alignItems="center" gap={2} mt={1}>
          {preview && (
            <Box
              component="img"
              src={preview}
              alt="preview"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                objectFit: "cover",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
              }}
            />
          )}
          <Typography variant="body2" sx={{ fontWeight: 500, color: "#444" }}>
            {file.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default FileUpload;
