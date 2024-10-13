"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { RecoveryContext } from "@/app/(auth)/password-recovery/page";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Mật khẩu xác nhận không khớp")
    .required("Xác nhận mật khẩu là bắt buộc"),
});

const ResetPassword = () => {
  const { setPage, setShowConfetti } = useContext(RecoveryContext);

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
          marginTop: "20px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
        }}
      >
        Tạo mật khẩu mới
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            // handle form submission
            console.log(values);
            setPage("recovered");
            setShowConfetti(true);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                id="password"
                name="password"
                label="Mật khẩu"
                variant="outlined"
                margin="dense"
                size="medium"
                color="success"
                error={touched.password && !!errors.password}
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Xác nhận mật khẩu"
                variant="outlined"
                margin="dense"
                size="medium"
                color="success"
                error={touched.confirmPassword && !!errors.confirmPassword}
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <Button
                type="submit"
                size="large"
                sx={{
                  marginTop: "10px",
                  width: "100%",
                  color: "white",
                  backgroundColor: "green",
                  ":hover": {
                    backgroundColor: "darkgreen",
                  },
                  position: "relative",
                }}
                /* onClick={() => {
                  setPage("recovered");
                  setShowConfetti(true);
                }} */
              >
                Hoàn tất
              </Button>
            </Form>
          )}
        </Formik>
        {/*  <TextField
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
 */}
      </Box>
    </Box>
  );
};

export default ResetPassword;
