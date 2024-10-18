import { BookCourtContext } from "@/app/(user)/book-court/layout";
import { formatDate } from "@/utils/date";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";

const BookingInfoConfirmation = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const { date, startTime, duration } = useContext(BookCourtContext);
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          "& > *": {
            marginTop: "10px",
          },
        }}
      >
        {/* <Typography
          sx={{
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Lịch đặt
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>Ngày</Typography>
          <Typography>{formatDate(date)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>Giờ bắt đầu</Typography>
          <Typography>{startTime}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>Khoảng thời gian</Typography>
          <Typography>{duration}</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#e7e7e7",
            padding: "10px 0",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>Chi phí</Typography>
          <Typography>20.000 đ / 1 tiếng</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#e7e7e7",
            padding: "10px 0",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>Tổng tiền</Typography>
          <Typography>40.000 đ</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          marginTop: "30px",
        }}
      >
        <Button
          onClick={handleBack}
          sx={{
            color: "gray",
          }}
        >
          Quay lại
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            marginLeft: "10px",
            color: "white",
            backgroundColor: "var(--buttonColor)",
            ":hover": {
              backgroundColor: "var(--buttonHoverColor)",
            },
          }}
        >
          Hoàn tất
        </Button>
      </Box>
    </Box>
  );
};

export default BookingInfoConfirmation;
