import { Box, Typography } from "@mui/material";

const CourtDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        marginX: "auto",
        padding: "24px 0",
      }}
    >
      <Typography
        sx={{
          fontSize: "26px",
          fontWeight: "600",
        }}
      >
        Tennis Court A
      </Typography>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "24px 0",
        }}
      >
        <Box
          sx={{
            aspectRatio: "16/9",
            width: "600px",
            borderRadius: "20px",
          }}
        >
          <img
            src="https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
            alt="Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Name:</Typography>
            <Typography>Court A</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Price:</Typography>
            <Typography>66.66$</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Address:</Typography>
            <Typography>123 Berkshire Hathaway</Typography>
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "8px",
          padding: "20px 0",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 2",
            gridRow: "span 2",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px 0 0 10px",
            }}
            src={
              "https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
            }
          />
        </Box>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={
            "https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
          }
        />
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0 10px 0 0",
          }}
          src={
            "https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
          }
        />
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={
            "https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
          }
        />
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0 0 10px 0",
          }}
          src={
            "https://corsairathletics.com/images/2023/8/8/IMG_1449_o98sJ.JPG"
          }
        />
      </Box>
    </Box>
  );
};

export default CourtDetail;
