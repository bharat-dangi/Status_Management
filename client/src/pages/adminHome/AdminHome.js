import React, { useEffect } from "react";
import useStyles from "./styles";
import {
  Card,
  Typography,
  Container,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { fetchAllUsers } from "../../actions/user";

const AdminHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = JSON.parse(localStorage.getItem("profile"));
  const { users } = useSelector((state) => state.userReducer);
  const { token } = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(fetchAllUsers(user._id, token));
  }, [user._id, dispatch, token]);

  const handleDateofBirth = (date) => {
    const d = new Date(date);
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    var monthAlphabet = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthInAlphabet = monthAlphabet[month];
    return day + " " + monthInAlphabet + " " + year;
  };

  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grow in>
        <Container>
          <Grid container spacing={1} className={classes.mainContainer}>
            <Grid item xs={12} sm={7} lg={12}>
              <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
              >
                {users?.map((u) => (
                  <Grid item xs={12} sm={6} md={6} key={u._id}>
                    <Card className={classes.card}>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: "15px" }}
                        >
                          Name
                        </Button>

                        {u.firstName || u.lastName
                          ? u.firstName + " " + u.lastName
                          : "N/A"}
                      </Typography>

                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: "15px" }}
                        >
                          Email
                        </Button>
                        {u.email}
                      </Typography>

                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: "15px" }}
                        >
                          Date of Birth
                        </Button>

                        {u.dateOfBirth
                          ? handleDateofBirth(u.dateOfBirth)
                          : "N/A"}
                      </Typography>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: "15px" }}
                        >
                          Mobile No
                        </Button>
                        {u.mobileNumber ? u.mobileNumber : "N/A"}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default AdminHome;
