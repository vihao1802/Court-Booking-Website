"use client";
import { Box, Link, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Confetti from "react-confetti";

const Recovered = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        borderRadius: 4,
        padding: 3,
        maxWidth: "420px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Confetti tweenDuration={5000} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <CheckCircleIcon
          fontSize="large"
          sx={{
            color: "green",
            marginRight: "10px",
          }}
        />
        <Typography
          sx={{
            fontSize: "22px",
          }}
        >
          Cài lại mật khẩu thành công
        </Typography>
      </Box>

      <Typography>
        <Link
          sx={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none",
            ":hover": {
              color: "green",
            },
            fontSize: "20px",
          }}
          href={"/sign-in"}
        >
          Trở về trang đăng nhập
        </Link>
      </Typography>
    </Box>
  );
};

export default Recovered;
