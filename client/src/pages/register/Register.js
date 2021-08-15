import React from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AuthForm from "../../components/AuthForm/AuthForm";

const Register = () => {
  const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Status Management &nbsp;
        </Link>
        {new Date().getFullYear()}
      </Typography>
    );
  };
  return (
    <Container component="main" maxWidth="xs">
      <AuthForm register={true} />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
