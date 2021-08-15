import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/auth";

const NavBar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile"))?.user
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logOut());
    history.push("/login");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={classes.brandContainer}
      >
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Status Management
        </Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {user.firstName + " " + user.lastName}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              LogOut
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
