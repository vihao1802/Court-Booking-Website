import {
  Avatar,
  Box,
  Button,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface BoxBookingButtonProps {
  rentalPricePerHour: number;
  minimumRentalTime: number;
  maximumRentalTime: number;
}

const BoxBookingButton = ({
  rentalPricePerHour,
  minimumRentalTime,
  maximumRentalTime,
}: BoxBookingButtonProps) => {
  return (
    <Box
      sx={{
        width: "30%",
        marginLeft: "auto",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "80px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "15px",
          border: "2px solid #DBDBDB",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography>Giá thuê</Typography>
          <Typography>
            {rentalPricePerHour.toLocaleString("vi-VN")} đ / 1 tiếng
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography>Giờ thuê tối thiểu</Typography>
          <Typography>{minimumRentalTime} tiếng</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography>Giờ thuê tối đa</Typography>
          <Typography>{maximumRentalTime} tiếng</Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            ":hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Đặt sân ngay
        </Button>
      </Box>
    </Box>
  );
};

export default BoxBookingButton;
