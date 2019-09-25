import React, { Component, Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import NotFoundPage from "views/notFoundPage";
import HomePage from "views/homePage";
import LoginPage from "views/loginPage";
// dynamic import: (for route based code splitting)
// const HomePage = lazy(() => import(/* webpackChunkName: "homepage" */ "views/homePage"));
// const LoginPage = lazy(() => import(/* webpackChunkName: "loginpage" */ "views/loginPage"));

const routes = [
  {
    path: "/home",
    component: HomePage,
    exact: true,
    type: "private"
  },
  {
    path: "/login",
    component: LoginPage,
    type: "public"
  },
  {
    path: "*",
    component: NotFoundPage,
    type: "public"
  }
];

export default class {{name_cc}} extends Component {
  render() {
    const routeComponents = routes.map(({ path, component, exact, type }, key) => {
      if(type === "public") {
        return exact ? (
          <PublicRoute exact path={path} component={component} key={key} />
        ) : (
          <PublicRoute path={path} component={component} key={key} />
        );
      } 
      else {
        return exact ? (
          <PrivateRoute exact path={path} component={component} key={key} />
        ) : (
          <PrivateRoute path={path} component={component} key={key} />
        );
      }
    });
    return (
      <div>
        <Suspense fallback={<div className="loader-div"></div>}>
          <Switch>
            <Redirect exact from="/" to={isAuthenticated() === true ? "/home" : "/login"} />
            {routeComponents}
          </Switch>
        </Suspense>
      </div>
    );
  }
}
