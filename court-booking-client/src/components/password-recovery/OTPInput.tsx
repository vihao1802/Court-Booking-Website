"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  TextField,
  Typography,
  styled,
  Button,
  Link,
} from "@mui/material";
import { BiErrorCircle } from "react-icons/bi";
import { RecoveryContext } from "@/app/(auth)/password-recovery/page";
import toast from "react-hot-toast";

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  // gap: theme.spacing(2),
  // marginBottom: theme.spacing(2),
  // [theme.breakpoints.down("sm")]: {
  //   gap: theme.spacing(1),
  // },
}));

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  width: "3rem",
  height: "3rem",
  [theme.breakpoints.down("sm")]: {
    width: "2rem",
    height: "2rem",
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
  },
  "& input": {
    textAlign: "center",
    fontSize: "1.5rem",
    padding: 0,
  },
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
}));

const OTPInput = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { setPage, email, otp } = useContext(RecoveryContext);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setError("");

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "Enter") {
      verifyOTP();
    }
  };

  const resendOTP = () => {
    console.log("OTP: " + otp + "," + "email: " + email);
  };

  const verifyOTP = () => {
    if (code.some((digit) => digit === "")) {
      setError("Hãy nhập đầy đủ 4 chữ số.");
    } else {
      if (parseInt(code.join("")) !== otp) {
        setError("Mã không chính xác. Vui lòng nhập lại.");
      } else {
        setError("");
        toast.success("Xác nhận mã OTP thành công!");
        setPage("reset");
        // alert("Mã hợp lệ!");
      }
    }
  };

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
        "& > * + *": {
          marginTop: "15px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
        }}
      >
        Xác nhận mã
      </Typography>
      <Typography variant="body1" color="gray">
        Nhập mã OTP 4 chữ số đã gửi đến email của bạn.
      </Typography>
      <InputContainer>
        {code.map((digit, index) => (
          <StyledTextField
            color="success"
            key={index}
            inputRef={(el) => (inputRefs.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(index, e)
            }
            error={!!error}
          />
        ))}
      </InputContainer>
      {error && (
        <ErrorMessage>
          <BiErrorCircle />
          {error}
        </ErrorMessage>
      )}
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Button
          type="submit"
          size="large"
          onClick={verifyOTP}
          sx={{
            width: "100%",
            color: "white",
            transition: "background-color 0.3s",
            backgroundColor: "var(--buttonColor)",
            ":hover": {
              backgroundColor: "var(--buttonHoverColor)",
            },
          }}
        >
          Xác nhận
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          alignItems: {
            xs: "center",
            sm: "normal",
          },
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Link
          sx={{
            color: "darkgray",
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(
              ","
            ),
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
          }}
          onClick={() => setPage("send-email")}
        >
          Quay về
        </Link>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          Chưa nhận được mã?{" "}
          <Box
            component={"span"}
            sx={{
              color: "darkgray",
              cursor: "pointer",
              ":hover": {
                color: "var(--buttonColor)",
                textDecoration: "underline",
              },
            }}
            onClick={() => resendOTP()}
          >
            Gửi lại OTP
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default OTPInput;