import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

interface SectionProps {
  sectionHeader: string;
  sectionButton?: string;
  children: React.ReactNode;
  className?: string;
}
const Section: React.FC<SectionProps> = ({
  sectionHeader,
  sectionButton,
  children,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
          }}
        >
          {sectionHeader}
        </Typography>
        {sectionButton && (
          <Button
            variant="text"
            sx={{
              color: "rgb(67 97 238)",
            }}
          >
            {sectionButton}
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid rgb(235 238 253 )",
          borderRadius: "8px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;
