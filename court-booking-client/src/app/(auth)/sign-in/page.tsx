import { Box, Button, Link, TextField, Typography } from "@mui/material";

const SignInPage = () => {
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
          src={
            "https://assets.vogue.com/photos/58917fa297a3db337a24abf8/master/pass/maria-sharapova-tennis.jpg"
          }
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
          src={
            "https://assets.vogue.com/photos/58917fa297a3db337a24abf8/master/pass/maria-sharapova-tennis.jpg"
          }
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
            Đăng nhập
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
              label="Email"
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
            <Typography
              sx={{
                textAlign: "right",
              }}
            >
              <Link
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                href={"/password-recovery"}
              >
                Quên mật khẩu
              </Link>
            </Typography>
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
              Đăng nhập
            </Button>
          </Box>

          <Box>
            <Typography>
              Chưa có tài khoản.{" "}
              <Link
                sx={{
                  color: "green",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                href={"/sign-up"}
              >
                Đăng ký ngay!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
