import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";

// "/" path is assumed home page
// please change as per requirement

export function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    /> :
                    <Component {...props} />
            }
            }
        />
    );
}