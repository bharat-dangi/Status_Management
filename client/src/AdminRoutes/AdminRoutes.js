import React from "react";
import { Redirect, Route } from "react-router";

const AdminRoutes = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("profile")) {
      return JSON.parse(localStorage.getItem("profile"));
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoutes;
