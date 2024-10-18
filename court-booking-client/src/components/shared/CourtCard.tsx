import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import React from "react";
import { useRouter } from "next/navigation";
import courtDemo from "@/assets/images/court_demo.png";

interface CourtProps {
  name: string;
  people: number;
  type: string;
}

const CourtCard = ({ name, people, type }: CourtProps) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "calc(50% - 12px)",
          md: "calc(33.33% - 12px)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={courtDemo.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {type} ● {people} người
        </Typography>
      </CardContent>

      <Rating name="read-only" value={4} readOnly sx={{ padding: "0 10px" }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="outlined"
          color="success"
          startIcon={<VisibilityOutlinedIcon />}
          sx={{
            width: "50%",
          }}
          onClick={() => router.push("/court/1")}
        >
          Chi tiết
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "50%",
          }}
          onClick={() => router.push("/book-court")}
        >
          Đặt ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourtCard;
