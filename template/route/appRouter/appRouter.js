import React, { Component, Suspense, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";


const DashboardPage = lazy(() => import(/* webpackChunkName: "dashboard" */ "views/dashboard-page"));
// import DashboardPage from "views/dashboard-page";

const ProfilePage = lazy(() => import(/* webpackChunkName: "profile */ "views/profile-page"));
// import ProfilePage from "views/profile-page";

const ListPage = lazy(() => import(/* webpackChunkName: "list" */ "views/list-page"));
// import ListPage from "views/list-page";

const AboutPage = lazy(() => import(/* webpackChunkName: "about" */ "views/about-page"));
// import AboutPage from "views/about-page";


const routes = [
  {
    path: "/dashboard",
    component: DashboardPage
  },
  {
    path: "/profile",
    component: ProfilePage
  },
  {
    path: "/list",
    component: ListPage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage,
    type: "public"
  }
];

export default class RootRouter extends Component {
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
            <Redirect exact from="/" to={isAuthenticated() === true ? "/dashboard" : "/login"} />
            {routeComponents}
          </Switch>
        </Suspense>
      </div>
    );
  }
}
