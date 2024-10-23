"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Box,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { PhoneIphone, Edit, Email, LocationOn } from "@mui/icons-material";
import dayjs from "dayjs";
import ProfileWall from "@/components/profile/ProfileWall";
import Section from "@/components/profile/ProfileSection";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    joinAt: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Nguyễn Huy Hoàng",
        email: "hoanghuynguyen22@gmail.com",
        phoneNumber: "+84239484752",
        location: "Ho Chi Minh City",
        joinAt: dayjs("2021-10-21").format("MMMM YYYY"),
      });
      setLoading(false);
    }, 1000);
  }, [user]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* top part */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "white",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        {/* top of top part */}
        <ProfileWall name={user.name} email={user.email} />

        {/* bottom of top part */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
            gap: "0.75rem",
          }}
        >
          <Divider
            sx={{
              width: "100%",
              fontSize: "0.875rem",
              fontWeight: "200",
              fontStyle: "italic",
              color: "rgb(109, 105, 123)",
            }}
          >
            Joined since {user.joinAt.toString()}
          </Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(67 97 238)",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                0
              </Typography>
              <Typography variant="body2" color="rgb(109 105 123)">
                Booking made
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(67 97 238)",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                0
              </Typography>
              <Typography variant="body2" color="rgb(109 105 123)">
                Booking hours
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* bottom part */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "1rem",
          width: "100%",
          maxWidth: "1056px",
          padding: "1rem",
        }}
      >
        {/* Booking */}
        <Section sectionHeader={"My Bookings"} sectionButton={"See all"}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography>Mon</Typography>
              <Typography
                sx={{
                  color: "rgb(67 97 238)",
                  fontWeight: "700",
                  fontSize: "2.5rem",
                }}
              >
                21
              </Typography>
              <Typography>Oct</Typography>
            </Box>
            <Box>
              <Divider orientation="vertical"></Divider>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "0.7rem", // For 'typography-caption', using a small text style
                    border: "0.5px solid transparent", // For 'border-0.5', 'border-solid', and 'border-transparent'
                    borderRadius: "4px", // For 'rounded'
                    padding: "0.15rem",
                    fontWeight: "bold", // For 'font-bold'
                    textTransform: "uppercase", // For 'uppercase'
                    backgroundColor: "gray", // 'bg-primary-50' can be mapped to MUI's theme color shades
                    color: "text.secondary", // 'text-blue-grey-900' mapped to MUI's theme text color
                  }}
                >
                  Futsal
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    typography: "caption", // For 'typography-micro', using a small text style
                    border: "0.5px solid", // 'border-0.5' and 'border-solid'
                    borderColor: "destructive.main", // 'border-destructive-600'
                    borderRadius: "4px", // 'rounded'
                    paddingX: "4px", // 'px-1' translates to 4px horizontal padding
                    paddingY: "2px", // 'py-0.5' translates to 2px vertical padding
                    fontWeight: "bold", // 'font-bold'
                    textTransform: "uppercase", // 'uppercase'
                    backgroundColor: "red", // 'bg-destructive-600'
                    color: "white",
                  }}
                >
                  Pending
                </Button>
              </Box>
              <Box sx={{ marginBottom: "0.2rem" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  This is court name
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Typography variant="body2">21 Oct 2024, Monday</Typography>
                <Typography variant="body2">09:00AM - 11:00AM</Typography>
              </Box>
            </Box>
          </Box>
        </Section>
        {/* Contact */}
        <Section sectionHeader={"Contacts"} sectionButton={"Edit"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  color: "gray",
                }}
              >
                EMAIL
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <Email />
                <Typography>hoanghuynguyen711@gmail.com</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  color: "gray",
                }}
              >
                PHONE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <PhoneIphone />
                <Typography>+84234534234</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  color: "gray",
                }}
              >
                LOCATION
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <LocationOn />
                <Typography>Ho Chi Minh City 70000</Typography>
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </Box>
  );
};

export default Profile;
