"use client";
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
      <div>{children}</div>
    </BookCourtContext.Provider>
  );
};

export default BookCourtLayout;
