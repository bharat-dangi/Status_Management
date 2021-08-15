import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../AdminRoutes/PrivateRoute";
import AdminHome from "../pages/adminHome/AdminHome";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />

        <AdminRoutes exact path="/admin" component={AdminHome} />
      </Switch>
    </Router>
  );
};

export default Routes;
