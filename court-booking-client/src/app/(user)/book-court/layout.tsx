"use client";
import { Box } from "@mui/material";
import React, { createContext, useState } from "react";

export const BookCourtContext = createContext<{
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  startTime: string;
  setStartTime: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
}>({
  date: "",
  setDate: () => {},
  startTime: "",
  setStartTime: () => {},
  duration: "",
  setDuration: () => {},
});

const BookCourtLayout = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <BookCourtContext.Provider
      value={{ date, setDate, startTime, setStartTime, duration, setDuration }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          margin: "auto",
          padding: "40px 10px",
        }}
      >
        {children}
      </Box>
    </BookCourtContext.Provider>
  );
};

export default BookCourtLayout;
