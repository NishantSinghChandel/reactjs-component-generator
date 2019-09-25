import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";

// if user is not authenticated, renders the given component,
// else redirects to the redirectPath
// eg. use case: login, signup routes

export function PublicRoute({ component: Component, ...rest }) {

    const redirectPath = {
        pathname: "/",
        state: { from: props.location }
    }
    
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated() ?
                    <Redirect
                        to={redirectPath}
                    /> :
                    <Component {...props} />
                }
            }
        />
    );
}