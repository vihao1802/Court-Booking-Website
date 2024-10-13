import { Box, Button, Link, TextField, Typography } from "@mui/material";

const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        margin: "0",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          position: "relative",
          width: "50%",
        }}
      >
        <Box
          component="img"
          src={"https://i.ebayimg.com/images/g/bfEAAOSwaipjrBTc/s-l1200.jpg"}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "blur(0.5px)",
            opacity: "0.7",
          }}
        />
        <Box
          component="img"
          src={"https://i.ebayimg.com/images/g/bfEAAOSwaipjrBTc/s-l1200.jpg"}
          sx={{
            position: "absolute",
            top: "0",
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },
          display: "flex",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            "& > * + *": {
              marginTop: "20px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            Đăng ký tài khoản
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Tên đăng nhập"
              variant="outlined"
              margin="dense"
              size="medium"
              color="success"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              color="success"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Số điện thoại"
              variant="outlined"
              margin="dense"
              size="medium"
              color="success"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mật khẩu"
              variant="outlined"
              margin="dense"
              size="medium"
              color="success"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Xác nhận mật khẩu"
              variant="outlined"
              margin="dense"
              size="medium"
              color="success"
            />
            <Button
              size="large"
              sx={{
                marginTop: "10px",
                width: "100%",
                color: "white",
                backgroundColor: "green",
                ":hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              Đăng ký
            </Button>
          </Box>

          <Box>
            <Typography>
              Đã có tài khoản.{" "}
              <Link
                sx={{
                  color: "green",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                href={"/sign-in"}
              >
                Đăng nhập ngay!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
