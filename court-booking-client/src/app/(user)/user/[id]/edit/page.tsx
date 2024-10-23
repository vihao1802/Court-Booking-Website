"use client";
import ProfileWall from "@/components/profile/ProfileWall";
import Section from "@/components/profile/ProfileSection";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import React from "react";
import ProfileTextField from "@/components/profile/ProfileTextField";
import ProfileAutocomplete from "@/components/profile/ProfileAutocomplete";
import ProfileDatePicker from "@/components/profile/ProfileDatePicker";
import BasicDatePicker from "@/components/book-court/DatePicker";

const EditProfile = () => {
  const gender = [
    {
      id: "1",
      label: "Male",
    },
    {
      id: "2",
      label: "Female",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
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
        <ProfileWall
          name={"Nguyễn Huy Hoàng"}
          email={"hoanghuynguyen22@gmail.com"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Section sectionHeader={"AVATAR"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Avatar
                src="https://static.wikia.nocookie.net/rezero/images/6/68/Emilia_ep.41_%283%29.jpg"
                alt="your profile avatar"
                sx={{ width: "110px", height: "110px" }}
              />
              <Button variant="outlined" startIcon={<CameraAlt />}>
                Edit photo
              </Button>
            </Box>
          </Section>
          <Section sectionHeader={"CONTACT"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <ProfileTextField
                id="email"
                label="Email"
                variant="outlined"
                disabled={true}
              >
                Chúng tôi sẽ gửi các thông báo về lịch đặt chỗ của bạn đến địa
                chỉ email này.
              </ProfileTextField>

              <ProfileTextField
                id="phone-number"
                label="Số điện thoại"
                variant="outlined"
              />
            </Box>
          </Section>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexdirection: "column",
            gap: "1rem",
          }}
        >
          <Section sectionHeader="PERSONAL">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <ProfileTextField
                id="name"
                label="Tên của bạn"
                variant="outlined"
              >
                Tên này sẽ được sử dụng trong các thông báo và hóa đơn.
              </ProfileTextField>
              <ProfileAutocomplete
                id="gender"
                options={gender}
                label="Gender"
              />
              <ProfileDatePicker
                id="day-of-birth"
                label="Ngày sinh"
                size="small"
              />
              <ProfileTextField
                id="location"
                label="Thành phố bạn sống"
                variant="outlined"
              />
            </Box>
          </Section>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px", // Equivalent to 'p-4' (4 * 4px)
        }}
      >
        <Button
          variant="outlined"
          type="button"
          sx={{
            typography: "subtitle2", // Equivalent to 'typography-sub'
            display: "flex", // Equivalent to 'flex'
            cursor: "pointer", // Equivalent to 'cursor-pointer'
            alignItems: "center", // Equivalent to 'items-center'
            justifyContent: "center", // Equivalent to 'justify-center'
            borderRadius: "4px", // Equivalent to 'rounded'
            border: "1px solid transparent", // Equivalent to 'border border-solid border-transparent'
            textAlign: "center", // Equivalent to 'text-center'
            outline: "none", // Equivalent to 'outline-none'
            transition: "all 0.3s ease", // Equivalent to 'transition'
            backgroundColor: "primary.main", // Equivalent to 'bg-primary'
            color: "white", // Equivalent to 'text-white'
            height: "40px", // Equivalent to 'h-10'
            paddingY: "10px", // Equivalent to 'py-2.5'
            width: "200px", // Equivalent to 'w-[200px]'

            "&:hover": {
              color: "white", // Equivalent to 'hover:text-white'
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Equivalent to 'hover:shadow-md'
            },

            "&:focus": {
              borderColor: "primary.dark", // Equivalent to 'focus:border-primary-700'
            },

            "&:active": {
              boxShadow: "none", // Equivalent to 'active:shadow-none'
              backgroundColor: "primary.dark", // Equivalent to 'active:bg-primary-800'
              borderColor: "transparent", // Equivalent to 'active:border-transparent'
            },

            "&:disabled": {
              backgroundColor: "grey.100", // Equivalent to 'disabled:bg-blue-grey-50'
              color: "grey.400", // Equivalent to 'disabled:text-blue-grey-200'
              cursor: "not-allowed", // Equivalent to 'disabled:cursor-not-allowed'
              boxShadow: "none", // Equivalent to 'disabled:shadow-none'
            },
          }}
        >
          Update Account
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;
