import { Box, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";

interface ProfileDatePickerProps {
  id: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  label?: string;
  size?: "small" | "medium";
  children?: React.ReactNode;
}

const ProfileDatePicker: React.FC<ProfileDatePickerProps> = ({
  minDate,
  maxDate,
  label,
  children,
}) => {
  const [date, setDate] = useState(dayjs().toISOString());

  const handleDateChange = (val: Dayjs | null) => {
    if (val) {
      setDate(val.toISOString());
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label={label}
            minDate={minDate}
            maxDate={maxDate}
            defaultValue={date ? dayjs(date) : null}
            onChange={handleDateChange}
            slotProps={{
              textField: {
                InputProps: {
                  readOnly: true,
                },
              },
            }}
            sx={{
              width: "100%",
              ".MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--buttonColor)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--buttonColor)",
                },
              },
              ".MuiFormLabel-root": {
                "&.Mui-focused": {
                  color: "var(--buttonColor)",
                },
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {children && (
        <Typography
          sx={{
            color: "gray",
            fontSize: "0.7rem",
          }}
        >
          {children}
        </Typography>
      )}
    </Box>
  );
};

export default ProfileDatePicker;
