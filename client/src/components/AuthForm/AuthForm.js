import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../actions/auth";

const AuthForm = ({ register }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const error = useSelector((state) => state.authReducer?.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {register ? "Sign Up" : " Sign in"}
        </Typography>
        <form className={classes.form} noValidate>
          {register && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="firstName"
                label="First Name"
                type="text"
                id="firstName"
                autoComplete="First Name"
                onChange={handleChange}
                value={formData.firstName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                autoComplete="Last Name"
                onChange={handleChange}
                value={formData.lastName}
              />
            </>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={formData.email}
          />
          {register && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                id="dateOfBirth"
                onChange={handleChange}
                value={formData.dateOfBirth}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="mobileNumber"
                label="Mobile Number"
                type="text"
                id="mobileNumber"
                onChange={handleChange}
                value={formData.mobileNumber}
              />
            </>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={formData.password}
          />
          {error && (
            <Typography align="center" color="error">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {register ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href={register ? "/login" : "/register"} variant="body2">
                {register
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
