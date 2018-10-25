import React from 'react';
import AuthService from './auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}

        render={props =>
            AuthService.isLoggedIn ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />
            )
        }
    />
  );

export default PrivateRoute;
