import React from "react";
import firebase from "firebase";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Loader } from "ui";

export const PrivateRoute = ({
  component: Component,
  path,
  exact,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        const user = firebase.auth().currentUser;
        return user ? <Component /> : <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

const App = () => {
  const loading = useSelector(state => state.user.status);
  return (
    <>
      <Loader loading={loading === "FETCHING"} />
      <Switch>
        <PrivateRoute path="/home" exact component={Dashboard} />
        <Route path="/login"  component={Login} />
        <Route path="/register"  component={Register} />
        <Redirect path="*" to="/home" />
      </Switch>
    </>
  );
};

export default App;
