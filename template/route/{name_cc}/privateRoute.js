import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";

// if user is authenticated, renders the given component,
// else redirects to the redirectPath
// eg. use case: home, profile routes

export function PrivateRoute({ component: Component, ...rest }) {

    const redirectPath = {
        pathname: "/login",
        state: { from: props.location }
    }

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Component {...props} /> :
                    <Redirect
                        to={redirectPath}
                    />
                }
            }
        />
    );
}