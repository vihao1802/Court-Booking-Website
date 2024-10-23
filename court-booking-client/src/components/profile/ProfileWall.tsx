import { Edit } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { string } from "yup";

interface userProps {
  name: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
  location?: string;
  joinAt?: string;
}

const ProfileWall = ({ name, email }: userProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* wall */}
      <Box
        sx={{
          position: "absolute",
          height: "164px",
          width: "100%",
          overflow: "hidden",
          border: "1px solid white",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "-135px",
            zIndex: 0,
            height: "285px",
            width: "640px",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #4A19C3, #557EEA)",
            ["@media (min-width: 600px)"]: {
              top: "-128px",
              width: "1067px",
              height: "285px",
            },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "94px",
          position: "absolute",
          ["@media (min-width: 1024px)"]: {
            top: "52px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            marginBottom: "1em",
          }}
        >
          <Avatar
            src="https://static.wikia.nocookie.net/rezero/images/6/68/Emilia_ep.41_%283%29.jpg"
            sx={{
              width: "148px",
              height: "148px",
              border: "4px solid white",
              borderRadius: "50%",
              position: "relative",
            }}
            alt="your profile picture"
          ></Avatar>
          <Box
            sx={{
              color: "black",
              position: "absolute",
              bottom: 0,
              left: "auto",
              right: "0.5px",
              top: "auto",
              display: "flex",
              maxWidth: "2rem", // 'size-6' corresponds to 24px (6 * 4)
              height: "2rem", // Maintain square dimensions
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%", // For 'rounded-full'
              backgroundColor: "white",
              margin: "0.2rem",
              boxShadow: 3, // shadow-md in MUI corresponds to a boxShadow of 3
              ["@media (min-width: 1024px)"]: {
                right: "3px",
                maxWidth: "2rem", // 'size-8' corresponds to 32px (8 * 4)
                height: "2rem", // Maintain square dimensions for large screens
              },
            }}
          >
            <IconButton aria-label="Edit">
              <Edit
                sx={{
                  color: "rgb(66, 62 ,82)",
                  width: "1rem",
                  height: "1rem",
                }}
              ></Edit>
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="700">
            {name}
          </Typography>
          <Typography variant="body2" color="rgb(109 105 123)">
            {email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileWall;
