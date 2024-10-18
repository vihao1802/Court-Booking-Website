"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepLabel } from "@mui/material";
import { useParams } from "next/navigation";
import BookingDetails from "@/components/book-court/BookingDetails";
import { ColorlibStepIcon } from "@/components/styles/StepperStyles";

const steps = ["Đặt lịch", "Thanh toán", "Hoàn tất"];

const BookCourtDateTimePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          margin: "auto",
          padding: "40px 10px",
        }}
      >
        <Stepper
          activeStep={0}
          sx={{
            "& .Mui-active": {
              "& .MuiStepIcon-root": {
                color: "var(--buttonColor)",
              },
              "& .MuiStepConnector-line": {
                color: "var(--buttonColor)",
              },
            },
            "& .Mui-completed": {
              "& .MuiStepIcon-root": {
                color: "var(--buttonColor)",
              },
              "& .MuiStepConnector-line": {
                borderColor: "var(--buttonColor)",
              },
            },
            marginBottom: "40px",
          }}
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  padding: "5px",
                }}
              >
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <BookingDetails />
      </Box>
    </Box>
  );
};

export default BookCourtDateTimePage;