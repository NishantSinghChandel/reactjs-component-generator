import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";

// "/login" path is assumed login page
// please change as per requirement

export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
            }
            }
        />
    );
}